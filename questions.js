/**
 * 🎪 CONFIGURACIÓN DEL CIRCO MÁGICO DE CUMPLEAÑOS 🎪
 * 
 * ¡Puedes editar este archivo muy fácilmente para cambiar las preguntas,
 * las respuestas correctas, las pistas, el mensaje final y la foto!
 */

const QUIZ_CONFIG = {
  // Título y encabezado principal
  title: "Circo Mágico de Cumpleaños 🎪✨",
  welcomeTitle: "¡Bienvenid@ a la Gran Función Especial!",
  welcomeSubtitle: "Demuestra cuánto conoces al cumpleañer@ completando los actos de la trivia. ¡Al responder correctamente desbloquearás la Carpa Principal con tu sorpresa!",
  
  // Lista de preguntas de la trivia (puedes agregar o modificar cuantas quieras)
  questions: [
    {
      id: 1,
      actTitle: "Acto 1: El Gran Calentamiento",
      question: "¿Cuál es una de las cosas que MÁS hacen sonreír al cumpleañer@ en un día normal?",
      options: [
        "Un buen café recién hecho por la mañana ☕",
        "Escuchar su canción favorita a todo volumen 🎶",
        "Un postre delicioso o algo dulce 🍰",
        "¡Todas las anteriores juntas! ✨"
      ],
      correctIndex: 3,
      feedback: "¡Exacto! Cualquier detalle lleno de buena vibra le saca una sonrisa instantánea.",
      hint: "Pista del Mago: ¡Piensa en lo mucho que le gusta disfrutar los pequeños momentos!"
    },
    {
      id: 2,
      actTitle: "Acto 2: Desafío de Memoria",
      question: "Si el cumpleañer@ pudiera viajar mágicamente hoy mismo a cualquier lugar, ¿a dónde iría?",
      options: [
        "A una playa paradisíaca a relajarse al sol 🏖️",
        "A una ciudad llena de luces, cultura y comida rica 🏙️",
        "A una cabaña tranquila en la montaña 🌲",
        "A donde sea, ¡pero en excelente compañía! ✈️"
      ],
      correctIndex: 3,
      feedback: "¡Por supuesto! Lo importante siempre es el viaje y la compañía.",
      hint: "Pista del Mago: El destino es genial, ¡pero los recuerdos con amigos/familia son lo mejor!"
    },
    {
      id: 3,
      actTitle: "Acto 3: El Talento Secreto",
      question: "¿Cuál es el súper poder especial del cumpleañer@?",
      options: [
        "Hacer reír a todos incluso en días difíciles 😂",
        "Dar los mejores consejos cuando más se necesitan 💡",
        "Tener un corazón gigante y estar siempre presente 💖",
        "¡Un combo completo de los tres súper poderes! 🌟"
      ],
      correctIndex: 3,
      feedback: "¡Acertaste! Su vibra única alegra a todos a su alrededor.",
      hint: "Pista del Mago: ¡No hay duda de que es un paquete completo de virtudes!"
    },
    {
      id: 4,
      actTitle: "Acto 4: La Pregunta Estelar",
      question: "¿Qué es lo que NO puede faltar en este nuevo año de vida que comienza hoy?",
      options: [
        "Muchos viajes y nuevas aventuras 🗺️",
        "Salud, éxito y momentos de paz 🍀",
        "Risas infinitas, abrazos y buena comida 🥂",
        "¡Mucho amor, felicidad y sueños cumplidos! 🎉"
      ],
      correctIndex: 3,
      feedback: "¡Totalmente! Deseamos que este nuevo año supere todas sus expectativas.",
      hint: "Pista del Mago: ¡El deseo principal incluye todo el amor del mundo!"
    }
  ],

  // Gran mensaje final que se revela al abrir las cortinas
  finalMessage: {
    recipientName: "¡FELIZ CUMPLEAÑOS! 🎂",
    messageTitle: "🎪 ¡La Gran Carpa Sorpresa Se Ha Abierto! 🎪",
    messageText: `¡Hoy celebramos tu vida, tu alegría y cada uno de los momentos hermosos que compartimos contigo! 

Gracias por contagiar a todos con tu energía tan especial, por tus risas y por ser una persona verdaderamente increíble. Que este nuevo año de vida venga cargado de salud, amor, proyectos exitosos y todas las sorpresas maravillosas que te mereces. 

¡Que comience la función de un año lleno de magia! ✨💖🎈`,
    
    // Ruta de la imagen (puedes cambiar 'img/cumpleanero.jpg' por cualquier foto)
    imageSrc: "img/cumpleanero.jpg?v=2",
    imageCaption: "📸 ¡El/La protagonista de esta gran fiesta de cumpleaños!",
    
    // Vales/Cupones de regalo interactivos
    coupons: [
      { id: 1, icon: "🍦", title: "Vale por un Helado", description: "Válido por un helado gigante de tu sabor favorito." },
      { id: 2, icon: "🎬", title: "Vale por Noche de Pelis", description: "Poblado de palomitas y tú eliges la película." },
      { id: 3, icon: "☕", title: "Vale por Café & Platica", description: "Una tarde relajada para platicar sin prisa." },
      { id: 4, icon: "🎁", title: "Vale por un Abrazo Gigante", description: "Abrazo reconfortante canjeable en cualquier momento." }
    ]
  }
};
