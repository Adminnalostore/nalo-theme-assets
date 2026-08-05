/* Nalo · Landings de producto · motor genérico.
   Enganchado UNA vez en templates/pages/product.json (sección nalo_landing):
     <div id="nalo-landing"></div>
     <script src=".../landing.js"></script>
   Detecta el producto por handle de la URL y renderiza sus secciones debajo de la
   ficha nativa. Contenido de nalostore.com (migración de la tienda de Nalo).
   Tipos de sección: accordion | instagram | gallery | compare | techsplit | stats | features | faq */
(function () {
  var mount = document.getElementById("nalo-landing");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var S = document.currentScript || document.querySelector('script[src*="landing.js"]');
  var B = S.src.replace(/landing\.js.*$/, "");
  var IG = "https://www.instagram.com/nalostore__/";

  var LANDINGS = {
    "musculosa-reductora-2-0-nalo": [
      { type: "instagram", title: "Miles de reseñas orgánicas", subtitle: "Más de 10 millones de visitas en Instagram",
        link: IG, videos: ["brandon", "juan", "fabri", "bigari"] },
      { type: "gallery", title: "Cambio visible desde que te la ponés.", highlight: "visible",
        leftTitle: "Resultados reales validados por usuarios.", stat: "92%",
        statTxt: "sintió la panza más firme y plana al ponerla",
        note: "* Basado en encuesta a 150 usuarios. Los resultados pueden variar según el cuerpo y el talle elegido. Usar el talle recomendado por nuestra guía para máxima efectividad.",
        pairs: [ [B+"landings/musculosa/antes.webp", B+"landings/musculosa/despues.webp"],
                 [B+"landings/musculosa/a_p2.webp", B+"landings/musculosa/d_p2.webp"],
                 [B+"landings/musculosa/a1.webp", B+"landings/musculosa/d1.webp"],
                 [B+"landings/musculosa/a_p4.webp", B+"landings/musculosa/d_p4.webp"],
                 [B+"landings/musculosa/a2.webp", B+"landings/musculosa/d2.webp"] ] },
      { type: "compare", title: "Por qué Nalo gana:", highlight: "Nalo gana:", subtitle: "Ingeniería textil real.",
        logo: B+"landings/musculosa/cmp/logo.png",
        images: [B+"landings/musculosa/cmp/col0.png", B+"landings/musculosa/cmp/col1.png", B+"landings/musculosa/cmp/col2.png", B+"landings/musculosa/cmp/col3.png"],
        cols: ["", "Faja tradicional", "Musculosa común", "Cinturón postural"],
        rows: [ ["Invisible bajo cualquier prenda",1,0,1,0], ["Reduce panza al instante",1,1,0,0],
                ["Corrige la postura",1,0,0,1], ["Transpirable y cómoda",1,0,1,0],
                ["Apta para uso diario y deporte",1,0,1,0], ["Disimula pecho",1,0,0,0],
                ["Doble capa de compresión",1,0,0,0] ]},
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: B+"landings/musculosa/tec/media.webp", items: [
        ["Abdomen Plano Al Instante", "Doble capa de compresión en la zona abdominal que reduce visualmente hasta 2 talles desde el primer uso. Disimula el abdomen y el tejido adiposo del pecho sin esfuerzo.", B+"landings/musculosa/tec/ic0.png"],
        ["Postura Erguida Y Confiada", "El entramado posterior ejerce una tracción ligera que alinea tus hombros y columna, corrigiendo la postura encorvada del escritorio o el celular.", B+"landings/musculosa/tec/ic1.png"],
        ["Invisible Bajo La Ropa", "Costuras planas y corte seamless. No se marca bajo camisas, remeras ni ropa deportiva. Nadie nota que la llevás puesta.", B+"landings/musculosa/tec/ic2.png"],
        ["Compresión Que No Aprieta", "Mezcla de 75% Nylon y 25% Spandex que comprime sin cortar la circulación. Todo el día sin molestias ni marcas.", B+"landings/musculosa/tec/ic3.png"],
        ["Transpirable Y De Secado Rápido", "El tejido técnico permite que la piel respire y evapora la humedad rápidamente. Ideal para la oficina, eventos o entrenando.", B+"landings/musculosa/tec/ic4.png"],
        ["Calidad Premium Duradera", "Fibras de alta densidad que mantienen la compresión y forma original lavado tras lavado. Pensada para durar años.", B+"landings/musculosa/tec/ic5.png"]
      ]},
      { type: "stats", title: "Resultados Comprobados por Nuestros Clientes",
        note: "Resultados comprobados en un estudio interno con más de 150 usuarios del producto.",
        items: [ ["93%","Dijeron sentirse más seguros al usar la Musculosa Reductora."],
                 ["95%","Contaron que se sintieron más confiados: en una cita, en el laburo o en el gimnasio."],
                 ["50%","Afirmaron que al notarse más firmes y prolijos, se sintieron motivados a entrenar más."] ]}
    ],

    "coolbamboo-pack-de-4-boxers-de-tela-de-bambu": [
      { type: "gallery", title: "Cambio visible desde que te lo ponés.", highlight: "visible",
        leftTitle: "Resultados reales validados por usuarios.", stat: "91%",
        statTxt: "lo prefirió a su boxer de algodón después de probar los dos.",
        beforeLabel: "Boxer común", afterLabel: "CoolBamboo",
        note: "* Estudio propio con 112 participantes, comparación directa contra boxer de algodón. Los resultados pueden variar según el uso.",
        pairs: [ [B+"landings/boxer/gallery/a4.jpg", B+"landings/boxer/gallery/d4.jpg"],
                 [B+"landings/boxer/gallery/a2.jpg", B+"landings/boxer/gallery/d2.jpg"],
                 [B+"landings/boxer/gallery/a3.jpg", B+"landings/boxer/gallery/d3.jpg"],
                 [B+"landings/boxer/gallery/a5.jpg", B+"landings/boxer/gallery/d5.jpg"],
                 [B+"landings/boxer/gallery/a1.jpg", B+"landings/boxer/gallery/d1.jpg"] ] },
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: B+"landings/boxer/tec/media.webp", items: [
        ["Bambú, No Algodón", "El algodón absorbe la humedad y se queda con ella todo el día. El bambú la toma y la evapora: absorbe hasta 70% más y se seca solo. Es una de las fibras más suaves que existen y regula la temperatura sola — fresco cuando hace calor, sin ese frío húmedo cuando baja.", B+"landings/boxer/tec/ic0.png"],
        ["Frescura Que Dura", "El olor no lo hace la tela: lo hacen las bacterias que crecen en la humedad. El bambú no la retiene, así que no tienen dónde crecer. Doce horas afuera y seguís sintiéndote recién cambiado.", B+"landings/boxer/tec/ic1.png"],
        ["Ventilación Donde Hace Falta", "Tejido abierto en el panel de bambú: el aire circula justo en la zona donde más calor se acumula. No es ventilación decorativa, está puesta donde el problema existe.", B+"landings/boxer/tec/ic2.png"],
        ["Cero Fricción", "Costuras planas y el tacto sedoso del bambú, una de las fibras más suaves que existen. Sin roces, sin marcas, sin acomodarte cada dos cuadras.", B+"landings/boxer/tec/ic3.png"],
        ["Elasticidad Que Vuelve", "Se estira en cuatro direcciones y recupera la forma. No se estaquea, no queda colgando, no se deforma después de tres lavados.", B+"landings/boxer/tec/ic4.png"],
        ["Calce A Medida", "Diseño anatómico con soporte donde lo necesitás y cintura antienrolle que no se dobla ni aprieta.", B+"landings/boxer/tec/ic5.png"]
      ]},
      { type: "compare", title: "Por Qué Nalo Gana:", highlight: "Nalo Gana:", subtitle: "Bambú + ingeniería textil.",
        logo: B+"landings/boxer/cmp/logo.png",
        images: [B+"landings/boxer/cmp/col0.png", B+"landings/boxer/cmp/col1.png", B+"landings/boxer/cmp/col2.png", B+"landings/boxer/cmp/col3.png"],
        cols: ["", "Algodón", "Algodón con lycra", "Deportivo"],
        rows: [ ["No se deforma después de meses de uso",1,0,0,2], ["Cintura que no se enrolla ni marca",1,2,1,0],
                ["Absorbe la humedad y la evapora (fibra de bambú)",1,0,0,2], ["Sin bolitas ni pelusa con el uso",1,0,0,1],
                ["Se acomoda solo, no se sube al muslo",1,0,0,0], ["No te queda olor al final del día",1,0,0,0],
                ["Suave al tacto, sin sensación de plástico",1,1,1,0] ]},
      { type: "prose", title: "Mirálo de cerca. Ahí está la diferencia.", media: B+"landings/boxer/prose/collage.jpg", mediaRight: true, button: "COMPRAR AHORA",
        paragraphs: [
          "El vapor la atraviesa sin quedarse. Empapala y vas a ver cuánta agua retiene: el bambú absorbe hasta 70% más humedad que el algodón, y después la evapora en vez de dejarla contra tu piel.",
          "El tejido va perforado —miles de micro-aberturas— para que el aire circule todo el día. Y aunque se estira en cuatro direcciones, no pierde ni un poco de ventilación.",
          "No hay tratamiento químico ni tecnología secreta. Es una fibra mejor, tejida exactamente donde más la necesitás."
        ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Qué es la fibra de bambú y por qué se utiliza para los calzoncillos tipo boxer?", "La fibra de bambú es un material natural que cada vez se aprecia más por sus propiedades suaves, transpirables y respetuosas con el medio ambiente. Se utiliza en la fabricación de nuestros calzoncillos tipo boxer para proporcionar un confort óptimo y promover una mejor higiene íntima."],
        ["¿Por qué recomiendan los dermatólogos los calzoncillos de fibra de bambú?", "Los dermatólogos recomiendan nuestros calzoncillos de fibra de bambú debido a su suavidad y su capacidad para reducir el roce desagradable, ayudando a mantener una higiene impecable en áreas íntimas."],
        ["¿En qué se diferencia la transpirabilidad de los calzoncillos de fibra de bambú de otros materiales?", "La excepcional transpirabilidad de nuestros calzoncillos de fibra de bambú permite que el aire circule, reduciendo la humedad y la transpiración. Siempre te sentirás cómodo y fresco, sin importar tu actividad."],
        ["¿Cómo se compara la durabilidad de los calzoncillos de fibra de bambú con la de los calzoncillos tradicionales?", "Los calzoncillos de fibra de bambú están diseñados para una durabilidad añadida gracias a su material de alta calidad. Son más resistentes al desgaste y duran más que los calzoncillos regulares."],
        ["¿Los calzoncillos de fibra de bambú son adecuados para piel sensible?", "Sí, en general, los calzoncillos de fibra de bambú son adecuados para la piel sensible debido a su suavidad y capacidad para reducir la irritación cutánea. Sin embargo, si tienes preocupaciones específicas, recomendamos consultar a un profesional de la salud."]
      ]}
    ],

    "pantalon-antiarrugas-nalo": [
      { type: "instagram", title: "Miles de reseñas orgánicas", subtitle: "Más de 10 millones de visitas en Instagram",
        link: IG, noSound: true, videos: ["p1", "p2", "p3"], vidBase: "landings/pantalon/videos/" },
      { type: "gallery", title: "Todo el día encima. Cero arrugas", highlight: "Cero arrugas",
        leftTitle: "Resultados reales validados por usuarios.", stat: "93%",
        statTxt: "confirmó que el pantalón se mantuvo sin arrugas después de un día completo de uso.",
        beforeLabel: "Otro pantalón", afterLabel: "Pantalón Nalo",
        note: "* Basado en encuesta interna a más de 80 clientes verificados. Los resultados pueden variar según el uso. La tela libera las arrugas naturalmente y no requiere plancha.",
        pairs: [ [B+"landings/pantalon/gallery/a2.jpg", B+"landings/pantalon/gallery/d2.jpg"],
                 [B+"landings/pantalon/gallery/a3.jpg", B+"landings/pantalon/gallery/d3.jpg"],
                 [B+"landings/pantalon/gallery/a6.jpg", B+"landings/pantalon/gallery/d6.jpg"],
                 [B+"landings/pantalon/gallery/a4.jpg", B+"landings/pantalon/gallery/d4.jpg"],
                 [B+"landings/pantalon/gallery/a1.jpg", B+"landings/pantalon/gallery/d1.jpg"],
                 [B+"landings/pantalon/gallery/a5.jpg", B+"landings/pantalon/gallery/d5.jpg"] ] },
      { type: "techsplit", title: "La tela hace el trabajo, vos no", media: B+"landings/pantalon/tec/media.mp4", items: [
        ["Impecable Sin Planchar", "Las fibras de poliéster tienen memoria: se doblan, pero recuerdan su forma. Por eso a las seis de la tarde, después de ocho horas sentado, te parás y el pantalón está igual que a la mañana. Sin la marca del asiento atrás de la rodilla.", B+"landings/pantalon/tec/ic0.png"],
        ["Repele Líquidos Y Manchas", "La tela repele el agua y las salpicaduras: los líquidos resbalan sin penetrar en vez de absorberse. Un café o una gaseosa que se vuelca se limpia con una servilleta, sin dejar mancha.", B+"landings/pantalon/tec/ic1.png"],
        ["Estructura Que No Se Deforma", "Elástico no quiere decir blando. El 95% de poliéster de alta densidad sostiene el pliegue, la caída de la pierna y la forma de la rodilla. Nadie en la oficina va a notar que es elástico. Vos sí.", B+"landings/pantalon/tec/ic2.png"],
        ["Elasticidad En 4 Direcciones", "El spandex está tejido en las dos direcciones de la tela, a lo largo y a lo ancho. Te agachás a atarte los cordones sin pensarlo, cruzás la pierna en la reunión, subís las escaleras de a dos. El pantalón te sigue y vuelve solo a su lugar.", B+"landings/pantalon/tec/ic3.png"],
        ["Comodidad De Ocho Horas", "Cintura elastizada oculta, y un tiro calculado para estar sentado, no solo para estar parado. Llegás a casa y no es lo primero que hacés sacártelo.", B+"landings/pantalon/tec/ic4.png"],
        ["Lavable A Máquina", "El poliéster no encoge, no destiñe y no pierde la forma en el agua. Lavarropas en frío, colgar, listo. Nunca más una boleta de tintorería, nunca más una plancha un domingo a la noche.", B+"landings/pantalon/tec/ic5.png"],
        ["Un Pantalón Para Todo El Día", "Reunión a la mañana, almuerzo con clientes, cena a la noche. Con saco es formal, con remera y zapatillas es un pantalón más. No tenés que pasar por casa a cambiarte.", B+"landings/pantalon/tec/ic6.png"]
      ]},
      { type: "compare", title: "Por Qué Nalo Gana:", highlight: "Nalo Gana:", subtitle: "Ingeniería textil real.",
        logo: B+"landings/pantalon/cmp/logo.png",
        images: [B+"landings/pantalon/cmp/col0.png", B+"landings/pantalon/cmp/col1.png", B+"landings/pantalon/cmp/col2.png", B+"landings/pantalon/cmp/col3.png"],
        cols: ["", "De vestir clásico", "Chino de algodón", "Jogger elegante"],
        rows: [ ["No necesita plancha",1,0,0,1], ["Se ve formal",1,1,2,0],
                ["Elasticidad en 4 direcciones",1,0,0,1], ["Repele líquidos y manchas",1,0,0,0],
                ["Mantiene la forma lavado tras lavado",1,2,0,0], ["Lavable a máquina",1,0,1,1],
                ["Cero costo de tintorería",1,0,1,1], ["Sirve de la oficina a la noche",1,0,2,0] ]},
      { type: "stats", title: "Creados para ser distintos. A propósito.",
        note: "Basado en una encuesta a más de 80 clientes verificados.",
        items: [ ["96%","Afirma que son más cómodos que sus antiguos pantalones de vestir."],
                 ["86%","De los clientes los usa al menos 5 días a la semana."],
                 ["90%","Clientes recomiendan el Pantalón Antiarrugas Nalo a un amigo."] ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Se van a notar que no son pantalones de vestir comunes?", "No. De frente, de costado y de atrás son un pantalón de vestir. Nadie en la oficina va a ver la diferencia. Vos sí, cuando llegue la tarde."],
        ["¿Realmente no se arrugan?", "No necesitan plancha. La tela libera las arrugas sola cuando el pantalón vuelve a colgar. Ocho horas sentado, un vuelo, cuatro horas doblado en la valija: te parás y está liso. No hace magia — si lo dejás hecho un bollo en el piso una semana, va a tener marcas."],
        ["¿Es cierto que repele los líquidos?", "Sí. La tela repele el agua y las salpicaduras: en vez de absorberse, los líquidos quedan sobre la superficie y resbalan. Un derrame accidental de café o gaseosa se limpia con una servilleta."],
        ["¿Qué talle pido?", "Si estás entre dos, pedí el más grande. La tela tiene tanto elástico que un poco de más nunca es problema, pero un talle chico te va a pelear todo el día. Encontrás la tabla de talle en la última foto del producto."],
        ["¿Sirven para un evento formal, un casamiento?", "Sí. Con saco y zapatos de vestir es un pantalón de traje. También es el pantalón con el que vas a estar sentado seis horas en la fiesta sin querer sacártelo."],
        ["¿Cómo los lavo?", "Lavarropas en agua fría, colgado a secar. Nada más. No se planchan, no van a la tintorería, no encogen y no destiñen."],
        ["¿Cuánto tardan en llegar?", "El pedido se despacha en las primeras 24 horas hábiles. El envío demora, luego de ser despachado, de 24 a 48hs en CABA y de 2 a 6 días hábiles al resto del país."]
      ]}
    ],

    "camisa-hombre-nalo-impermeable-antiarrugas-manga-larga": [
      { type: "instagram", title: "Miles de reseñas orgánicas", subtitle: "Más de 10 millones de visitas en Instagram",
        link: IG, videos: ["c1", "c2", "c3", "c4"], vidBase: "landings/camisa/videos/" },
      { type: "gallery", title: "Cambio visible desde que te la ponés.", highlight: "visible",
        leftTitle: "Resultados reales validados por usuarios.", stat: "96%",
        statTxt: "confirmó que su camisa se mantuvo sin arrugas y sin manchas durante todo el día.",
        note: "* Basado en estudio interno con más de 280 usuarios. Los resultados pueden variar según el uso y el tipo de líquido. Para manchas grasas pesadas se recomienda limpieza inmediata.",
        pairs: [ [B+"landings/camisa/gallery/a1.jpg", B+"landings/camisa/gallery/d1.jpg"],
                 [B+"landings/camisa/gallery/a2.jpg", B+"landings/camisa/gallery/d2.jpg"],
                 [B+"landings/camisa/gallery/a3.jpg", B+"landings/camisa/gallery/d3.jpg"],
                 [B+"landings/camisa/gallery/a4.jpg", B+"landings/camisa/gallery/d4.jpg"],
                 [B+"landings/camisa/gallery/a5.jpg", B+"landings/camisa/gallery/d5.jpg"] ] },
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: B+"landings/camisa/tec/media.mp4", items: [
        ["Impecable Sin Planchar", "Tejido antiarrugas de alta densidad que se adapta al movimiento y mantiene su forma durante todo el día. Olvidate de la plancha y la tintorería: una sola camisa te dura prolija de la mañana a la noche.", B+"landings/camisa/tec/ic0.png"],
        ["Escudo Anti-Manchas", "Capa hidrorepelente integrada a la fibra que hace que el café, el vino y el agua resbalen sin penetrar la tela. Limpiás con una servilleta y seguís tu día sin marcas ni preocupaciones.", B+"landings/camisa/tec/ic1.png"],
        ["Libertad De Movimiento Total", "Elasticidad en 4 direcciones que acompaña cada movimiento sin tirantez ni restricción. De la reunión al after, sin sentir que tenés que acomodarte la camisa todo el tiempo.", B+"landings/camisa/tec/ic2.png"],
        ["Frescura Que Dura", "Alta transpirabilidad que permite la circulación constante de aire y regula la temperatura corporal. Mantenés la frescura incluso en jornadas largas o días intensos.", B+"landings/camisa/tec/ic3.png"],
        ["Resistente Al Sudor", "Tecnología que evita la absorción y la aparición de marcas húmedas en las zonas críticas. Llegás a cualquier compromiso con la camisa tan seca y prolija como cuando saliste de tu casa.", B+"landings/camisa/tec/ic4.png"],
        ["Calce A Medida", "Estructura ergonómica con corte moderno que estiliza el cuerpo y se conserva lavado tras lavado. Pretratada para mantener su forma original desde el primer uso hasta el último.", B+"landings/camisa/tec/ic5.png"]
      ]},
      { type: "compare", title: "Por Qué Nalo Gana:", highlight: "Nalo Gana:", subtitle: "Ingeniería textil real.",
        logo: B+"landings/camisa/cmp/logo.png",
        images: [B+"landings/camisa/cmp/col0.png", B+"landings/camisa/cmp/col1.png", B+"landings/camisa/cmp/col2.png", B+"landings/camisa/cmp/col3.png"],
        cols: ["", "Camisa de Algodón", "Camisa de Lino", "Camisa de Poliéster"],
        rows: [ ["No necesita plancha",1,0,0,1], ["Repele líquidos y manchas",1,0,0,0],
                ["Transpirable",1,2,1,0], ["Elasticidad 4 direcciones",1,0,0,0],
                ["Resistente al sudor",1,0,0,2], ["Mantiene la forma lavado tras lavado",1,0,0,1],
                ["Calce moderno y estructurado",1,2,0,2] ]},
      { type: "prose", title: "Estilo, protección y libertad total.", media: B+"landings/camisa/prose/media.mp4", mediaRight: true, button: "COMPRAR AHORA",
        paragraphs: [
          "Dejá de conformarte. Lográ el look definido de una camisa premium, con la libertad de movimiento del día, la frescura del tejido natural y la tranquilidad de saber que ningún derrame accidental te va a arruinar la reunión. Elevá tu confianza ahora."
        ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Realmente repele líquidos? ¿Cómo funciona?", "Sí. La camisa tiene una capa hidrorepelente aplicada a nivel fibra que crea una barrera invisible: los líquidos a base de agua (café, vino, gaseosas, jugo) y la mayoría de los aceites livianos se deslizan sin penetrar la tela. Para manchas grasas pesadas recomendamos limpieza inmediata."],
        ["¿El efecto repelente se gasta con los lavados?", "No. El tratamiento está integrado en la fibra, no es un spray superficial. Mantiene sus propiedades durante toda la vida útil de la prenda siguiendo las recomendaciones de lavado (agua fría, sin suavizantes agresivos)."],
        ["¿La camisa realmente no necesita plancha?", "Sí. Gracias a su tejido antiarrugas, mantiene una apariencia prolija durante todo el día. En la mayoría de los casos no requiere planchado y se alisa fácilmente al colgarla."],
        ["¿Es cómoda para usar todo el día?", "Sí. Su elasticidad en 4 direcciones permite libertad de movimiento sin tirantez, ideal para jornadas largas o viajes."],
        ["¿La tela es transpirable?", "Sí. El tejido técnico facilita la circulación del aire, ayudando a mantener la frescura incluso en días intensos."],
        ["¿Cómo debo lavarla para conservarla en perfecto estado?", "Recomendamos lavar con agua fría y colores similares, evitar el uso de blanqueadores y secar al aire o a baja temperatura. No requiere plancha, pero si se desea, usar temperatura baja."],
        ["¿Mantiene su forma con el uso y los lavados?", "Sí. Está diseñada para conservar su estructura, ajuste y apariencia impecable lavado tras lavado."]
      ]}
    ],

    "remera-reductora-nalo": [
      { type: "instagram", title: "Miles de reseñas orgánicas", subtitle: "Más de 10 millones de visitas en Instagram",
        link: IG, videos: ["r1", "r2", "r3"], vidBase: "landings/remera/videos/" },
      { type: "gallery", title: "Cambio visible desde que te la ponés.", highlight: "visible",
        leftTitle: "Resultados reales validados por usuarios.", stat: "94%",
        statTxt: "sintió la panza más firme y mayor confianza al ponérsela.",
        note: "* Basado en encuesta a 100 usuarios. Los resultados pueden variar según el cuerpo y el talle elegido. Usar el talle recomendado por nuestra guía para máxima efectividad.",
        pairs: [ [B+"landings/remera/gallery/a1.jpg", B+"landings/remera/gallery/d1.jpg"],
                 [B+"landings/remera/gallery/a2.jpg", B+"landings/remera/gallery/d2.jpg"],
                 [B+"landings/remera/gallery/a3.jpg", B+"landings/remera/gallery/d3.jpg"],
                 [B+"landings/remera/gallery/a4.jpg", B+"landings/remera/gallery/d4.jpg"],
                 [B+"landings/remera/gallery/a5.jpg", B+"landings/remera/gallery/d5.jpg"] ] },
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: B+"landings/remera/tec/media.mp4", items: [
        ["Abdomen Plano Al Instante", "Doble capa de compresión en abdomen y pecho que reduce visualmente hasta 2 talles desde el primer uso. Aplana la panza y contiene el pecho sin esfuerzo.", B+"landings/remera/tec/ic0.png"],
        ["No Se Marca La Transpiración", "Las mangas cubren la axila y el tejido con fibras hidrofóbicas frena el sudor: no traspasa a tu camisa. Levantás los brazos tranquilo, sin manchas a la vista.", B+"landings/remera/tec/ic1.png"],
        ["Abriga Sin Volumen", "Tejido térmico que suma una capa de calor fina bajo la ropa. Ideal para el frío, sin que se note ni te agrande la silueta.", B+"landings/remera/tec/ic2.png"],
        ["Postura Erguida Y Confiada", "El entramado posterior ejerce una tracción ligera que alinea tus hombros y columna, corrigiendo la postura encorvada del escritorio o el celular.", B+"landings/remera/tec/ic3.png"],
        ["Invisible Bajo La Ropa", "Costuras planas y corte seamless. No se marca bajo camisas, remeras ni ropa de trabajo. Nadie nota que la llevás puesta.", B+"landings/remera/tec/ic4.png"],
        ["Compresión Que No Aprieta", "Mezcla de 83% elastano y 17% nylon que comprime sin cortar la circulación. Te acompaña todo el día sin molestias ni marcas en la piel.", B+"landings/remera/tec/ic5.png"],
        ["Calidad Premium Duradera", "Fibras de alta densidad que mantienen la compresión y la forma lavado tras lavado. Una prenda pensada para durar años.", B+"landings/remera/tec/ic6.png"]
      ]},
      { type: "compare", title: "Por Qué Nalo Gana:", highlight: "Nalo Gana:", subtitle: "Ingeniería textil real.",
        logo: B+"landings/remera/cmp/logo.png",
        images: [B+"landings/remera/cmp/col0.png", B+"landings/remera/cmp/col1.png", B+"landings/remera/cmp/col2.png", B+"landings/remera/cmp/col3.png"],
        cols: ["", "Remera común", "Faja tradicional", "Remera térmica"],
        rows: [ ["Invisible bajo cualquier prenda",1,2,0,1], ["Reduce panza al instante",1,0,1,0],
                ["Contiene y disimula el pecho",1,0,0,0], ["No se marca la transpiración",1,0,0,2],
                ["Abriga en invierno",1,0,0,1], ["Corrige la postura",1,0,0,0],
                ["Doble capa de compresión",1,0,1,0], ["Apta para uso diario y deporte",1,1,0,1] ]},
      { type: "stats", title: "Resultados Comprobados por Nuestros Clientes",
        note: "Resultados comprobados en un estudio interno con más de 150 usuarios del producto.",
        items: [ ["93%","Dijeron sentirse más seguros al usar la remera reductora."],
                 ["95%","Contaron que se vieron más atractivos: en una cita, en el laburo o hasta en el gimnasio."],
                 ["90%","Afirmaron que al notarse más firmes y prolijos, se sintieron motivados a entrenar más."] ]}
    ],

    "pulsera-nalo-de-hematita": [
      { type: "halo", title: "Recuperá tu ventaja", subtitle: "El poder prohibido de la hematita",
        image: B+"landings/pulsera/img/ventaja.jpg",
        left: [ ["Fuerza Primordial", "La hematita, usada por antiguos guerreros, ahora en tu muñeca para activar determinación y presencia."],
                ["Energía Constante", "Estimulación magnética estable durante todo el día, sin picos ni caídas."] ],
        right: [ ["Claridad Mental", "Mayor enfoque para tomar decisiones firmes bajo presión."],
                 ["Presencia Magnética", "Confianza silenciosa que se siente y se proyecta."] ] },
      { type: "prose", title: "¿Cómo funciona?", media: B+"landings/pulsera/videos/como.mp4", button: "Comprar ahora",
        paragraphs: [
          "La pulsera Nalo canaliza el poder ancestral de la hematita, una piedra magnética que antiguamente era venerada por los guerreros por sus efectos de arraigo y revitalización.",
          "Al usarlo a diario, crea un vínculo directo con el campo energético de tu cuerpo, apoyando de forma natural el metabolismo, la testosterona y la concentración, sin sobrecargar tu sistema como lo hacen las pastillas.",
          "Mientras los suplementos generan picos y caídas, Nalo ofrece una estimulación magnética constante. Los hombres reportan mayor enfoque, energía duradera y una renovada confianza masculina."
        ]},
      { type: "darkcards", title: "La lenta caída de la masculinidad", cards: [
        ["Baja energía, sin impulso", "Atravesás el día, pero te sentís agotado, física y mentalmente. La cafeína ya no pega como antes. Tu motivación se diluye. Sentís que perdiste tu filo."],
        ["Mente nublada, decisiones débiles", "Reuniones, pantallas, presión constante… pero tu mente ya no está tan afilada. Te olvidás cosas. Dudás más. Te sentís menos decidido, con menos control."],
        ["Confianza en descenso", "El enfoque. La seguridad. El empuje. Antes venían naturalmente, ahora se sienten forzados. No estás rindiendo al máximo, y lo notás en cada área de tu vida."]
      ]},
      { type: "testimonials", title: "Hombres que recuperaron su ventaja", items: [
        [B+"landings/pulsera/testi/t1.jpg", "No esperaba mucho al principio, pero después de un par de semanas con la pulsera Nalo, tengo más energía constante y mayor claridad mental, especialmente por las tardes. Ya no me desplomo como antes. Es algo sutil, pero poderoso.", "— Mark D. 42"],
        [B+"landings/pulsera/testi/t2.jpg", "Usar la pulsera Nalo todos los días realmente mejoró mi concentración en el trabajo. Me siento más presente, más enfocado. No pensé que una pulsera pudiera hacer algo, pero me alegra haberle dado una oportunidad. Siento que estoy funcionando en una mejor frecuencia.", "— Cristian P. 31"],
        [B+"landings/pulsera/testi/t3.jpg", "Ya pasó aproximadamente un mes y definitivamente me siento diferente. Más centrado, más seguro, como si hubiera recuperado el control. Sin pastillas ni trucos, solo usando la pulsera todos los días. La verdad, estoy impresionado.", "— Alex N. 39"]
      ]},
      { type: "iconsplit", title: "Volvé a sentirte como vos mismo otra vez",
        text: "Desbloqueá tu fuerza natural con la pulsera Nalo, la primera pulsera masculina diseñada con hematita pura para trabajar con el campo energético de tu cuerpo, potenciar el metabolismo, agudizar la concentración y reavivar el poder primal con el que naciste.",
        items: [ [B+"landings/pulsera/icons/i1.svg", "Restaura el impulso masculino"],
                 [B+"landings/pulsera/icons/i2.svg", "Quema grasa rebelde"],
                 [B+"landings/pulsera/icons/i3.svg", "Elimina la niebla mental"],
                 [B+"landings/pulsera/icons/i4.svg", "Potencia la energía primal"] ] },
      { type: "prosefeat", title: "Recuperá tu fuerza, de manera natural y sin esfuerzo",
        image: B+"landings/pulsera/img/fuerza.jpg",
        intro: "La pulsera Nalo te ayuda a reactivar la energía masculina, el enfoque y la confianza — con un simple ritual diario. Sin pastillas. Sin efectos secundarios. Sin “trucos” sobrevalorados.",
        features: [
          ["Sentí el cambio rápidamente", "Usala todos los días y empezá a notar la diferencia: mayor claridad mental, energía constante, mejor estado de ánimo y ese filo agudo volviendo."],
          ["Liberate de las soluciones modernas", "Más del 90% de los usuarios de Nalo reportan mayor energía, libido más fuerte y mayor confianza, sin pastillas, polvos ni inyecciones. Solo activación magnética pura."],
          ["Vitalidad masculina duradera", "Nalo apoya tu testosterona natural, tu metabolismo y tu impulso, ayudándote a sentirte poderoso otra vez, día tras día."]
        ]},
      { type: "imgslider", images: [B+"landings/pulsera/slider/s1.webp", B+"landings/pulsera/slider/s2.webp", B+"landings/pulsera/slider/s3.webp", B+"landings/pulsera/slider/s4.webp"] },
      { type: "vs", title: "Cómo somos diferentes", logo: B+"landings/musculosa/cmp/logo.png",
        lead: "Nalo te devuelve a la fuente: el poder natural de tu cuerpo. Energía magnética pura proveniente de la hematita, usada como un ritual para agudizar tu enfoque, restaurar tu impulso y reactivar el hombre que fuiste diseñado para ser.",
        rows: [ "Reactiva tu impulso primal", "Restaura tu energía masculina", "Potencia testosterona y concentración", "Mejora el sueño y acelera la recuperación", "Diseño minimalista, discreto y elegante" ] }
    ]
  };

  var m = location.pathname.match(/\/productos\/([^\/]+)/);
  var handle = m ? decodeURIComponent(m[1]) : "";
  var secs = LANDINGS[handle];
  if (!secs) return;

  var CSS = "" +
    "#nalo-landing{--v:#5200ff;font-family:Poppins,sans-serif;color:#111}" +
    "#nalo-landing .nl-sec{max-width:1160px;margin:0 auto;padding:40px 24px}" +
    "#nalo-landing .nl-h{text-align:center;font-weight:700;font-size:40px;letter-spacing:.02rem;margin:0 0 34px}" +
    "#nalo-landing .nl-h .v{color:var(--v)}" +
    // accordion / faq
    "#nalo-landing .nl-ac{max-width:760px;margin:0 auto}" +
    "#nalo-landing .nl-ac details{border-bottom:1px solid #eee}" +
    "#nalo-landing .nl-ac summary{list-style:none;cursor:pointer;padding:17px 4px;font-weight:600;font-size:15px;display:flex;justify-content:space-between;align-items:center;gap:12px}" +
    "#nalo-landing .nl-ac summary::-webkit-details-marker{display:none}" +
    "#nalo-landing .nl-ac summary::after{content:'+';color:var(--v);font-size:22px;font-weight:400}" +
    "#nalo-landing .nl-ac details[open] summary::after{content:'\\2013'}" +
    "#nalo-landing .nl-ac .ic{width:22px;height:22px;flex:0 0 auto;margin-right:4px}" +
    "#nalo-landing .nl-ac .ic svg{width:22px;height:22px;fill:var(--v)}" +
    "#nalo-landing .nl-ac summary span{flex:1}" +
    "#nalo-landing .nl-ac p{margin:0 4px 16px;font-size:14px;line-height:1.6;color:#666}" +
    // instagram
    "#nalo-landing .nl-ig{text-align:center;padding-top:26px}" +
    "#nalo-landing .nl-ig-btnwrap{display:flex;justify-content:center;margin-top:4px}" +
    "#nalo-landing .nl-ig-btn{display:inline-block;padding:2px;border-radius:999px;background:linear-gradient(90deg,#f58529 0%,#dd2a7b 50%,#8134af 100%);text-decoration:none;transition:transform .3s}" +
    "#nalo-landing .nl-ig-btn:hover{transform:translateY(-2px) scale(1.03)}" +
    "#nalo-landing .nl-ig-inner{display:inline-flex;align-items:center;gap:8px;background:#fff;border-radius:999px;padding:11px 20px}" +
    "#nalo-landing .nl-ig-inner>svg{width:18px;height:18px;flex:0 0 auto}" +
    "#nalo-landing .nl-ig-inner span{font-size:14px;font-weight:600;color:#1a1a1a;letter-spacing:.2px}" +
    // gallery
    "#nalo-landing .nl-gl{display:grid;grid-template-columns:1fr 1.35fr;gap:44px;align-items:center;max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-gl-left{text-align:left}" +
    "#nalo-landing .nl-gl-left h3{font-size:24px;font-weight:800;line-height:1.15;margin:0 0 6px}" +
    "#nalo-landing .nl-gl-left .pct{display:block;font-size:90px;font-weight:800;color:#111;line-height:1;margin:6px 0 4px}" +
    "#nalo-landing .nl-gl-left .pct-txt{color:#555;font-size:16px;margin:0 0 20px}" +
    "#nalo-landing .nl-gl-left hr{border:0;border-top:1px solid #e5e5e5;margin:0 0 16px}" +
    "#nalo-landing .nl-gl-left .note{color:#999;font-size:13px;line-height:1.55;margin:0 0 24px}" +
    "#nalo-landing .nl-gl-left .buy{display:inline-block;background:var(--v);color:#fff;font-weight:700;font-size:14px;letter-spacing:.05em;text-transform:uppercase;padding:17px 42px;border:0;border-radius:40px;cursor:pointer}" +
    "#nalo-landing .nl-gl-right{display:grid;grid-template-columns:1fr 1fr 72px;gap:12px;align-items:start}" +
    "#nalo-landing .nl-gl-right figure{position:relative;margin:0}" +
    "#nalo-landing .nl-gl-right figure img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:14px;display:block}" +
    "#nalo-landing .nl-gl-right .pill{position:absolute;left:10px;bottom:10px;font-size:12px;font-weight:700;padding:5px 14px;border-radius:20px;color:#fff}" +
    "#nalo-landing .nl-gl-right .pill.dark{background:#111}" +
    "#nalo-landing .nl-gl-right .pill.vio{background:var(--v)}" +
    "#nalo-landing .nl-gl-thumbs{display:flex;flex-direction:column;gap:8px}" +
    "#nalo-landing .nl-gl-thumbs button{display:flex;gap:2px;width:82px;height:52px;border-radius:8px;overflow:hidden;border:2px solid transparent;padding:0;cursor:pointer;background:#f2f2f2}" +
    "#nalo-landing .nl-gl-thumbs button.on{border-color:var(--v)}" +
    "#nalo-landing .nl-gl-thumbs img{width:50%;height:100%;object-fit:cover;display:block}" +
    // compare
    "#nalo-landing .nl-cmp{max-width:900px;margin:0 auto;overflow-x:auto}" +
    "#nalo-landing .nl-cmp table{width:100%;border-collapse:collapse;min-width:640px}" +
    "#nalo-landing .nl-cmp th,#nalo-landing .nl-cmp td{padding:14px 8px;text-align:center;border-bottom:1px solid #f0f0f0;font-size:13px;vertical-align:middle}" +
    "#nalo-landing .nl-cmp td:first-child,#nalo-landing .nl-cmp th:first-child{text-align:left;font-weight:700}" +
    "#nalo-landing .nl-cmp thead th{border-bottom:0;padding-top:0}" +
    "#nalo-landing .nl-cmp th.brand{background:#f6f4ff;border-radius:16px 16px 0 0;position:relative;padding-top:46px}" +
    "#nalo-landing .nl-cmp td.brand{background:#f6f4ff}" +
    "#nalo-landing .nl-cmp tr:last-child td.brand{border-radius:0 0 16px 16px}" +
    "#nalo-landing .nl-cmp-badge{position:absolute;top:8px;left:50%;transform:translateX(-50%);background:var(--v);color:#fff;font-size:10px;font-weight:700;letter-spacing:.06em;padding:6px 16px;border-radius:40px;white-space:nowrap}" +
    "#nalo-landing .nl-cmp-logo{height:24px;width:auto;margin-bottom:8px;display:inline-block}" +
    "#nalo-landing .nl-cmp-name{font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.03em;margin-bottom:8px;min-height:30px}" +
    "#nalo-landing .nl-cmp-prod{width:70px;height:70px;object-fit:contain;display:block;margin:0 auto}" +
    "#nalo-landing .nl-cmp .yes,#nalo-landing .nl-cmp .no,#nalo-landing .nl-cmp .neu{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%}" +
    "#nalo-landing .nl-cmp .yes{background:var(--v)}#nalo-landing .nl-cmp .no{background:#e0334b}#nalo-landing .nl-cmp .neu{background:#d3d6db}" +
    "#nalo-landing .nl-cmp .yes svg,#nalo-landing .nl-cmp .no svg,#nalo-landing .nl-cmp .neu svg{width:15px;height:15px}" +
    "#nalo-landing .nl-cmp-row{opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s ease}" +
    "#nalo-landing .nl-cmp-row.show{opacity:1;transform:none}" +
    // techsplit
    "#nalo-landing .nl-ts{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;max-width:1100px;margin:0 auto}" +
    "#nalo-landing .nl-ts-media{aspect-ratio:4/5;border-radius:18px;overflow:hidden;background:#f2f2f4}" +
    "#nalo-landing .nl-ts-media img,#nalo-landing .nl-ts-media video{width:100%;height:100%;object-fit:cover}" +
    "#nalo-landing .nl-ts h2{text-align:left;font-size:40px;font-weight:700;margin:0 0 22px}" +
    "#nalo-landing .nl-ts details{border-bottom:1px solid #eee}" +
    "#nalo-landing .nl-ts summary{list-style:none;cursor:pointer;padding:14px 0;font-weight:600;font-size:15px;display:flex;align-items:center;gap:10px}" +
    "#nalo-landing .nl-ts summary::-webkit-details-marker{display:none}" +
    "#nalo-landing .nl-ts summary .ic{width:26px;height:26px;flex:0 0 auto}" +
    "#nalo-landing .nl-ts summary .ic svg{width:26px;height:26px;fill:var(--v)}" +
    "#nalo-landing .nl-ts summary .ts-ic{width:30px;height:30px;object-fit:contain;flex:0 0 auto}" +
    "#nalo-landing .nl-ts summary .t{flex:1;text-align:left}" +
    "#nalo-landing .nl-ts summary::after{content:'+';color:var(--v);font-size:20px}" +
    "#nalo-landing .nl-ts details[open] summary::after{content:'\\2013'}" +
    "#nalo-landing .nl-ts p{margin:0 0 14px 40px;font-size:14px;line-height:1.55;color:#666;text-align:left}" +
    // prose (imagen + texto)
    "#nalo-landing .nl-pr{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;max-width:1100px;margin:0 auto}" +
    "#nalo-landing .nl-pr-media{aspect-ratio:1/1;border-radius:18px;overflow:hidden;background:#f2f2f4}" +
    "#nalo-landing .nl-pr-media img,#nalo-landing .nl-pr-media video{width:100%;height:100%;object-fit:cover}" +
    "#nalo-landing .nl-pr-txt h2{text-align:left;font-size:40px;font-weight:700;margin:0 0 18px}" +
    "#nalo-landing .nl-pr-txt p{font-size:14px;line-height:1.6;color:#555;margin:0 0 14px}" +
    "#nalo-landing .nl-pr-btn{margin-top:10px;display:inline-block;background:var(--v);color:#fff;font-weight:700;font-size:14px;letter-spacing:.05em;text-transform:uppercase;padding:17px 42px;border:0;border-radius:40px;cursor:pointer;transition:.15s}" +
    "#nalo-landing .nl-pr-btn:hover{filter:brightness(1.1)}" +
    // stats
    "#nalo-landing .nl-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:900px;margin:0 auto}" +
    "#nalo-landing .nl-stat{text-align:center}" +
    "#nalo-landing .nl-stat .ring{width:110px;height:110px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:var(--v);background:conic-gradient(var(--v) var(--p),#eee 0)}" +
    "#nalo-landing .nl-stat .ring i{width:86px;height:86px;background:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal}" +
    "#nalo-landing .nl-stat p{font-size:14px;color:#555;line-height:1.5;margin:0}" +
    "#nalo-landing .nl-note{text-align:center;color:#999;font-size:12px;margin-top:26px}" +
    // features (fallback grid)
    "#nalo-landing .nl-feats{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}" +
    "#nalo-landing .nl-feat{background:#f7f7f8;border-radius:16px;padding:24px}" +
    "#nalo-landing .nl-feat b{display:block;font-size:16px;margin-bottom:8px}" +
    "#nalo-landing .nl-feat p{margin:0;font-size:13.5px;line-height:1.55;color:#666}" +
    // halo (Recuperá tu ventaja)
    "#nalo-landing .nl-halo{max-width:1120px;margin:0 auto;text-align:center}" +
    "#nalo-landing .nl-halo .sub{font-weight:700;letter-spacing:.08em;font-size:13px;margin:6px 0 32px;text-transform:uppercase}" +
    "#nalo-landing .nl-halo-grid{display:grid;grid-template-columns:1fr 1.05fr 1fr;gap:34px;align-items:center;text-align:left}" +
    "#nalo-landing .nl-halo-img{border-radius:18px;overflow:hidden;aspect-ratio:1/1;background:#f2f2f4}" +
    "#nalo-landing .nl-halo-img img{width:100%;height:100%;object-fit:cover}" +
    "#nalo-landing .nl-halo .it{margin-bottom:26px}#nalo-landing .nl-halo .it:last-child{margin-bottom:0}" +
    "#nalo-landing .nl-halo .it h3{font-size:18px;font-weight:700;margin:0 0 6px}" +
    "#nalo-landing .nl-halo .it p{font-size:13.5px;line-height:1.55;color:#666;margin:0}" +
    // darkcards
    "#nalo-landing .nl-darksec{background:#000;padding:52px clamp(16px,4vw,40px);margin:40px 0}" +
    "#nalo-landing .nl-darkin{max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-darksec h2{text-align:center;font-size:34px;font-weight:700;margin:0 0 30px;color:#fff}" +
    "#nalo-landing .nl-darkcards{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}" +
    "#nalo-landing .nl-darkcard{background:#fff;border-radius:16px;padding:28px 24px;text-align:center}" +
    "#nalo-landing .nl-darkcard h3{font-size:20px;font-weight:700;margin:0 0 10px;color:#111}" +
    "#nalo-landing .nl-darkcard p{font-size:14px;line-height:1.55;color:#555;margin:0}" +
    // testimonials
    "#nalo-landing .nl-testi{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-tcard{background:#f3f3f3;border-radius:16px;overflow:hidden;text-align:center}" +
    "#nalo-landing .nl-tcard>img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}" +
    "#nalo-landing .nl-tcard .in{padding:22px 20px}" +
    "#nalo-landing .nl-tstars{color:#5200ff;font-size:15px;letter-spacing:2px;margin-bottom:10px}" +
    "#nalo-landing .nl-tcard .q{font-size:13.5px;line-height:1.55;color:#333;margin:0 0 12px}" +
    "#nalo-landing .nl-tcard .au{font-weight:700;font-size:13px;color:#111}" +
    // iconsplit
    "#nalo-landing .nl-isplit{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center;max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-isplit .items .it{display:flex;align-items:center;gap:16px;margin-bottom:24px}" +
    "#nalo-landing .nl-isplit .items .it:last-child{margin-bottom:0}" +
    "#nalo-landing .nl-isplit .items .it img{width:46px;height:46px;object-fit:contain;flex:0 0 auto}" +
    "#nalo-landing .nl-isplit .items .it b{font-size:17px;font-weight:700}" +
    "#nalo-landing .nl-isplit h2{text-align:left;font-size:34px;font-weight:700;margin:0 0 16px}" +
    "#nalo-landing .nl-isplit>div>p{font-size:14.5px;line-height:1.6;color:#555;margin:0}" +
    // prosefeat (extiende prose)
    "#nalo-landing .nl-pr-intro{font-size:14.5px;line-height:1.6;color:#444;margin:0 0 20px}" +
    "#nalo-landing .nl-pr-feat{margin-bottom:16px}" +
    "#nalo-landing .nl-pr-feat b{display:flex;align-items:center;gap:9px;font-size:15px;margin-bottom:3px}" +
    "#nalo-landing .nl-pr-feat b svg{width:20px;height:20px;flex:0 0 auto}" +
    "#nalo-landing .nl-pr-feat p{font-size:13.5px;line-height:1.55;color:#666;margin:0 0 0 29px}" +
    // imgslider
    "#nalo-landing .nl-islider{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1240px;margin:0 auto}" +
    "#nalo-landing .nl-islider img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:12px;display:block}" +
    // vs (Cómo somos diferentes) - 2 columnas
    "#nalo-landing .nl-vs2{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-vs2-left h2{text-align:left;font-size:40px;font-weight:700;margin:0 0 18px;line-height:1.1}" +
    "#nalo-landing .nl-vs2-left p{text-align:left;font-size:15px;line-height:1.6;color:#555;margin:0}" +
    "#nalo-landing .nl-vs2-table{background:#fff;border-radius:20px;box-shadow:0 12px 40px rgba(0,0,0,.10);padding:10px 14px}" +
    "#nalo-landing .nl-vs2-table table{width:100%;border-collapse:separate;border-spacing:0}" +
    "#nalo-landing .nl-vs2-table td{padding:15px 10px;text-align:center;vertical-align:middle}" +
    "#nalo-landing .nl-vs2-table .lbl{background:#000;color:#fff;font-weight:700;font-size:13.5px;width:54%;padding:15px 18px;line-height:1.3}" +
    "#nalo-landing .nl-vs2-table .hd-lbl{background:transparent}" +
    "#nalo-landing .nl-vs2-table tbody tr:first-child .lbl{border-radius:16px 16px 0 0}" +
    "#nalo-landing .nl-vs2-table tbody tr:last-child .lbl{border-radius:0 0 16px 16px}" +
    "#nalo-landing .nl-vs2-table .col{width:23%}" +
    "#nalo-landing .nl-vs2-table tbody .col{border-bottom:1px solid #eee}" +
    "#nalo-landing .nl-vs2-table tbody tr:last-child .col{border-bottom:0}" +
    "#nalo-landing .nl-vs2-table .oth{color:#888;font-weight:700;font-size:13px}" +
    "#nalo-landing .nl-vs2-table .vlogo{height:22px;width:auto;vertical-align:middle}" +
    "#nalo-landing .nl-vs2-table .vy{width:22px;height:22px}#nalo-landing .nl-vs2-table .vn{width:20px;height:20px}" +
    // alineación izquierda de textos en prose/iconsplit (la sección custom fuerza center)
    "#nalo-landing .nl-pr-txt{text-align:left}#nalo-landing .nl-isplit>div>p{text-align:left}" +
    // bloque de envíos + pagos (vive dentro de la descripción, debajo del botón; sin prefijo #nalo-landing)
    ".nl-trust{margin:4px 0 18px}.nl-trust *{box-sizing:border-box}" +
    ".nl-trust-card{border:1px solid #ececec;border-radius:12px;padding:16px 18px;background:#fff}" +
    ".nl-trust-rows{display:flex;gap:18px;flex-wrap:wrap}" +
    ".nl-trust-item{display:flex;gap:11px;align-items:flex-start;flex:1;min-width:170px}" +
    ".nl-trust-item .ic{flex:0 0 auto;line-height:0}" +
    ".nl-trust-item .ic svg{width:24px;height:24px;fill:#5200FF}" +
    ".nl-trust-item b{display:block;font-size:14px;font-weight:700;color:#111;margin:0 0 2px}" +
    ".nl-trust-item span{display:block;font-size:12.5px;color:#666;line-height:1.45}" +
    ".nl-trust-div{border:0;border-top:1px solid #f0f0f0;margin:15px 0 13px}" +
    ".nl-pay{display:flex;align-items:center;gap:12px;flex-wrap:wrap}" +
    ".nl-pay-lbl{font-size:12.5px;color:#555;font-weight:600}" +
    ".nl-pay-tiles{display:flex;gap:7px;flex-wrap:wrap}" +
    ".nl-pay-tile{height:30px;min-width:46px;padding:0 9px;border:1px solid #ebebeb;border-radius:5px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.03)}" +
    ".nl-pay-tile img{height:18px !important;width:auto !important;max-width:64px !important;object-fit:contain;display:block;margin:0 !important;border-radius:0 !important}" +
    "@media(max-width:768px){#nalo-landing .nl-ts,#nalo-landing .nl-gl,#nalo-landing .nl-stats,#nalo-landing .nl-feats,#nalo-landing .nl-pr{grid-template-columns:1fr}#nalo-landing .nl-ts-media,#nalo-landing .nl-pr-media{max-width:360px;margin:0 auto}#nalo-landing .nl-pr-media{order:-1}#nalo-landing .nl-pr-txt h2{text-align:left;font-size:28px}#nalo-landing .nl-h{font-size:28px}#nalo-landing .nl-ts h2{text-align:left;font-size:28px}" +
    "#nalo-landing .nl-halo-grid,#nalo-landing .nl-darkcards,#nalo-landing .nl-testi,#nalo-landing .nl-isplit,#nalo-landing .nl-vs2{grid-template-columns:1fr}#nalo-landing .nl-islider{grid-template-columns:1fr 1fr;gap:12px}#nalo-landing .nl-halo-img{max-width:340px;margin:0 auto}#nalo-landing .nl-darksec h2,#nalo-landing .nl-isplit h2,#nalo-landing .nl-vs2-left h2{font-size:26px}#nalo-landing .nl-isplit h2{text-align:left}" +
    "#nalo-landing .nl-gl-right{order:1;grid-template-columns:1fr 1fr;gap:10px}#nalo-landing .nl-gl-left{order:2;text-align:left}#nalo-landing .nl-gl-left .buy{width:100%}#nalo-landing .nl-gl-thumbs{grid-column:1/-1;flex-direction:row;flex-wrap:nowrap;justify-content:center;gap:5px}#nalo-landing .nl-gl-thumbs button{flex:0 0 auto;width:60px;height:40px}#nalo-landing .nl-gl-left .pct{font-size:64px}#nalo-landing .nl-gl-left h3{font-size:24px}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var CHECK = '<svg viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"/></svg>';
  function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}

  function render(sec, idx) {
    var t = sec.type;
    if (t === "accordion" || t === "faq") {
      var it = sec.items.map(function (i) {
        return '<details><summary><span>' + esc(i[0]) + '</span></summary><p>' + esc(i[1]) + '</p></details>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-ac">' + it + '</div></section>';
    }
    if (t === "instagram") {
      var IGICON = '<svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>';
      return '<section class="nl-sec nl-ig">' +
        '<h2 class="nl-h">' + esc(sec.title) + '</h2>' +
        '<div class="nl-ig-btnwrap"><a class="nl-ig-btn" href="' + sec.link + '" target="_blank" rel="noopener">' +
          '<span class="nl-ig-inner">' + IGICON + '<span>' + esc(sec.subtitle) + '</span></span></a></div>' +
        '<div id="nalo-videos" data-bare="1"' + (sec.noSound ? ' data-nosound="1"' : '') +
          (sec.videos ? ' data-vids="' + sec.videos.join(",") + '"' : '') +
          (sec.vidBase ? ' data-vidbase="' + sec.vidBase + '"' : '') + '></div>' +
      '</section>';
    }
    if (t === "gallery") {
      var titleH = sec.highlight
        ? esc(sec.title).replace(esc(sec.highlight), '<span class="v">' + esc(sec.highlight) + '</span>')
        : esc(sec.title);
      var thumbs = sec.pairs.map(function (p, i) {
        return '<button data-i="' + i + '"' + (i === 0 ? ' class="on"' : '') + '><img src="' + p[0] + '" alt=""><img src="' + p[1] + '" alt=""></button>';
      }).join("");
      return '<section class="nl-sec" data-gallery="' + idx + '"><h2 class="nl-h">' + titleH + '</h2>' +
        '<div class="nl-gl">' +
          '<div class="nl-gl-left">' +
            '<h3>' + esc(sec.leftTitle) + '</h3>' +
            '<b class="pct">' + esc(sec.stat) + '</b>' +
            '<p class="pct-txt">' + esc(sec.statTxt) + '</p><hr>' +
            '<p class="note">' + esc(sec.note) + '</p>' +
            '<button class="buy">Comprar ahora</button>' +
          '</div>' +
          '<div class="nl-gl-right">' +
            '<figure><img class="ga" src="' + sec.pairs[0][0] + '" alt=""><span class="pill dark">' + esc(sec.beforeLabel || "Antes") + '</span></figure>' +
            '<figure><img class="gd" src="' + sec.pairs[0][1] + '" alt=""><span class="pill vio">' + esc(sec.afterLabel || "Después") + '</span></figure>' +
            '<div class="nl-gl-thumbs">' + thumbs + '</div>' +
          '</div>' +
        '</div></section>';
    }
    if (t === "compare") {
      var titleH = sec.highlight ? esc(sec.title).replace(esc(sec.highlight), '<span class="v">' + esc(sec.highlight) + '</span>') : esc(sec.title);
      if (sec.subtitle) titleH += ' ' + esc(sec.subtitle);
      var head = '<tr><th></th>';
      sec.cols.forEach(function (c, i) {
        var brand = i === 0, inner = "";
        if (brand) inner += '<div class="nl-cmp-badge">MEJOR OPCIÓN</div>' + (sec.logo ? '<img class="nl-cmp-logo" src="' + sec.logo + '" alt="Nalo">' : '');
        else inner += '<div class="nl-cmp-name">' + esc(c) + '</div>';
        if (sec.images) inner += '<img class="nl-cmp-prod" src="' + sec.images[i] + '" alt="">';
        head += '<th class="' + (brand ? "brand" : "") + '">' + inner + '</th>';
      });
      head += '</tr>';
      var YES = '<span class="yes"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
      var NO = '<span class="no"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" stroke="#fff" stroke-width="3" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg></span>';
      var NEU = '<span class="neu"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg></span>';
      var body = sec.rows.map(function (r) {
        var cells = r.slice(1).map(function (v, i) { return '<td class="' + (i === 0 ? "brand " : "") + '">' + (v === 2 ? NEU : v ? YES : NO) + '</td>'; }).join("");
        return '<tr class="nl-cmp-row"><td>' + esc(r[0]) + '</td>' + cells + '</tr>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + titleH + '</h2><div class="nl-cmp"><table>' + head + body + '</table></div></section>';
    }
    if (t === "techsplit") {
      var acc = sec.items.map(function (i) {
        var icon = i[2] ? '<img class="ts-ic" src="' + i[2] + '" alt="">' : '<span class="ic">' + CHECK + '</span>';
        return '<details><summary>' + icon + '<span class="t">' + esc(i[0]) + '</span></summary><p>' + esc(i[1]) + '</p></details>';
      }).join("");
      var mInner = "";
      if (sec.media) mInner = /\.(mp4|webm)$/i.test(sec.media)
        ? '<video src="' + sec.media + '" autoplay muted loop playsinline preload="metadata"></video>'
        : '<img src="' + sec.media + '" alt="">';
      var media = '<div class="nl-ts-media">' + mInner + '</div>';
      return '<section class="nl-sec"><div class="nl-ts">' + media + '<div><h2>' + esc(sec.title) + '</h2>' + acc + '</div></div></section>';
    }
    if (t === "stats") {
      var cards = sec.items.map(function (i) {
        var p = i[0].replace("%", "");
        return '<div class="nl-stat"><div class="ring" style="--p:' + (p * 3.6) + 'deg"><i>' + esc(i[0]) + '</i></div><p>' + esc(i[1]) + '</p></div>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-stats">' + cards + '</div><p class="nl-note">' + esc(sec.note) + '</p></section>';
    }
    if (t === "prose") {
      var ps = sec.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
      var pm = /\.(mp4|webm)$/i.test(sec.media || "")
        ? '<video src="' + sec.media + '" autoplay muted loop playsinline preload="metadata"></video>'
        : '<img src="' + sec.media + '" alt="">';
      var med = '<div class="nl-pr-media">' + pm + '</div>';
      var txt = '<div class="nl-pr-txt"><h2>' + esc(sec.title) + '</h2>' + ps +
        (sec.button ? '<button class="buy nl-pr-btn">' + esc(sec.button) + '</button>' : '') + '</div>';
      return '<section class="nl-sec"><div class="nl-pr">' + (sec.mediaRight ? txt + med : med + txt) + '</div></section>';
    }
    if (t === "halo") {
      var haloCol = function (items) { return items.map(function (i) { return '<div class="it"><h3>' + esc(i[0]) + '</h3><p>' + esc(i[1]) + '</p></div>'; }).join(""); };
      return '<section class="nl-sec"><div class="nl-halo"><h2 class="nl-h" style="margin-bottom:6px">' + esc(sec.title) + '</h2>' +
        (sec.subtitle ? '<div class="sub">' + esc(sec.subtitle) + '</div>' : '') +
        '<div class="nl-halo-grid"><div>' + haloCol(sec.left) + '</div>' +
        '<div class="nl-halo-img"><img src="' + sec.image + '" alt=""></div>' +
        '<div>' + haloCol(sec.right) + '</div></div></div></section>';
    }
    if (t === "darkcards") {
      var dc = sec.cards.map(function (c) { return '<div class="nl-darkcard"><h3>' + esc(c[0]) + '</h3><p>' + esc(c[1]) + '</p></div>'; }).join("");
      return '<section class="nl-darksec"><div class="nl-darkin"><h2>' + esc(sec.title) + '</h2><div class="nl-darkcards">' + dc + '</div></div></section>';
    }
    if (t === "testimonials") {
      var tc = sec.items.map(function (i) { return '<div class="nl-tcard"><img src="' + i[0] + '" alt=""><div class="in"><div class="nl-tstars">★★★★★</div><p class="q">' + esc(i[1]) + '</p><div class="au">' + esc(i[2]) + '</div></div></div>'; }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-testi">' + tc + '</div></section>';
    }
    if (t === "iconsplit") {
      var il = sec.items.map(function (i) { return '<div class="it"><img src="' + i[0] + '" alt=""><b>' + esc(i[1]) + '</b></div>'; }).join("");
      return '<section class="nl-sec"><div class="nl-isplit"><div class="items">' + il + '</div><div><h2>' + esc(sec.title) + '</h2><p>' + esc(sec.text) + '</p></div></div></section>';
    }
    if (t === "prosefeat") {
      var CK = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#5200ff"/><polyline points="7 12.5 10.5 16 17 8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      var ff = sec.features.map(function (f) { return '<div class="nl-pr-feat"><b>' + CK + '<span>' + esc(f[0]) + '</span></b><p>' + esc(f[1]) + '</p></div>'; }).join("");
      var pmed = '<div class="nl-pr-media"><img src="' + sec.image + '" alt=""></div>';
      var ptxt = '<div class="nl-pr-txt"><h2>' + esc(sec.title) + '</h2><p class="nl-pr-intro">' + esc(sec.intro) + '</p>' + ff + '</div>';
      return '<section class="nl-sec"><div class="nl-pr">' + pmed + ptxt + '</div></section>';
    }
    if (t === "imgslider") {
      var isl = sec.images.map(function (u) { return '<img src="' + u + '" alt="">'; }).join("");
      return '<section class="nl-sec"><div class="nl-islider">' + isl + '</div></section>';
    }
    if (t === "vs") {
      var VY = '<svg class="vy" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" fill="none" stroke="#22b04a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      var VN = '<svg class="vn" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" stroke="#111" stroke-width="3" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="#111" stroke-width="3" stroke-linecap="round"/></svg>';
      var vhead = '<tr><td class="lbl hd-lbl"></td><td class="col"><img class="vlogo" src="' + sec.logo + '" alt="Nalo"></td><td class="col oth">Otros</td></tr>';
      var vbody = sec.rows.map(function (r) { return '<tr><td class="lbl">' + esc(r) + '</td><td class="col">' + VY + '</td><td class="col">' + VN + '</td></tr>'; }).join("");
      return '<section class="nl-sec"><div class="nl-vs2">' +
        '<div class="nl-vs2-left"><h2>' + esc(sec.title) + '</h2>' + (sec.lead ? '<p>' + esc(sec.lead) + '</p>' : '') + '</div>' +
        '<div class="nl-vs2-table"><table><thead>' + vhead + '</thead><tbody>' + vbody + '</tbody></table></div></div></section>';
    }
    if (t === "features") {
      var f = sec.items.map(function (i) { return '<div class="nl-feat"><b>' + esc(i[0]) + '</b><p>' + esc(i[1]) + '</p></div>'; }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-feats">' + f + '</div></section>';
    }
    return "";
  }

  // Bloque de envíos + medios de pago (igual en todas las landings, arriba del body)
  var TRUST =
    '<div class="nl-trust"><div class="nl-trust-card">' +
      '<div class="nl-trust-rows">' +
        '<div class="nl-trust-item"><span class="ic"><svg viewBox="0 0 24 24"><path d="M13 2 4 13h6l-1 9 9-12h-6z"/></svg></span><div><b>Envío en el día · CABA</b><span>Lo recibís hoy mismo o al día hábil siguiente.</span></div></div>' +
        '<div class="nl-trust-item"><span class="ic"><svg viewBox="0 0 24 24"><path d="M1 5a1 1 0 011-1h11a1 1 0 011 1v1h3.4a1 1 0 01.8.4l2.6 3.4a1 1 0 01.2.6V15a1 1 0 01-1 1h-1.1a3 3 0 01-5.8 0H8.9a3 3 0 01-5.8 0H2a1 1 0 01-1-1z"/><circle cx="6" cy="17.5" r="1.7" fill="#fff"/><circle cx="16" cy="17.5" r="1.7" fill="#fff"/></svg></span><div><b>Envío a todo el país</b><span>Lo recibís en 2 a 5 días hábiles vía Andreani.</span></div></div>' +
      '</div>' +
      '<hr class="nl-trust-div">' +
      '<div class="nl-pay"><span class="nl-pay-lbl">Pagá seguro con</span>' +
        '<div class="nl-pay-tiles">' +
          '<div class="nl-pay-tile"><img src="' + B + 'pay/visa.png" alt="Visa"></div>' +
          '<div class="nl-pay-tile"><img src="' + B + 'pay/mastercard.webp" alt="Mastercard"></div>' +
          '<div class="nl-pay-tile"><img src="' + B + 'pay/amex.webp" alt="American Express"></div>' +
          '<div class="nl-pay-tile"><img src="' + B + 'pay/naranjax.webp" alt="Naranja X"></div>' +
        '</div>' +
      '</div>' +
    '</div></div>';

  mount.innerHTML = TRUST + secs.map(render).join("");

  // mover el bloque de envíos/pagos debajo del botón, dentro de la descripción
  (function () {
    var trust = mount.querySelector(".nl-trust");
    var desc = document.querySelector("#ns-block-description .js-product-description") ||
               document.querySelector("#ns-block-description");
    if (trust && desc) desc.insertBefore(trust, desc.firstChild);
  })();

  // Reseñas de Wigy: las inyecta async DENTRO de la ficha del producto (arriba de la
  // landing). Las movemos al final del body para que queden después de todo el contenido.
  (function relocateWigy() {
    function move() {
      var rev = document.querySelector("#wigy-reviews:not([data-nl-moved])");
      if (!rev) return;
      rev.setAttribute("data-nl-moved", "1");
      mount.appendChild(rev);
    }
    move();
    var n = 0;
    var iv = setInterval(function () { move(); if (++n > 60) clearInterval(iv); }, 400);
    if (window.MutationObserver) {
      var mo = new MutationObserver(function () { move(); });
      mo.observe(document.body, { childList: true, subtree: true });
      setTimeout(function () { mo.disconnect(); }, 25000);
    }
  })();

  // carrusel de videos igual al de la home (reutiliza videos.js sobre #nalo-videos)
  if (mount.querySelector("#nalo-videos")) {
    var vs = document.createElement("script");
    vs.src = B + "videos.js";
    document.body.appendChild(vs);
  }

  // apertura/cierre suave de todos los desplegables (landing + ficha del producto)
  function smoothDetails(d) {
    var sum = d.querySelector("summary");
    if (!sum || d.dataset.smooth) return;
    d.dataset.smooth = "1";
    // envolver TODO el contenido posterior al summary en un wrapper y animarlo junto
    var body = document.createElement("div");
    body.className = "nl-dwrap";
    var n = sum.nextSibling;
    while (n) { var nx = n.nextSibling; body.appendChild(n); n = nx; }
    d.appendChild(body);
    body.style.overflow = "hidden";
    body.style.willChange = "height,opacity";
    if (!d.open) { body.style.height = "0px"; body.style.opacity = "0"; }
    sum.addEventListener("click", function (e) {
      e.preventDefault();
      if (d.animating) return;
      d.animating = true;
      var opening = !d.open;
      if (opening) d.open = true;
      var start = opening ? 0 : body.scrollHeight;
      var end = opening ? body.scrollHeight : 0;
      body.style.transition = "none";
      body.style.height = start + "px"; body.style.opacity = opening ? "0" : "1";
      requestAnimationFrame(function () {
        body.style.transition = "height .32s ease, opacity .32s ease";
        body.style.height = end + "px"; body.style.opacity = opening ? "1" : "0";
      });
      var done = function () {
        body.removeEventListener("transitionend", done);
        if (opening) { body.style.height = "auto"; }
        else { d.open = false; }
        body.style.transition = ""; d.animating = false;
      };
      body.addEventListener("transitionend", done);
    });
  }
  mount.querySelectorAll("details").forEach(smoothDetails);
  document.querySelectorAll("details.nalo-acc").forEach(smoothDetails);

  // galería antes/después seleccionable
  mount.querySelectorAll("[data-gallery]").forEach(function (g) {
    var idx = +g.getAttribute("data-gallery");
    var pairs = secs[idx].pairs;
    var ga = g.querySelector(".ga"), gd = g.querySelector(".gd");
    var buy = g.querySelector(".buy");
    if (buy) buy.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
    g.querySelectorAll(".nl-gl-thumbs button").forEach(function (b) {
      b.addEventListener("click", function () {
        var i = +b.getAttribute("data-i");
        ga.src = pairs[i][0]; gd.src = pairs[i][1];
        g.querySelectorAll(".nl-gl-thumbs button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
      });
    });
  });

  // botones "comprar" de bloques prose -> arriba
  mount.querySelectorAll(".nl-pr-btn").forEach(function (b) {
    b.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  });

  // reels de instagram: click reproduce/pausa
  mount.querySelectorAll(".nl-ig video").forEach(function (v) {
    v.addEventListener("click", function () { if (v.paused) v.play(); else v.pause(); });
  });

  // animación de aparición de filas de la comparativa (cascada al hacer scroll)
  var rows = mount.querySelectorAll(".nl-cmp-row");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var row = e.target;
          var i = [].indexOf.call(row.parentNode.querySelectorAll(".nl-cmp-row"), row);
          setTimeout(function () { row.classList.add("show"); }, (i % 8) * 90);
          io.unobserve(row);
        }
      });
    }, { threshold: 0.15 });
    rows.forEach(function (r) { io.observe(r); });
  } else {
    rows.forEach(function (r) { r.classList.add("show"); });
  }
})();
