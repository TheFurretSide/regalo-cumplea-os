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
    recipientName: "LO LOGRASTE!",
    messageTitle: "FELIZ CUMPLEAÑOS WACHINA (atrasado)",
    messageText: `¡HOOOOOOOOOOLA, MAITU! ¿Cómo estás? ¿Bien? ¿Cómo la pasaste? Ya sé que la pasaste bien y que fue un día propicio. Espero también que disfrutaras los tomates y que aprovecharas para hacerte algo con ellos, porque si no, ¿qué esperas? Probablemente ya estén podridos para la fecha en que te entrego esto, pero no pasa nada, un poco de sal lo arregla :p

Ya sé, vengo tarde, ya sé que ya casi pasa una semana o más de tu cumple, pero se me prendió el coco a última hora para hacerte algo más especial y que no fuera un simple "fc🗣🔥", que yo sé que estás feliz con eso, pero eso no significa que no te merezcas algo más, ¿sabes?

Prácticamente es tu último año donde el 1 predomina en tu edad, y cuando te mandes una cagada o algo por el estilo no va a sonar tan fuerte, porque jaja es muy diferente a que digan "tiene 20" a "19", ¡así que el mejor consejo que puedo darte es DISFRUTA DE LA MEJOR MANERA QUE PUEDAS! Reíte, enojate, frustrate, gritá, pegá, comé lo que te salga del reverendo cul... digo, del alma, y echale ganas a todo lo que te apasiona.

De igual manera, que estés más cerca de los 20 no significa que te tengas que dejar comer por eso de llegar a los 20; puede que la edad suene más seria, pero no significa que debas dejar de hacer todo lo que te hace ser tú :p Aún te quedan muchos años por vivir para ponerte seria a una edad muy en específico, así que no dejes que te carcoma eso. Y cuando empiece a carcomerte, siempre puedes volver a esta página para leer lo que te puse y decirte "Pues ¿chad, no?" (tal vez no eso, pero para que te refresques la memoria y puedas seguir sin tanto pesar).

¿Qué te digo que no sepas? Que te quiero, que te adoro, que TE AMO de una manera muy fuerte y no me da pena decirlo ni gritarlo en público. Sos la mejor amiga que pude haber deseado en muchos años, con un humor que los dos manejamos y donde el tiempo se me va volando siempre que estamos en llamada <3 Me encanta pasar tiempo con los chicos, pero las veces que nos quedamos los dos solitos hablando son las que más me llenan. Me siento seguro con alguien como tú y con las pláticas estúpidas que tenemos; cada chiste rancio o repetitivo siempre se siente fresco y con gracia, no importa cuántas veces lo repitamos, con que seas tú, lo hace especial y único.

Estoy muy orgulloso de cómo avanzaste en muchas cosas: tu vida personal, vida en internet, arte, metas, y muchas cosas en las que he notado una mejora. Aunque hayas tenido tus momentos de bajón o no estuvieras al 100, todavía seguías con esa chispa que te mantiene como sos y eso es de admirar. Sos una persona de valor, de amor y de ternura, muy bonita a tu manera; tan única, que tener a alguien como tú en nuestras vidas es prácticamente un regalo divino y, a veces, tonto, ¡pero regalo es regalo y es lo único que cuenta!

Y nada, espero que te hiciera reír aunque sea un poco o te pareciera bonito. ¡Un cumpleaños más que paso contigo y uno menos para cuando lo podamos celebrar en persona (IRL)! Así que es cuestión de tiempo para que llegue el momento :3 Recuerda que si se te cae el mundo, tendrás siempre a un grupo que estará detrás de ti, y si el grupo no está, tendrás a una persona que siempre te va a apoyar en lo que hagas... y si ya no está, es porque me morí.

Te quiere tu gran amigo, Furret ❤`,
    imageSrc: "maishu.png",
    imageCaption: "mira la cara de tonta que tenes (no tenes otra)",
    coupons: [
      { id: 1, icon: "🍦", title: "Vale por un Helado", description: "Válido por un helado gigante de tu sabor favorito." },
      { id: 2, icon: "🎬", title: "Vale por Noche de Pelis", description: "Poblado de palomitas y tú eliges la película." },
      { id: 3, icon: "☕", title: "Vale por Café & Platica", description: "Una tarde relajada para platicar sin prisa." },
      { id: 4, icon: "🎁", title: "Vale por un Abrazo Gigante", description: "Abrazo reconfortante canjeable en cualquier momento." }
    ]
  }
};
