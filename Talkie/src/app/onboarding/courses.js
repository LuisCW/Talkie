const courses = {
  //En Español
  espana: {
    expresiones: {
      name: "Expresiones en España",
      type: "expretions",
      url: "expresiones-en-espana",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Saludar como un rolo",
          minutes: 12,
          img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/SNHL2EBJHNFKDMR6OVPV3HNBNI.jpg",
          completed: false,
          url: "/course/expresiones-rolas/saludar-como-un-rolo",
          video: "https://www.youtube.com/embed/C13nu4c-yWA",
          course: "expresiones-rolas",
          summary:
            "En esta lección aprenderás cómo saluda un rolo de pura cepa. Desde el clásico '¡Qué hubo, chino!' hasta el popular '¡Oiga, sumercé!', te enseñaremos cómo usar estas expresiones para sonar auténtico al llegar a Bogotá o cualquier parte de Cundinamarca.",
        },
        {
          title: "Expresiones para hablar con confianza",
          minutes: 18,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8aZq7qMzSrAMyCmwqCSAAeF0lj5YCQRa7kA&s",
          completed: false,
          url: "/course/expresiones-rolas/hablar-con-confianza",
          video: "https://www.youtube.com/embed/_Ja85dXhpUw",
          course: "expresiones-rolas",
          summary:
            "Aquí te mostramos cómo ser el alma de una conversación en Bogotá. Aprende frases como 'No sea pingo' (no sea atrevido), 'Se le tiene' (para confirmar disponibilidad) y el infaltable '¿Cómo así?'. ¡Hablarás como todo un bogotano en un dos por tres!",
        },
        {
          title: "Las joyas del humor rolo",
          minutes: 15,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RDiihSVIp01m8Q92_o0jP3vlJXFgiKYGCw&s",
          completed: false,
          url: "/course/expresiones-rolas/humor-rolo",
          video: "https://www.youtube.com/embed/fakeRoloHumor",
          course: "expresiones-rolas",
          summary:
            "El humor rolo tiene su propio estilo, lleno de ironía y expresiones únicas. Aprende a usar '¡No joda!' para mostrar sorpresa, 'De malas' para resignarte con estilo, y 'Me dejó la flota' cuando pierdes el bus. ¡Serás la estrella de cualquier tertulia rola!",
        },
      ],
      video: "https://www.youtube.com/embed/fakeRoloCourseIntro",
      summary:
        "Este curso está diseñado para enseñarte las expresiones más comunes del dialecto rolo, utilizado principalmente en Bogotá y sus alrededores. Desde saludos hasta frases para el día a día, aprenderás a comunicarte como todo un local.",
    },

    comidas: {
      name: "Comidas en España",
      type: "comidas",
      url: "comidas-rolas",
      type: "food",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Ajiaco santafereño",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Ajiaco_santafere%C3%B1o.jpg",
          completed: false,
          url: "/course/comidas-rolas/ajiaco",
          video: "https://www.youtube.com/embed/fakeAjiacoVideo",
          course: "comidas-rolas",
          summary:
            "Descubre cómo preparar y disfrutar el plato insignia de Bogotá: el ajiaco santafereño. Aprenderás sobre sus ingredientes clave como el pollo, las papas criolla, pastusa y sabanera, y cómo la mazorca y las guascas le dan ese toque único.",
        },
        {
          title: "Almojábanas y pandebonos",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Almojabanas.jpg",
          completed: false,
          url: "/course/comidas-rolas/almojabanas-pandebonos",
          video: "https://www.youtube.com/embed/fakeAlmojabanas",
          course: "comidas-rolas",
          summary:
            "En esta lección conocerás los famosos almojábanas y pandebonos. Aprende su origen, cómo se hacen, y lo mejor, cómo combinarlos con una buena taza de chocolate santafereño.",
        },
        {
          title: "Postres y masato",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Masato.jpg",
          completed: false,
          url: "/course/comidas-rolas/postres-y-masato",
          video: "https://www.youtube.com/embed/fakeMasatoPostres",
          course: "comidas-rolas",
          summary:
            "Descubre los postres tradicionales rolos como el merengón y cómo el masato acompaña las comidas familiares. Aprende a reconocer estos sabores únicos de la región andina.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeComidasIntro",
      summary:
        "Este curso te llevará a un viaje culinario por Bogotá y la región rola. Conoce los platos típicos, postres y bebidas que definen la gastronomía de esta tierra.",
    },

    dichos: {
      name: "Dichos Rolos",
      type: "dichos",
      url: "dichos-rolos",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Calle_del_Embudo.jpg",
          completed: false,
          url: "/course/dichos-rolos/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeRoloDichos",
          course: "dichos-rolos",
          summary:
            "Aprende dichos como 'Al que madruga, Dios le ayuda', 'El que no llora, no mama' y otros que los rolos usan para animarse y enfrentar el día.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Plaza_de_Mercado_de_Paloquemao.jpg",
          completed: false,
          url: "/course/dichos-rolos/imprimir-amigos",
          video: "https://www.youtube.com/embed/fakeDichosImpresionar",
          course: "dichos-rolos",
          summary:
            "Con estos dichos podrás dejar a todos boquiabiertos: 'Más perdido que un chulo en un balneario' o 'Hablando de Roma, por la puerta asoma'. ¡No te los pierdas!",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/9/92/Cerro_de_Monserrate_desde_Bogot%C3%A1.jpg",
          completed: false,
          url: "/course/dichos-rolos/humor",
          video: "https://www.youtube.com/embed/fakeDichosHumor",
          course: "dichos-rolos",
          summary:
            "La sabrosura rola está llena de humor. Aprende dichos como 'Me dejaron viendo un chispero' y 'Más raro que un perro a cuadros'. ¡Te reirás aprendiendo!",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosIntro",
      summary:
        "En este curso aprenderás los dichos más populares de Bogotá y sus alrededores, ideales para entender y disfrutar la cultura rola desde un enfoque divertido.",
    },
  },
  mexico: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  argentina: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  colombia: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  chile: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  //En Inglés
  americano: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  britanico: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  australiano: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  canadiense: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },
  nuevozelandez: {
    expresiones: {
      name: "Expresiones Paisas",
      type: "expresiones",
      url: "expresiones-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "expretions",
      lessons: [
        {
          title: "Saludar como un paisa",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Parque_de_las_luces.jpg",
          completed: false,
          url: "/course/expresiones-paisas/saludar-como-un-paisa",
          video: "https://www.youtube.com/embed/fakePaisaGreeting",
          course: "expresiones-paisas",
          summary:
            "Aprende a saludar como un paisa auténtico con expresiones como '¡Hombre, parce!' y '¡Qué más pues!'. Descubre cómo romper el hielo en Medellín y sus alrededores.",
        },
        {
          title: "Expresiones para el día a día",
          minutes: 15,
          img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pueblito_Paisa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakePaisaDaily",
          course: "expresiones-paisas",
          summary:
            "Desde '¡Pues claro!' hasta '¡De una!', aprende a usar las expresiones paisas más comunes para sonar como un verdadero antioqueño en cualquier conversación.",
        },
        {
          title: "El humor paisa",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Medell%C3%ADn_-_Zona_Rosa.jpg",
          completed: false,
          url: "/course/expresiones-paisas/humor-paisa",
          video: "https://www.youtube.com/embed/fakePaisaHumor",
          course: "expresiones-paisas",
          summary:
            "El humor paisa es único y encantador. Aprende frases como '¡No me joda pues!' y 'Más enrollado que un bulto de anzuelos' para agregarle chispa a tus conversaciones.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaCourseIntro",
      summary:
        "Este curso te enseña las expresiones más usadas en el acento paisa, desde saludos hasta frases humorísticas, para que te sientas como en casa en Antioquia.",
    },

    comidas: {
      name: "Comidas Paisas",
      type: "comidas",
      url: "comidas-paisas",
      totalLessons: 3,
      completedLessons: 0,
      type: "food",
      lessons: [
        {
          title: "La bandeja paisa",
          minutes: 20,
          img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeja_Paisa_1.jpg",
          completed: false,
          url: "/course/comidas-paisas/bandeja-paisa",
          video: "https://www.youtube.com/embed/fakeBandejaPaisa",
          course: "comidas-paisas",
          summary:
            "Descubre los secretos detrás del plato más icónico de Antioquia: la bandeja paisa. Con arroz, frijoles, carne molida, huevo, chorizo, arepa y plátano, ¡una explosión de sabores!",
        },
        {
          title: "Arepas paisas",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Arepas.jpg",
          completed: false,
          url: "/course/comidas-paisas/arepas",
          video: "https://www.youtube.com/embed/fakeArepasPaisa",
          course: "comidas-paisas",
          summary:
            "Aprende sobre las distintas versiones de la arepa paisa y cómo se convierte en un acompañamiento esencial en cada comida. ¡El alma de la gastronomía antioqueña!",
        },
        {
          title: "Postres paisas",
          minutes: 14,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Postre_de_natas.jpg",
          completed: false,
          url: "/course/comidas-paisas/postres",
          video: "https://www.youtube.com/embed/fakePostresPaisa",
          course: "comidas-paisas",
          summary:
            "Conoce los postres tradicionales paisas como el postre de natas, los buñuelos y las brevas con arequipe. Aprende cómo prepararlos y disfrutarlos.",
        },
      ],
      video: "https://www.youtube.com/embed/fakePaisaComidasIntro",
      summary:
        "Un recorrido por los sabores más representativos de la gastronomía paisa. Desde la bandeja paisa hasta los postres, este curso te hará agua la boca.",
    },

    dichos: {
      name: "Dichos Paisas",
      type: "dichos",
      url: "dichos-paisas",
      type: "people",
      totalLessons: 3,
      completedLessons: 0,
      lessons: [
        {
          title: "Dichos para el día a día",
          minutes: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Parque_Berr%C3%ADo.jpg",
          completed: false,
          url: "/course/dichos-paisas/dia-a-dia",
          video: "https://www.youtube.com/embed/fakeDichosPaisaDia",
          course: "dichos-paisas",
          summary:
            "Descubre dichos paisas para las conversaciones cotidianas como 'Hágale pues', 'No se preocupe, mijo', y 'Eso está más claro que el agua'.",
        },
        {
          title: "Dichos para impresionar",
          minutes: 12,
          img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Antioquia_Country.jpg",
          completed: false,
          url: "/course/dichos-paisas/impresionar",
          video: "https://www.youtube.com/embed/fakePaisaImpresionar",
          course: "dichos-paisas",
          summary:
            "Aprende dichos paisas que te harán destacar: 'Más enredado que cucarrón en motosa' y 'Eso no lo encuentra ni el diablo con linterna'.",
        },
        {
          title: "Dichos con humor",
          minutes: 13,
          img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Paisaje_Cultural_Cafetero.jpg",
          completed: false,
          url: "/course/dichos-paisas/humor",
          video: "https://www.youtube.com/embed/fakePaisaHumorDichos",
          course: "dichos-paisas",
          summary:
            "Añade chispa a tus conversaciones con dichos humorísticos paisas como 'Eso está más feo que pegarle a la mamá' y 'Más bravo que un marrano en diciembre'.",
        },
      ],
      video: "https://www.youtube.com/embed/fakeDichosPaisaIntro",
      summary:
        "Conoce los dichos paisas más icónicos para entender el humor y la cultura antioqueña. Un curso lleno de sabiduría popular y sonrisas.",
    },
  },

};

export default courses;
