/**
 * 🎪 CONFIGURACIÓN DEL CIRCO MÁGICO DE CUMPLE AÑOS 🎪
 *
 * ¡Puedes editar este archivo muy fácilmente para cambiar las preguntas,
 * las respuestas correctas, las pistas, el mensaje final y la foto!
 */

const QUIZ_CONFIG = {
  // Título y encabezado principal
  title: "Circo Mágico de Cumpleaños 🎪✨",
  welcomeTitle: "Bienvenida al maravilloso circo digital! ACTIVA LA MÚSICA ANTES DE",
  welcomeSubtitle: "Bueno, en verdad, no; aún no desarrollo la habilidad para capturarte en una computadora y atraparte por la eternidad en un circo, pero el día que lo haga... bueno, tampoco, pero te invitaría a capturar gente y hacerla sufrir (manguito). A lo que sí, puedo invitarte a UN MINI‑QUIZ: pasarás por diferentes preguntas donde solo habrá una respuesta correcta. Si no la sabes, ni modo, qué mensa; pero si la sabes, pasarás a la siguiente pregunta. Deberías activar la música para una experiencia más agradable, la verdad, aunque creo que esto es algo que te tuve que decir al empezar el mensaje, así que lo pongo ahora mismo. Creo que con esto ya viste por qué lo puse en mayúsculas, pero bueno, espero que te la pases bien en estas preguntas :3 o tal vez no…",

  // Lista de preguntas de la trivia
  questions: [
    {
      id: 1,
      actTitle: "Acto 1: Cocina",
      question: "Imagínate que estás en una cocina, tu compañero tiene problemas de audición y una fanbase aferrada a la nostalgia y sus proyectos pasados, tú eres un caballero que solo vende humo y en secreto tienes un hijo llamado ricardoxx con este tipo, le pides una verdura en específico y se la tienes que repetir más de 1 vez porque, aparte de daltónico, es sordo?\n¿Qué escoges?",
      options: [
        "Tomate",
        "Kiwi (es una verdura)",
        "Cebolla????",
        "Termotanque de guerra"
      ],
      correctIndex: 2,
      feedback: "Respuesta correcta: Cebolla.",
      hint: ""
    },
    {
      id: 2,
      actTitle: "Acto 2: Sacrificio",
      question: "Si tuvieras que sacrificar a alguien del grupo para que tenga prosperidad y salud, ¿a quién sacrificarías y por qué a Manguito?",
      options: [
        "Por tonto",
        "Por menso",
        "Por baboso",
        "Por hacerte jugar al Fortnite"
      ],
      correctIndex: 3,
      feedback: "Respuesta correcta: Por hacerte jugar al Fortnite.",
      hint: ""
    },
    {
      id: 3,
      actTitle: "Acto 3: MATEMÁTICAS",
      question: "Calcula la división entre la suma de la integral definida de $3x^2$ desde $0$ hasta $4$ más la sumatoria de los números pares $2k$ con $k$ desde $1$ hasta $6$, y el logaritmo natural de $e$ al cuadrado; a este resultado súmale el factorial de $4$ multiplicado por la raíz cuadrada de $144$ todo dividido entre el producto de $2$ al cubo por el logaritmo en base $2$ de $8$; luego agrégale la raíz cúbica de $27$, y finalmente réstale la suma del seno al cuadrado de $73$ grados más el coseno al cuadrado de $73$ grados",
      options: [
        "Esta no es",
        "67",
        "Esta tampoco",
        "Vete 2 más arriba"
      ],
      correctIndex: 1,
      feedback: "Respuesta correcta: 67.",
      hint: ""
    },
    {
      id: 4,
      actTitle: "Acto 4: FACTORES🗣🔥",
      question: "¿Qué es Nagito Komaeda? (la única incorrecta es la cuarta)",
      options: [
        "Un naco",
        "Un estúpido",
        "Un tonto",
        "La mejor creación del universo"
      ],
      correctIndices: [0,1,2],
      feedback: "Las tres primeras son correctas.",
      hint: ""
    },
    {
      id: 5,
      actTitle: "Acto 5: Violencia",
      question: "Si estuvieras específicamente en un parkour de cierta paradoja final y tuvieras que patear, asesinar y quemar a la lava a alguien por haberse burlado de ti, ¿a quién sería? (todas son correctas)",
      options: [
        "Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil",
        "Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil","Wil freo",
        "Wil","Wil","Wil","Wil","Wil","Wilfredo81","nonada","ItsWilfredo81","wilfredo814","FredoWaos","Todos los anteriores"
      ],
      correctIndices: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
      feedback: "Todas son correctas.",
      hint: ""
    }
  ],

  // Gran mensaje final que se revela al abrir las cortinas
  finalMessage: {
    recipientName: "¡FELIZ CUMPLEAÑOS! 🎂",
    messageTitle: "🎪 ¡La Gran Carpa Sorpresa Se Ha Abierto! 🎪",
    messageText: `¡Hoy celebramos tu vida, tu alegría y cada uno de los momentos hermosos que compartimos contigo! \
Gracias por contagiar a todos con tu energía tan especial, por tus risas y por ser una persona verdaderamente increíble. Que este nuevo año de vida venga cargado de salud, amor, proyectos exitosos y todas las sorpresas maravillosas que te mereces. \
¡Que comience la función de un año lleno de magia! ✨💖🎈`,
    imageSrc: "img/cumpleanero.jpg?v=2",
    imageCaption: "📸 ¡El/La protagonista de esta gran fiesta de cumpleaños!",
    coupons: [
      { id: 1, icon: "🍦", title: "Vale por un Helado", description: "Válido por un helado gigante de tu sabor favorito." },
      { id: 2, icon: "🎬", title: "Vale por Noche de Pelis", description: "Poblado de palomitas y tú eliges la película." },
      { id: 3, icon: "☕", title: "Vale por Café & Platica", description: "Una tarde relajada para platicar sin prisa." },
      { id: 4, icon: "🎁", title: "Vale por un Abrazo Gigante", description: "Abrazo reconfortante canjeable en cualquier momento." }
    ]
  }
};
