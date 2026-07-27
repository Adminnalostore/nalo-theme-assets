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
  var IG = "https://www.instagram.com/nalostore/";

  var LANDINGS = {
    "musculosa-reductora-2-0-nalo": [
      { type: "accordion", title: "Detalles del tejido", items: [
        ["25% Spandex, 75% Nylon", "Tras rigurosas pruebas de rendimiento desarrollamos una mezcla de fibras de alta densidad que garantiza el máximo nivel de compresión y modelado sin perder la elasticidad necesaria para el movimiento."],
        ["Compresión de doble capa", "A diferencia de las prendas convencionales, usa doble panel de compresión en las zonas críticas (abdomen y pecho). El doble de soporte y el doble de resultados visuales."]
      ]},
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
      { type: "compare", title: "Por qué la Musculosa Nalo gana",
        cols: ["Musculosa Nalo", "Faja tradicional", "Musculosa común", "Cinturón postural"],
        rows: [ ["Invisible bajo cualquier prenda",1,0,1,0], ["Reduce la panza al instante",1,1,0,0],
                ["Corrige la postura",1,0,0,1], ["Transpirable y cómoda",1,0,1,0],
                ["Apta para uso diario y deporte",1,0,1,0], ["Disimula el pecho",1,1,0,0],
                ["Doble capa de compresión",1,1,0,0] ]},
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: B+"landings/musculosa/tech.webp", items: [
        ["Abdomen Plano Al Instante", "Doble capa de compresión en la zona abdominal que reduce visualmente hasta 2 talles desde el primer uso. Disimula el abdomen y el tejido adiposo del pecho sin esfuerzo."],
        ["Postura Erguida Y Confiada", "El entramado posterior ejerce una tracción ligera que alinea tus hombros y columna, corrigiendo la postura encorvada del escritorio o el celular."],
        ["Invisible Bajo La Ropa", "Costuras planas y corte seamless. No se marca bajo camisas, remeras ni ropa deportiva. Nadie nota que la llevás puesta."],
        ["Compresión Que No Aprieta", "Mezcla de 75% Nylon y 25% Spandex que comprime sin cortar la circulación. Todo el día sin molestias ni marcas."],
        ["Transpirable Y De Secado Rápido", "El tejido técnico permite que la piel respire y evapora la humedad rápidamente. Ideal para la oficina, eventos o entrenando."],
        ["Calidad Premium Duradera", "Fibras de alta densidad que mantienen la compresión y forma original lavado tras lavado. Pensada para durar años."]
      ]},
      { type: "stats", title: "Resultados Comprobados por Nuestros Clientes",
        note: "Resultados comprobados en un estudio interno con más de 150 usuarios del producto.",
        items: [ ["93%","Dijeron sentirse más seguros al usar la Musculosa Reductora."],
                 ["95%","Contaron que se sintieron más confiados: en una cita, en el laburo o en el gimnasio."],
                 ["50%","Afirmaron que al notarse más firmes y prolijos, se sintieron motivados a entrenar más."] ]}
    ],

    "coolbamboo-pack-de-4-boxers-de-tela-de-bambu": [
      { type: "techsplit", title: "Tecnología Textil Que Trabaja Por Vos", media: "",
        items: [
          ["Bambú, No Algodón", "El algodón absorbe la humedad y se queda con ella. El bambú la toma y la evapora: absorbe hasta 70% más y se seca solo. Una de las fibras más suaves, regula la temperatura sola."],
          ["Frescura Que Dura", "El olor lo hacen las bacterias que crecen en la humedad. El bambú no la retiene, así que no tienen dónde crecer. Doce horas afuera y seguís sintiéndote recién cambiado."],
          ["Ventilación Donde Hace Falta", "Tejido abierto en el panel de bambú: el aire circula justo en la zona donde más calor se acumula."],
          ["Cero Fricción", "Costuras planas y el tacto sedoso del bambú. Sin roces, sin marcas, sin acomodarte cada dos cuadras."],
          ["Elasticidad Que Vuelve", "Se estira en cuatro direcciones y recupera la forma. No se estaquea ni se deforma después de tres lavados."],
          ["Calce A Medida", "Diseño anatómico con soporte donde lo necesitás y cintura antienrolle que no se dobla ni aprieta."]
        ]},
      { type: "compare", title: "Por qué el Boxer Nalo gana",
        cols: ["Boxer Nalo", "Algodón", "Algodón con lycra", "Deportivo"],
        rows: [ ["Absorbe y evapora la humedad",1,0,0,1], ["Antiolor durante todo el día",1,0,0,0],
                ["Ventilación en la zona",1,0,0,1], ["No se deforma con el uso",1,0,1,1],
                ["Cintura que no se enrolla",1,0,0,0], ["Suavidad sin fricción",1,1,1,0] ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Qué es la fibra de bambú y por qué se usa en los boxers?", "Es un material natural apreciado por ser suave, transpirable y respetuoso con el medio ambiente. Da un confort óptimo y promueve una mejor higiene íntima."],
        ["¿En qué se diferencia la transpirabilidad del bambú?", "Permite que el aire circule, reduciendo la humedad y la transpiración. Te sentís cómodo y fresco sin importar tu actividad."],
        ["¿Cómo se compara la durabilidad con un boxer tradicional?", "El material de alta calidad los hace más resistentes al desgaste: duran más que los calzoncillos regulares."],
        ["¿Son adecuados para piel sensible?", "Sí. La suavidad del bambú reduce el roce y ayuda a mantener una higiene impecable."]
      ]}
    ],

    "pantalon-antiarrugas-nalo": [
      { type: "techsplit", title: "La tela hace el trabajo, vos no", media: "",
        items: [
          ["Impecable Sin Planchar", "Las fibras de poliéster tienen memoria: se doblan pero recuerdan su forma. A las seis de la tarde, tras ocho horas sentado, el pantalón está igual que a la mañana."],
          ["Repele Líquidos Y Manchas", "La tela repele el agua y las salpicaduras: los líquidos resbalan sin penetrar. Un café o gaseosa que se vuelca se limpia con una servilleta."],
          ["Estructura Que No Se Deforma", "El 95% de poliéster de alta densidad sostiene el pliegue, la caída de la pierna y la forma de la rodilla. Nadie nota que es elástico. Vos sí."],
          ["Elasticidad En 4 Direcciones", "El spandex está tejido a lo largo y a lo ancho. Te agachás, cruzás la pierna, subís escaleras de a dos. El pantalón te sigue y vuelve solo a su lugar."],
          ["Comodidad De Ocho Horas", "Cintura elastizada oculta y un tiro calculado para estar sentado. Llegás a casa y no es lo primero que te sacás."],
          ["Lavable A Máquina", "El poliéster no encoge, no destiñe y no pierde la forma. Lavarropas en frío, colgar, listo. Nunca más tintorería ni plancha."]
        ]},
      { type: "compare", title: "Por qué el Pantalón Nalo gana",
        cols: ["Pantalón Nalo", "De vestir clásico", "Chino de algodón", "Deportivo"],
        rows: [ ["No se arruga (sin plancha)",1,0,0,1], ["Repele líquidos y manchas",1,0,0,0],
                ["Elástico en 4 direcciones",1,0,0,1], ["Mantiene la forma todo el día",1,1,0,0],
                ["Lavable en casa, sin tintorería",1,0,1,1], ["Formal y casual a la vez",1,1,1,0] ]},
      { type: "faq", title: "Preguntas frecuentes", items: [
        ["¿Se va a notar que no son pantalones de vestir comunes?", "No. De frente, de costado y de atrás son un pantalón de vestir. Nadie en la oficina va a ver la diferencia. Vos sí, cuando llegue la tarde."],
        ["¿Realmente no se arrugan?", "No necesitan plancha: la tela libera las arrugas sola cuando el pantalón vuelve a colgar. Ocho horas sentado, un vuelo, doblado en la valija: te parás y está liso."],
        ["¿Es cierto que repele los líquidos?", "Sí. En vez de absorberse, los líquidos quedan sobre la superficie y resbalan. Un derrame de café o gaseosa se limpia con una servilleta."],
        ["¿Qué talle pido?", "Si estás entre dos, pedí el más grande. La tela tiene tanto elástico que un poco de más nunca es problema. La tabla está en la última foto del producto."],
        ["¿Sirven para un evento formal, un casamiento?", "Sí. Con saco y zapatos de vestir es un pantalón de traje. Y es con el que vas a estar sentado seis horas sin querer sacártelo."],
        ["¿Cómo los lavo?", "Lavarropas en agua fría, colgado a secar. No se planchan, no van a la tintorería, no encogen y no destiñen."]
      ]}
    ]
  };

  var m = location.pathname.match(/\/productos\/([^\/]+)/);
  var handle = m ? decodeURIComponent(m[1]) : "";
  var secs = LANDINGS[handle];
  if (!secs) return;

  var CSS = "" +
    "#nalo-landing{--v:#5200ff;font-family:Poppins,sans-serif;color:#111}" +
    "#nalo-landing .nl-sec{max-width:1160px;margin:0 auto;padding:52px 24px}" +
    "#nalo-landing .nl-h{text-align:center;font-weight:700;font-size:32px;letter-spacing:.02rem;margin:0 0 34px}" +
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
    "#nalo-landing .nl-ig{text-align:center}" +
    "#nalo-landing .nl-ig .sub{color:#666;margin:-24px 0 22px;font-size:15px}" +
    "#nalo-landing .nl-ig .btn{display:inline-block;background:var(--v);color:#fff;font-weight:700;font-size:13px;letter-spacing:.05em;text-transform:uppercase;padding:14px 30px;border-radius:40px;text-decoration:none;margin-bottom:34px}" +
    "#nalo-landing .nl-ig .reel{display:flex;gap:18px;overflow-x:auto;scrollbar-width:none;padding:4px;justify-content:flex-start}" +
    "#nalo-landing .nl-ig .reel::-webkit-scrollbar{display:none}" +
    "#nalo-landing .nl-ig video{flex:0 0 220px;aspect-ratio:9/16;object-fit:cover;border-radius:14px;background:#000;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.12)}" +
    // gallery
    "#nalo-landing .nl-gl{display:grid;grid-template-columns:1fr 1.35fr;gap:44px;align-items:center;max-width:1120px;margin:0 auto}" +
    "#nalo-landing .nl-gl-left{text-align:left}" +
    "#nalo-landing .nl-gl-left h3{font-size:28px;font-weight:800;line-height:1.15;margin:0 0 6px}" +
    "#nalo-landing .nl-gl-left .pct{display:block;font-size:80px;font-weight:800;color:#111;line-height:1;margin:6px 0 4px}" +
    "#nalo-landing .nl-gl-left .pct-txt{color:#555;font-size:16px;margin:0 0 20px}" +
    "#nalo-landing .nl-gl-left hr{border:0;border-top:1px solid #e5e5e5;margin:0 0 16px}" +
    "#nalo-landing .nl-gl-left .note{color:#999;font-size:12.5px;line-height:1.55;margin:0 0 24px}" +
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
    "#nalo-landing .nl-cmp{max-width:880px;margin:0 auto;overflow-x:auto}" +
    "#nalo-landing .nl-cmp table{width:100%;border-collapse:collapse;min-width:620px}" +
    "#nalo-landing .nl-cmp th,#nalo-landing .nl-cmp td{padding:13px 8px;text-align:center;border-bottom:1px solid #eee;font-size:13px}" +
    "#nalo-landing .nl-cmp td:first-child,#nalo-landing .nl-cmp th:first-child{text-align:left;font-weight:600}" +
    "#nalo-landing .nl-cmp th.brand{background:var(--v);color:#fff;border-radius:12px 12px 0 0;font-weight:700}" +
    "#nalo-landing .nl-cmp td.brand{background:rgba(82,0,255,.06)}" +
    "#nalo-landing .nl-cmp .yes{color:var(--v);font-weight:800;font-size:16px}" +
    "#nalo-landing .nl-cmp .brand .yes{color:var(--v)}" +
    "#nalo-landing .nl-cmp .no{color:#d33;font-size:15px}" +
    // techsplit
    "#nalo-landing .nl-ts{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;max-width:1100px;margin:0 auto}" +
    "#nalo-landing .nl-ts-media{aspect-ratio:4/5;border-radius:18px;overflow:hidden;background:#f2f2f4}" +
    "#nalo-landing .nl-ts-media img{width:100%;height:100%;object-fit:cover}" +
    "#nalo-landing .nl-ts h2{text-align:left;font-size:30px;font-weight:800;margin:0 0 22px}" +
    "#nalo-landing .nl-ts details{border-bottom:1px solid #eee}" +
    "#nalo-landing .nl-ts summary{list-style:none;cursor:pointer;padding:14px 0;font-weight:600;font-size:15px;display:flex;align-items:center;gap:10px}" +
    "#nalo-landing .nl-ts summary::-webkit-details-marker{display:none}" +
    "#nalo-landing .nl-ts summary .ic{width:26px;height:26px;flex:0 0 auto}" +
    "#nalo-landing .nl-ts summary .ic svg{width:26px;height:26px;fill:var(--v)}" +
    "#nalo-landing .nl-ts summary .t{flex:1}" +
    "#nalo-landing .nl-ts summary::after{content:'+';color:var(--v);font-size:20px}" +
    "#nalo-landing .nl-ts details[open] summary::after{content:'\\2013'}" +
    "#nalo-landing .nl-ts p{margin:0 0 14px 36px;font-size:13.5px;line-height:1.55;color:#666}" +
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
    "@media(max-width:768px){#nalo-landing .nl-ts,#nalo-landing .nl-gl,#nalo-landing .nl-stats,#nalo-landing .nl-feats{grid-template-columns:1fr}#nalo-landing .nl-ts-media{max-width:360px;margin:0 auto}#nalo-landing .nl-h{font-size:25px}#nalo-landing .nl-ts h2{text-align:center;font-size:24px}" +
    "#nalo-landing .nl-gl-right{order:1;grid-template-columns:1fr 1fr;gap:10px}#nalo-landing .nl-gl-left{order:2;text-align:left}#nalo-landing .nl-gl-left .buy{width:100%}#nalo-landing .nl-gl-thumbs{grid-column:1/-1;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:8px}#nalo-landing .nl-gl-thumbs button{flex:0 0 auto;width:74px;height:48px}#nalo-landing .nl-gl-left .pct{font-size:64px}#nalo-landing .nl-gl-left h3{font-size:24px}}";
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
      var reel = sec.videos.map(function (k) {
        return '<video muted loop playsinline preload="none" poster="' + B + 'videos/' + k + '.jpg"><source src="' + B + 'videos/' + k + '.mp4" type="video/mp4"></video>';
      }).join("");
      return '<section class="nl-sec nl-ig"><h2 class="nl-h">' + esc(sec.title) + '</h2><p class="sub">' + esc(sec.subtitle) +
        '</p><a class="btn" href="' + sec.link + '" target="_blank" rel="noopener">Ver en Instagram</a>' +
        '<div class="reel" data-reel="' + idx + '">' + reel + '</div></section>';
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
            '<figure><img class="ga" src="' + sec.pairs[0][0] + '" alt="Antes"><span class="pill dark">Antes</span></figure>' +
            '<figure><img class="gd" src="' + sec.pairs[0][1] + '" alt="Después"><span class="pill vio">Después</span></figure>' +
            '<div class="nl-gl-thumbs">' + thumbs + '</div>' +
          '</div>' +
        '</div></section>';
    }
    if (t === "compare") {
      var head = '<tr><th></th>' + sec.cols.map(function (c, i) { return '<th class="' + (i === 0 ? "brand" : "") + '">' + esc(c) + '</th>'; }).join("") + '</tr>';
      var body = sec.rows.map(function (r) {
        var cells = r.slice(1).map(function (v, i) { return '<td class="' + (i === 0 ? "brand " : "") + '">' + (v ? '<span class="yes">✓</span>' : '<span class="no">✕</span>') + '</td>'; }).join("");
        return '<tr><td>' + esc(r[0]) + '</td>' + cells + '</tr>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-cmp"><table>' + head + body + '</table></div></section>';
    }
    if (t === "techsplit") {
      var acc = sec.items.map(function (i) {
        return '<details><summary><span class="ic">' + CHECK + '</span><span class="t">' + esc(i[0]) + '</span></summary><p>' + esc(i[1]) + '</p></details>';
      }).join("");
      var media = sec.media ? '<div class="nl-ts-media"><img src="' + sec.media + '" alt=""></div>' : '<div class="nl-ts-media"></div>';
      return '<section class="nl-sec"><div class="nl-ts">' + media + '<div><h2>' + esc(sec.title) + '</h2>' + acc + '</div></div></section>';
    }
    if (t === "stats") {
      var cards = sec.items.map(function (i) {
        var p = i[0].replace("%", "");
        return '<div class="nl-stat"><div class="ring" style="--p:' + (p * 3.6) + 'deg"><i>' + esc(i[0]) + '</i></div><p>' + esc(i[1]) + '</p></div>';
      }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-stats">' + cards + '</div><p class="nl-note">' + esc(sec.note) + '</p></section>';
    }
    if (t === "features") {
      var f = sec.items.map(function (i) { return '<div class="nl-feat"><b>' + esc(i[0]) + '</b><p>' + esc(i[1]) + '</p></div>'; }).join("");
      return '<section class="nl-sec"><h2 class="nl-h">' + esc(sec.title) + '</h2><div class="nl-feats">' + f + '</div></section>';
    }
    return "";
  }

  mount.innerHTML = secs.map(render).join("");

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

  // reels de instagram: click reproduce/pausa
  mount.querySelectorAll(".nl-ig video").forEach(function (v) {
    v.addEventListener("click", function () { if (v.paused) v.play(); else v.pause(); });
  });
})();
