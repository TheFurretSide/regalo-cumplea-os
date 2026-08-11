/**
 * 🎪 LÓGICA Y MOTOR INTERACTIVO DEL CIRCO MÁGICO DE CUMPLEAÑOS
 * -------------------------------------------------------------
 * Maneja el flujo de la trivia, animaciones de cortina, confeti,
 * efectos de sonido generados con Web Audio API y cupones de regalo.
 */

// Estado global de la aplicación
const AppState = {
  currentIndex: 0,
  score: 0,
  audioPlaying: false,
  audioCtx: null,
  bgMusicInterval: null,
  specialMessageIndex: 0 // tracks special message progress for question 4
};

// Mensajes especiales que se muestran cuando se elige la cuarta opción incorrecta del Acto 4
const specialMessages = [
  "Ijoles te equivocaste :(",
  "Oye... te volviste a equivocar",
  "No, no es esta",
  "No te queda claro?",
  "Ya van 5 veces maichu...",
  "Aceptalo, esta mal",
  "Dejalo ir",
  "Dejar ir es amar maichu",
  "Porfavor no vale la pena",
  "Ya esta",
  "Porfavor",
  "No va a ser correcta rindete",
  "No vas a lograr nada",
  "Aparte ves por quien estas peleando?",
  "De todos... nagito????",
  "Se que existen gustos malo pero los tuyos...",
  "No va a funcionar ",
  "Si sigues vas a perder mas tu tiempo",
  "Tu sabes cual es la correcta en verdad esta es una mentira",
  "Que determinacion, lastima que sea por este wey...",
  "Podrias haber terminado el quiz, pero decidiste sacrificar tu tiempo por... ni te lo voy a recordar ya sabes quien es",
  "ESTAS CIEGA??? ESTA NO ES MAITENA",
  "LA NEGACION ES MALA TIENES QUE SUPERAR ESTA ETAPA",
  "aunque lleva tiempo",
  "Ya la superaste?",
  "No?",
  ":("

    "Bueno, algun dia lo dejaras ir pero parece que no sera hoy",
    "Me da pena por ti pero bueno",
    "Ya esta es la penultima, aun tienes 1 oportunidad para arrepentirte y escoger la correcta, confio en ti",
    "... te doy otra",
    "........... ok ahora si es la ultima",
    "MAITU PORFAVOR 😭😭😭",
    "AHORA SI ESTA ES LA ULTIMA SI VUELVAS A ESCOGERLA ME VOY A SENTIR MUY DEPECIONADO",
    "...Que decepcion, pero asi te quiero con tus gustos culeros <3",
];

// Background music handling
let backgroundAudio = null;
function playBackgroundTrack(src, loop = true) {
  if (!backgroundAudio) {
    backgroundAudio = new Audio();
    backgroundAudio.volume = 0.5;
  }
  backgroundAudio.src = src;
  backgroundAudio.loop = loop;
  backgroundAudio.play().catch(() => {});
}

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderAppTitle();
  renderWelcomeScreen();
  setupAudioEngine();
  setupConfettiCanvas();
}

function renderAppTitle() {
  document.title = QUIZ_CONFIG.title;
   // Preserve custom brand title; only set document title
   // const brandTitle = document.getElementById("brand-title");
   // if (brandTitle) brandTitle.textContent = QUIZ_CONFIG.title;
}

// -------------------------------------------------------------
// 🔊 MOTOR DE EFECTOS DE SONIDO SINTETIZADOS (Sin archivos externos)
// -------------------------------------------------------------
function toggleMusicButton() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  // Initialise backgroundAudio with Claire if not yet created
  if (!backgroundAudio) {
    playBackgroundTrack('audio/claire.mp3');
    if (audioBtn) audioBtn.innerHTML = "🔊 Pausar Música";
    return;
  }
  if (backgroundAudio.paused) {
    backgroundAudio.play().catch(() => {});
    if (audioBtn) audioBtn.innerHTML = "🔊 Pausar Música";
  } else {
    backgroundAudio.pause();
    if (audioBtn) audioBtn.innerHTML = "🎵 Activar Música";
  }
}

function setupAudioEngine() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (audioBtn) {
    audioBtn.addEventListener("click", toggleMusicButton);
  }
}

function getAudioContext() {
  if (!AppState.audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    AppState.audioCtx = new AudioCtx();
  }
  if (AppState.audioCtx.state === "suspended") {
    AppState.audioCtx.resume();
  }
  return AppState.audioCtx;
}

// Tocar tono sintético breve
function playTone(freq, type = "sine", duration = 0.2, volume = 0.15) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.log("Audio not allowed yet", e);
  }
}
// Helper to play a short audio file (wav/mp3)
function playAudio(src) {
  const a = new Audio(src);
  a.volume = 0.5;
  a.play().catch(() => {});
}
// Cancel sounds (wrong answer)
const cancelSounds = [
  "audio/Cancel2.wav",
  "audio/cancel11.wav",
  "audio/cancel6.wav"
];
function playCancelSound() {
  const idx = Math.floor(Math.random() * cancelSounds.length);
  const src = cancelSounds[idx];
  console.log('Playing cancel sound:', src);
  playAudio(src);
}
// Decision sounds (correct answer)
const decisionSounds = [
  "audio/decision24.wav",
  "audio/decision25.wav",
  "audio/decision4.wav",
  "audio/decision5.wav"
];
function playDecisionSound() {
  const idx = Math.floor(Math.random() * decisionSounds.length);
  const src = decisionSounds[idx];
  console.log('Playing decision sound:', src);
  playAudio(src);
}


// Sonido de respuesta correcta (Acorde arpegiado brillante)
function playCorrectSound() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => playTone(freq, "triangle", 0.3, 0.2), idx * 80);
  });
}

// Sonido de respuesta incorrecta (Zumbido sutil)
function playWrongSound() {
  playTone(220, "sawtooth", 0.25, 0.15);
  setTimeout(() => playTone(180, "sawtooth", 0.3, 0.15), 150);
}

// Fanfarria de la Gran Carpa Final
function playFanfareSound() {
  const fanfare = [
    { freq: 523.25, time: 0, dur: 0.15 },
    { freq: 659.25, time: 150, dur: 0.15 },
    { freq: 783.99, time: 300, dur: 0.15 },
    { freq: 1046.50, time: 450, dur: 0.6 }
  ];
  fanfare.forEach(note => {
    setTimeout(() => playTone(note.freq, "sine", note.dur, 0.25), note.time);
  });
}

// Música ambiental sintetizada estilo caja de música
function toggleBackgroundMusic() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (AppState.audioPlaying) {
    AppState.audioPlaying = false;
    if (AppState.bgMusicInterval) clearInterval(AppState.bgMusicInterval);
    if (audioBtn) audioBtn.innerHTML = "🎵 Activar Música";
  } else {
    AppState.audioPlaying = true;
    if (audioBtn) audioBtn.innerHTML = "🔊 Pausar Música";
    getAudioContext();

    const melody = [523.25, 659.25, 783.99, 659.25, 880.00, 783.99, 659.25, 587.33];
    let noteIdx = 0;

    AppState.bgMusicInterval = setInterval(() => {
      if (AppState.audioPlaying) {
        playTone(melody[noteIdx], "sine", 0.4, 0.05);
        noteIdx = (noteIdx + 1) % melody.length;
      }
    }, 450);
  }
}

// -------------------------------------------------------------
// 🎪 VISTAS / ACTOS DEL CIRCO
// -------------------------------------------------------------

// ACTO 1: Pantalla de Bienvenida
function renderWelcomeScreen() {
  const container = document.getElementById("quiz-content");
  if (!container) return;

  container.innerHTML = `
    <div class="welcome-card fade-in">
      <div class="circus-tent-icon">🎪</div>
      <h1 class="welcome-title">${QUIZ_CONFIG.welcomeTitle}</h1>
      <p class="welcome-subtitle">${QUIZ_CONFIG.welcomeSubtitle}</p>
      
      <img src="img/circus_banner.jpg?v=2" alt="Circo Mágico de Cumpleaños" class="banner-img-preview" onerror="this.style.display='none'" />
      
      <button class="btn-primary" onclick="startQuiz()">
         Empieza la abstrac‑digo las preguntas..
      </button>
    </div>
  `;
  // No auto‑play on welcome; music will start when user presses the button
}

// Iniciar Trivia
function startQuiz() {
  // Switch to quiz music (Ashes theme) without resetting audio object
  playBackgroundTrack('audio/ashes_theme.mp3');
  // Ensure button reflects playing state
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (audioBtn) audioBtn.innerHTML = "🔊 Pausar Música";
  playCorrectSound();
  AppState.currentIndex = 0;
  AppState.score = 0;
  renderQuestion();
}

// ACTO 2: Renderizar Pregunta Actual
function renderQuestion() {
  const container = document.getElementById("quiz-content");
  const questions = QUIZ_CONFIG.questions;
  
  if (AppState.currentIndex >= questions.length) {
    triggerGrandFinale();
    return;
  }

  const q = questions[AppState.currentIndex];

  // Construir dots de progreso
  const dotsHtml = questions.map((_, i) => {
    let statusClass = "";
    if (i === AppState.currentIndex) statusClass = "active";
    else if (i < AppState.currentIndex) statusClass = "completed";
    return `<div class="ticket-dot ${statusClass}">${i + 1}</div>`;
  }).join("");

  // Opciones
  const optionsHtml = q.options.map((optText, index) => {
    return `
      <button class="option-btn" onclick="checkAnswer(${index}, this)">
        <span class="opt-bullet">✨</span>
        <span class="opt-text">${optText}</span>
      </button>
    `;
  }).join("");

    container.innerHTML = `
      <div class="fade-in">
        <div class="progress-bar-container">
          <div class="ticket-tracker">${dotsHtml}</div>
        </div>

        <div class="act-badge">${q.actTitle || `Acto ${AppState.currentIndex + 1}`}</div>
        <div id="special-box" class="special-box" aria-live="assertive" style="display:none;"></div>
        <h2 class="question-text">${q.question}</h2>

        <div class="options-grid">
          ${optionsHtml}
        </div>

        <div class="quiz-footer-actions">
          <button class="hint-btn" onclick="toggleHint()">
            🪄 ¿Necesitas una pista del Mago?
          </button>
        </div>

        <div id="hint-box" class="hint-box">
          ${q.hint}
        </div>
      </div>
    `;
}

// Toggle Pista del Mago
function toggleHint() {
  const hintBox = document.getElementById("hint-box");
  if (hintBox) {
    const isVisible = hintBox.style.display === "block";
    hintBox.style.display = isVisible ? "none" : "block";
    if (!isVisible) playTone(880, "sine", 0.15, 0.1);
  }
}

// Validar Respuesta Seleccionada
function checkAnswer(selectedIndex, btnElement) {
  const currentQ = QUIZ_CONFIG.questions[AppState.currentIndex];
  const allOptionBtns = document.querySelectorAll(".option-btn");
  
  // Deshabilitar todos los botones para evitar doble clic


  const isCorrect = Array.isArray(currentQ.correctIndices)
    ? currentQ.correctIndices.includes(selectedIndex)
    : selectedIndex === currentQ.correctIndex;

  if (isCorrect) {
    btnElement.classList.add("correct");
    // Play decision sound for correct answer
    playDecisionSound();
    launchConfettiBurst();
    AppState.score++;
    // Advance after short delay
    setTimeout(() => {
      AppState.currentIndex++;
      renderQuestion();
    }, 1600);
  } else {
    // Special handling for the fourth option (index 3) of Act 4 (question id 4)
    if (currentQ.id === 4 && selectedIndex === 3) {
      // Mostrar mensaje especial correspondiente
      const message = specialMessages[AppState.specialMessageIndex] || "";
      const specialBox = document.getElementById("special-box");
        if (specialBox) {
          specialBox.style.display = "block";
          specialBox.innerHTML = `<p>${message}</p>`;
        }
      // Avanzar al siguiente mensaje
      AppState.specialMessageIndex = (AppState.specialMessageIndex + 1) % specialMessages.length;
      // Si hemos completado la lista, desactivar la cuarta opción
      if (AppState.specialMessageIndex === 0) {
        const fourthBtn = allOptionBtns[3];
        fourthBtn.disabled = true;
        fourthBtn.style.pointerEvents = "none";
        fourthBtn.classList.add("disabled");
      }
      // Sonido de cancelación para respuesta incorrecta
      playCancelSound();
      // Reactivar los demás botones después de un breve retraso
      setTimeout(() => {
        allOptionBtns.forEach(btn => {
          btn.style.pointerEvents = "auto";
          btn.disabled = false;
        });
      }, 1200);
    } else {
      btnElement.classList.add("wrong");
      // Play cancel sound for wrong answer
      playCancelSound();
      // Reactivar botones para permitir nuevo intento
      setTimeout(() => {
        allOptionBtns.forEach(btn => btn.style.pointerEvents = "auto");
      }, 1200);
    }
  }
}

// -------------------------------------------------------------
// 🎪 ACTO 3: GRAN FINALE (CORTINAS Y MENSAJE REVELADO)
// -------------------------------------------------------------
function triggerGrandFinale() {
  playFanfareSound();
  
  const curtainsContainer = document.getElementById("curtains-container");
  if (curtainsContainer) {
    curtainsContainer.classList.add("active");
    // Breve espera y luego abrir cortinas
    setTimeout(() => {
      curtainsContainer.classList.add("open");
      launchGrandFinaleConfetti();
    }, 400);
  }

  renderFinaleScreen();
}

function renderFinaleScreen() {
  const container = document.getElementById("quiz-content");
  const final = QUIZ_CONFIG.finalMessage;
  
  // Play the final storybook music
  playBackgroundTrack("【Witch's Heart OST】 Storybook.mp3");
  
  const couponsHtml = final.coupons ? final.coupons.map(c => `
    <div class="coupon-ticket" onclick="claimCoupon(this)">
      <div class="coupon-icon">${c.icon}</div>
      <div class="coupon-title">${c.title}</div>
      <div class="coupon-desc">${c.description}</div>
    </div>
  `).join("") : "";

  container.innerHTML = `
    <div class="finale-card">
      <div class="finale-badge">⭐ ¡CARPA PRINCIPAL DESBLOQUEADA! ⭐</div>
      <h1 class="finale-recipient">${final.recipientName}</h1>
      <h3 class="finale-title">${final.messageTitle}</h3>
      
      <div class="photo-frame-container">
        <div class="photo-frame">
          <img src="${final.imageSrc}" alt="Cumpleañer@" onerror="this.src='img/circus_banner.jpg?v=2'" />
        </div>
        <div class="photo-caption">${final.imageCaption || ""}</div>
      </div>

      <div class="message-box">
        ${final.messageText}
      </div>

      ${couponsHtml ? `
        <div class="coupons-section-title">
          🎟️ Tus Vales de Regalo Especiales (Haz clic para canjear)
        </div>
        <div class="coupons-grid">
          ${couponsHtml}
        </div>
      ` : ""}

      <button class="btn-secondary" onclick="restartApp()">
        🔄 Volver a Vivir la Función
      </button>
    </div>
  `;
}

// Canjear Vale de Regalo
function claimCoupon(couponEl) {
  if (!couponEl.classList.contains("claimed")) {
    couponEl.classList.add("claimed");
    playCorrectSound();
    launchConfettiBurst();
  }
}

// Reiniciar Experiencia
function restartApp() {
  const curtainsContainer = document.getElementById("curtains-container");
  if (curtainsContainer) {
    curtainsContainer.classList.remove("open");
    setTimeout(() => {
      curtainsContainer.classList.remove("active");
    }, 800);
  }
  startQuiz();
}

// -------------------------------------------------------------
// 🎉 SISTEMA DE CONFETI EN CANVAS
// -------------------------------------------------------------
let confettiParticles = [];
let confettiCtx = null;
let confettiAnimationId = null;

function setupConfettiCanvas() {
  const canvas = document.getElementById("confetti-canvas");
  if (!canvas) return;
  
  confettiCtx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

function resizeCanvas() {
  const canvas = document.getElementById("confetti-canvas");
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function launchConfettiBurst() {
  const colors = ["#FF85A1", "#F4C430", "#95E1D3", "#E8DFF5", "#FF6B81"];
  for (let i = 0; i < 40; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }
  if (!confettiAnimationId) renderConfettiLoop();
}

function launchGrandFinaleConfetti() {
  const colors = ["#FF85A1", "#F4C430", "#95E1D3", "#E8DFF5", "#FF6B81", "#FFF275"];
  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: Math.random() * window.innerWidth,
      y: -20,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 5 + 3,
      size: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 8,
      opacity: 1
    });
  }
  if (!confettiAnimationId) renderConfettiLoop();
}

function renderConfettiLoop() {
  if (!confettiCtx) return;

  const canvas = document.getElementById("confetti-canvas");
  confettiCtx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles.forEach((p, idx) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.2; // gravedad
    p.rotation += p.rSpeed;
    p.opacity -= 0.008;

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = Math.max(0, p.opacity);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    confettiCtx.restore();

    if (p.opacity <= 0 || p.y > window.innerHeight) {
      confettiParticles.splice(idx, 1);
    }
  });

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(renderConfettiLoop);
  } else {
    confettiAnimationId = null;
  }
}
