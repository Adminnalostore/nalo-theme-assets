/* Nalo · Landings de producto · motor genérico.
   Se engancha UNA vez en el template de producto (product.json) con:
     <div id="nalo-landing"></div>
     <script src="https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@SHA/landing.js"></script>
   Detecta el producto por el handle de la URL y renderiza las secciones de esa
   landing debajo de la ficha. Data por producto en LANDINGS. Contenido real de
   nalostore.com (Shopify) — migración de la tienda de Nalo. */
(function () {
  var mount = document.getElementById("nalo-landing");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var S = document.currentScript || document.querySelector('script[src*="landing.js"]');
  var BASE = S.src.replace(/landing\.js.*$/, "");

  // ---- Data de las landings (key = handle de Tiendanube) ----
  var LANDINGS = {
    "musculosa-reductora-2-0-nalo": [
      { type: "beforeafter", title: "Cambio visible desde que te la ponés.",
        antes: BASE + "landings/musculosa/antes.webp", despues: BASE + "landings/musculosa/despues.webp",
        texto: "Doble capa de compresión que reduce el contorno y alinea la espalda. El resultado se ve desde el primer uso, invisible bajo cualquier prenda." },
      { type: "features", title: "Tecnología Textil Que Trabaja Por Vos", items: [
        ["Abdomen Plano Al Instante", "Doble capa de compresión en la zona abdominal que reduce visualmente hasta 2 talles desde el primer uso. Disimula el abdomen y el tejido adiposo del pecho sin esfuerzo."],
        ["Postura Erguida Y Confiada", "El entramado posterior ejerce una tracción ligera que alinea tus hombros y columna, corrigiendo la postura encorvada del trabajo de escritorio o el celular."],
        ["Invisible Bajo La Ropa", "Costuras planas y corte seamless. No se marca bajo camisas, remeras ni ropa deportiva. Nadie nota que la llevás puesta."],
        ["Compresión Que No Aprieta", "Mezcla de 75% Nylon y 25% Spandex que comprime sin cortar la circulación. Te acompaña todo el día sin molestias ni marcas en la piel."],
        ["Transpirable Y De Secado Rápido", "El tejido técnico permite que la piel respire y evapora la humedad rápidamente. Ideal para la oficina, eventos o entrenando."],
        ["Calidad Premium Duradera", "Fibras de alta densidad que mantienen la compresión y forma original lavado tras lavado. Una prenda pensada para durar años."]
      ]},
      { type: "compare", title: "Por qué la Musculosa Nalo es la mejor opción",
        cols: ["Musculosa Nalo", "Faja tradicional", "Musculosa común", "Cinturón postural"],
        rows: [
          ["Invisible bajo cualquier prenda", 1, 0, 1, 0],
          ["Reduce la panza al instante", 1, 1, 0, 0],
          ["Corrige la postura", 1, 0, 0, 1],
          ["Transpirable y cómoda", 1, 0, 1, 0],
          ["Apta para uso diario y deporte", 1, 0, 1, 0],
          ["Disimula el pecho", 1, 1, 0, 0],
          ["Doble capa de compresión", 1, 1, 0, 0]
        ]},
      { type: "reviews", title: "Lo que dicen nuestros clientes", items: [
        ["Rodrigo M.", "La uso abajo de la camisa para ir a trabajar y no se nota nada. Se me ve el abdomen mucho más plano.", 5],
        ["Sebastián L.", "Pensé que iba a ser incómoda pero la tenés puesta todo el día sin darte cuenta. Muy buena calidad.", 5],
        ["Diego F.", "Me corrige la postura y me veo más flaco al instante. La recomiendo totalmente.", 5]
      ]}
    ],

    "coolbamboo-pack-de-4-boxers-de-tela-de-bambu": [
      { type: "features", title: "Tecnología Textil Que Trabaja Por Vos", items: [
        ["Bambú, No Algodón", "El algodón absorbe la humedad y se queda con ella todo el día. El bambú la toma y la evapora: absorbe hasta 70% más y se seca solo. Una de las fibras más suaves que existen, regula la temperatura sola."],
        ["Frescura Que Dura", "El olor lo hacen las bacterias que crecen en la humedad. El bambú no la retiene, así que no tienen dónde crecer. Doce horas afuera y seguís sintiéndote recién cambiado."],
        ["Ventilación Donde Hace Falta", "Tejido abierto en el panel de bambú: el aire circula justo en la zona donde más calor se acumula. Está puesta donde el problema existe, no de adorno."],
        ["Cero Fricción", "Costuras planas y el tacto sedoso del bambú. Sin roces, sin marcas, sin acomodarte cada dos cuadras."],
        ["Elasticidad Que Vuelve", "Se estira en cuatro direcciones y recupera la forma. No se estaquea, no queda colgando, no se deforma después de tres lavados."],
        ["Calce A Medida", "Diseño anatómico con soporte donde lo necesitás y cintura antienrolle que no se dobla ni aprieta."]
      ]},
      { type: "compare", title: "Por qué el Boxer Nalo gana",
        cols: ["Boxer Nalo", "Algodón", "Algodón con lycra", "Deportivo"],
        rows: [
          ["Absorbe y evapora la humedad", 1, 0, 0, 1],
          ["Antiolor durante todo el día", 1, 0, 0, 0],
          ["Ventilación en la zona", 1, 0, 0, 1],
          ["No se deforma con el uso", 1, 0, 1, 1],
          ["Cintura que no se enrolla", 1, 0, 0, 0],
          ["Suavidad sin fricción", 1, 1, 1, 0]
        ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Qué es la fibra de bambú y por qué se usa en los boxers?", "Es un material natural apreciado por ser suave, transpirable y respetuoso con el medio ambiente. La usamos para dar un confort óptimo y promover una mejor higiene íntima."],
        ["¿En qué se diferencia la transpirabilidad del bambú?", "Permite que el aire circule, reduciendo la humedad y la transpiración. Te sentís cómodo y fresco sin importar tu actividad."],
        ["¿Cómo se compara la durabilidad con un boxer tradicional?", "El material de alta calidad los hace más resistentes al desgaste: duran más que los calzoncillos regulares."],
        ["¿Son adecuados para piel sensible?", "Sí. La suavidad del bambú reduce el roce y ayuda a mantener una higiene impecable en las áreas íntimas."]
      ]},
      { type: "reviews", title: "Lo que dicen nuestros clientes", items: [
        ["Martín G.", "Los uso todos los días, la diferencia con el algodón se nota. No transpirás igual.", 5],
        ["Nicolás P.", "Súper suaves y frescos. Ya compré el segundo pack.", 5],
        ["Julián R.", "Cero olor al final del día, aunque haga calor. Muy recomendables.", 5]
      ]}
    ],

    "pantalon-antiarrugas-nalo": [
      { type: "features", title: "La tela hace el trabajo, vos no", items: [
        ["Impecable Sin Planchar", "Las fibras de poliéster tienen memoria: se doblan pero recuerdan su forma. A las seis de la tarde, después de ocho horas sentado, el pantalón está igual que a la mañana."],
        ["Repele Líquidos Y Manchas", "La tela repele el agua y las salpicaduras: los líquidos resbalan sin penetrar. Un café o gaseosa que se vuelca se limpia con una servilleta, sin dejar mancha."],
        ["Estructura Que No Se Deforma", "El 95% de poliéster de alta densidad sostiene el pliegue, la caída de la pierna y la forma de la rodilla. Nadie nota que es elástico. Vos sí."],
        ["Elasticidad En 4 Direcciones", "El spandex está tejido a lo largo y a lo ancho. Te agachás, cruzás la pierna, subís escaleras de a dos. El pantalón te sigue y vuelve solo a su lugar."],
        ["Comodidad De Ocho Horas", "Cintura elastizada oculta y un tiro calculado para estar sentado, no solo parado. Llegás a casa y no es lo primero que te sacás."],
        ["Lavable A Máquina", "El poliéster no encoge, no destiñe y no pierde la forma. Lavarropas en frío, colgar, listo. Nunca más tintorería ni plancha un domingo a la noche."]
      ]},
      { type: "compare", title: "Por qué el Pantalón Nalo gana",
        cols: ["Pantalón Nalo", "De vestir clásico", "Chino de algodón", "Deportivo"],
        rows: [
          ["No se arruga (sin plancha)", 1, 0, 0, 1],
          ["Repele líquidos y manchas", 1, 0, 0, 0],
          ["Elástico en 4 direcciones", 1, 0, 0, 1],
          ["Mantiene la forma todo el día", 1, 1, 0, 0],
          ["Lavable en casa, sin tintorería", 1, 0, 1, 1],
          ["Formal y casual a la vez", 1, 1, 1, 0]
        ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Se va a notar que no son pantalones de vestir comunes?", "No. De frente, de costado y de atrás son un pantalón de vestir. Nadie en la oficina va a ver la diferencia. Vos sí, cuando llegue la tarde."],
        ["¿Realmente no se arrugan?", "No necesitan plancha: la tela libera las arrugas sola cuando el pantalón vuelve a colgar. Ocho horas sentado, un vuelo, doblado en la valija: te parás y está liso."],
        ["¿Es cierto que repele los líquidos?", "Sí. La tela repele el agua y las salpicaduras: en vez de absorberse, quedan sobre la superficie y resbalan. Un derrame de café o gaseosa se limpia con una servilleta."],
        ["¿Qué talle pido?", "Si estás entre dos, pedí el más grande. La tela tiene tanto elástico que un poco de más nunca es problema. La tabla de talles está en la última foto del producto."],
        ["¿Sirven para un evento formal, un casamiento?", "Sí. Con saco y zapatos de vestir es un pantalón de traje. Y es el pantalón con el que vas a estar sentado seis horas en la fiesta sin querer sacártelo."],
        ["¿Cómo los lavo?", "Lavarropas en agua fría, colgado a secar. Nada más. No se planchan, no van a la tintorería, no encogen y no destiñen."]
      ]},
      { type: "reviews", title: "Lo que dicen nuestros clientes", items: [
        ["Federico A.", "Lo uso para trabajar y llego a la noche sin una arruga. Impecable.", 5],
        ["Gonzalo M.", "Se me volcó café y lo limpié con una servilleta. Increíble.", 5],
        ["Lucas D.", "Comodísimo y no parece elástico. Va con todo, formal o informal.", 5]
      ]}
    ]
  };

  // ---- Detectar producto por handle en la URL ----
  var m = location.pathname.match(/\/productos\/([^\/]+)/);
  var handle = m ? decodeURIComponent(m[1]) : "";
  var secciones = LANDINGS[handle];
  if (!secciones) return; // producto sin landing custom -> no hace nada

  // ---- Estilos (una vez) ----
  var CSS = "" +
    "#nalo-landing{--v:#5200ff;font-family:Poppins,sans-serif}" +
    "#nalo-landing .nl-sec{max-width:1200px;margin:0 auto;padding:56px 24px}" +
    "#nalo-landing .nl-h{text-align:center;font-weight:700;font-size:32px;letter-spacing:.02rem;margin:0 0 36px;color:#111}" +
    // before/after
    "#nalo-landing .nl-ba{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin:0 auto 22px}" +
    "#nalo-landing .nl-ba figure{margin:0}" +
    "#nalo-landing .nl-ba img{width:100%;border-radius:16px;display:block}" +
    "#nalo-landing .nl-ba figcaption{text-align:center;font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#888;margin-top:10px}" +
    "#nalo-landing .nl-ba .d figcaption{color:var(--v)}" +
    "#nalo-landing .nl-ba-txt{text-align:center;max-width:640px;margin:0 auto;color:#555;font-size:15px;line-height:1.6}" +
    // features
    "#nalo-landing .nl-feats{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}" +
    "#nalo-landing .nl-feat{background:#f7f7f8;border-radius:16px;padding:26px}" +
    "#nalo-landing .nl-feat .ic{width:40px;height:40px;border-radius:10px;background:var(--v);display:flex;align-items:center;justify-content:center;margin-bottom:14px}" +
    "#nalo-landing .nl-feat .ic svg{width:22px;height:22px;fill:#fff}" +
    "#nalo-landing .nl-feat b{display:block;font-size:16px;margin-bottom:8px;color:#111}" +
    "#nalo-landing .nl-feat p{margin:0;font-size:13.5px;line-height:1.55;color:#666}" +
    // compare
    "#nalo-landing .nl-cmp{max-width:900px;margin:0 auto;overflow-x:auto}" +
    "#nalo-landing .nl-cmp table{width:100%;border-collapse:collapse;min-width:640px}" +
    "#nalo-landing .nl-cmp th,#nalo-landing .nl-cmp td{padding:14px 10px;text-align:center;border-bottom:1px solid #eee;font-size:13.5px}" +
    "#nalo-landing .nl-cmp th{font-weight:700}" +
    "#nalo-landing .nl-cmp td:first-child,#nalo-landing .nl-cmp th:first-child{text-align:left;font-weight:600}" +
    "#nalo-landing .nl-cmp .brand{background:var(--v);color:#fff;border-radius:12px 12px 0 0}" +
    "#nalo-landing .nl-cmp td.brand{background:rgba(82,0,255,.06)}" +
    "#nalo-landing .nl-cmp .yes{color:var(--v);font-weight:800;font-size:16px}" +
    "#nalo-landing .nl-cmp .brand .yes{color:#fff}" +
    "#nalo-landing .nl-cmp .no{color:#ccc;font-size:16px}" +
    // reviews
    "#nalo-landing .nl-revs{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}" +
    "#nalo-landing .nl-rev{background:#fff;border:1px solid #eee;border-radius:16px;padding:24px;box-shadow:0 4px 16px rgba(0,0,0,.05)}" +
    "#nalo-landing .nl-rev .stars{color:#ffb400;font-size:15px;margin-bottom:10px}" +
    "#nalo-landing .nl-rev p{margin:0 0 14px;font-size:14px;line-height:1.55;color:#333;font-style:italic}" +
    "#nalo-landing .nl-rev b{font-size:13px;color:#111}" +
    // faq
    "#nalo-landing .nl-faq{max-width:760px;margin:0 auto}" +
    "#nalo-landing .nl-faq details{border-bottom:1px solid #eee}" +
    "#nalo-landing .nl-faq summary{list-style:none;cursor:pointer;padding:18px 4px;font-weight:600;font-size:15px;color:#111;display:flex;justify-content:space-between;align-items:center;gap:12px}" +
    "#nalo-landing .nl-faq summary::-webkit-details-marker{display:none}" +
    "#nalo-landing .nl-faq summary::after{content:'+';color:var(--v);font-size:22px;font-weight:400;flex:0 0 auto}" +
    "#nalo-landing .nl-faq details[open] summary::after{content:'\\2013'}" +
    "#nalo-landing .nl-faq p{margin:0 4px 18px;font-size:14px;line-height:1.6;color:#666}" +
    "@media(max-width:768px){#nalo-landing .nl-feats,#nalo-landing .nl-revs{grid-template-columns:1fr}#nalo-landing .nl-h{font-size:26px}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var CHECK = '<svg viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2l-1.5-1.5z"/></svg>';

  function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML;}

  function render(sec) {
    if (sec.type === "beforeafter") {
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2>' +
        '<div class="nl-ba"><figure class="a"><img src="' + sec.antes + '" alt="Antes"><figcaption>Antes</figcaption></figure>' +
        '<figure class="d"><img src="' + sec.despues + '" alt="Después"><figcaption>Después</figcaption></figure></div>' +
        '<p class="nl-ba-txt">' + esc(sec.texto) + '</p></section>';
    }
    if (sec.type === "features") {
      var f = sec.items.map(function (it) {
        return '<div class="nl-feat"><div class="ic">' + CHECK + '</div><b>' + esc(it[0]) + '</b><p>' + esc(it[1]) + '</p></div>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-feats">' + f + '</div></section>';
    }
    if (sec.type === "compare") {
      var head = '<tr><th></th>' + sec.cols.map(function (c, i) {
        return '<th class="' + (i === 0 ? "brand" : "") + '">' + esc(c) + '</th>';
      }).join("") + '</tr>';
      var body = sec.rows.map(function (r) {
        var cells = r.slice(1).map(function (v, i) {
          return '<td class="' + (i === 0 ? "brand " : "") + '">' + (v ? '<span class="yes">✓</span>' : '<span class="no">✕</span>') + '</td>';
        }).join("");
        return '<tr><td>' + esc(r[0]) + '</td>' + cells + '</tr>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-cmp"><table>' + head + body + '</table></div></section>';
    }
    if (sec.type === "reviews") {
      var rv = sec.items.map(function (it) {
        return '<div class="nl-rev"><div class="stars">' + "★".repeat(it[2]) + '</div><p>“' + esc(it[1]) + '”</p><b>' + esc(it[0]) + '</b></div>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-revs">' + rv + '</div></section>';
    }
    if (sec.type === "faq") {
      var fq = sec.items.map(function (it) {
        return '<details><summary>' + esc(it[0]) + '</summary><p>' + esc(it[1]) + '</p></details>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-faq">' + fq + '</div></section>';
    }
    return "";
  }

  mount.innerHTML = secciones.map(render).join("");
})();
