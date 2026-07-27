/* Nalo · Tecnología Aplicada · interactiva (click en título -> cambia foto/desc).
   Título como subtítulo chico (estilo Shopify). Fotos reales de Shopify por título.
   Engancha con: <div id="nalo-tecnologia"></div><script src="...tech.js"></script> */
(function () {
  var mount = document.getElementById("nalo-tecnologia");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var S = document.currentScript || document.querySelector('script[src*="tech.js"]');
  var IMG = S.src.replace(/tech\.js.*$/, "") + "tech/";
  var ITEMS = [
    ["Postura y silueta", "Doble capa de compresión que reduce contorno y alinea la espalda. Invisible bajo cualquier prenda.", IMG + "postura.webp"],
    ["Versatilidad diaria", "La misma tecnología reductora en formato remera. Modeladora, antitranspirante y lista para usar todo el día.", IMG + "versatilidad.webp"],
    ["Estilo impecable", "Repele café, vino y agua. No se arruga, no necesita plancha. Tu look intacto siempre.", IMG + "estilo.webp"],
    ["Confort íntimo", "Fibra de bambú con ventilación 360°. Antibacteriana, hipoalergénica y 83% más duradera que el algodón.", IMG + "confort.webp"],
    ["Fuerza interior", "Magnetismo natural de hematita en tu muñeca. Potencia enfoque, energía y presencia masculina.", IMG + "fuerza.webp"]
  ];

  var CSS = "" +
    "#nalo-tecnologia .nt{max-width:1200px;margin:0 auto;padding:64px 24px}" +
    "#nalo-tecnologia .nt-sub{text-align:left;font:600 14px/1 Poppins,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#999;margin:0 0 20px}" +
    "#nalo-tecnologia .nt-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:start}" +
    "#nalo-tecnologia .nt-list{display:flex;flex-direction:column;gap:0}" +
    "#nalo-tecnologia .nt-item{appearance:none;background:none;border:0;text-align:left;padding:6px 0;cursor:pointer;font-family:inherit}" +
    "#nalo-tecnologia .nt-item .n{display:block;font-weight:700;font-size:clamp(24px,2.8vw,38px);color:#cfcfcf;transition:color .2s;letter-spacing:.01em}" +
    "#nalo-tecnologia .nt-item .d{display:none;margin-top:10px;color:#444;font-size:15px;line-height:1.55;max-width:44ch}" +
    "#nalo-tecnologia .nt-item.on .n{color:#111}" +
    "#nalo-tecnologia .nt-item.on .d{display:block}" +
    "#nalo-tecnologia .nt-media{position:relative;aspect-ratio:4/5;border-radius:18px;overflow:hidden;background:#f3f3f3}" +
    "#nalo-tecnologia .nt-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s}" +
    "#nalo-tecnologia .nt-media img.on{opacity:1}" +
    "@media(max-width:768px){#nalo-tecnologia .nt-wrap{grid-template-columns:1fr;gap:28px}#nalo-tecnologia .nt-media{order:2}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var list = "", media = "";
  ITEMS.forEach(function (it, i) {
    var on = i === 0 ? " on" : "";
    list += '<button class="nt-item' + on + '" data-i="' + i + '"><span class="n"></span><span class="d"></span></button>';
    media += '<img class="nt-img' + on + '" data-i="' + i + '" loading="lazy">';
  });
  mount.innerHTML =
    '<div class="nt"><p class="nt-sub">Tecnología Aplicada</p>' +
    '<div class="nt-wrap"><div class="nt-list">' + list + '</div>' +
    '<div class="nt-media">' + media + '</div></div></div>';

  var btns = mount.querySelectorAll(".nt-item");
  var imgs = mount.querySelectorAll(".nt-media img");
  ITEMS.forEach(function (it, i) {
    btns[i].querySelector(".n").textContent = it[0];
    btns[i].querySelector(".d").textContent = it[1];
    imgs[i].src = it[2]; imgs[i].alt = it[0];
  });
  btns.forEach(function (b) {
    b.addEventListener("click", function () {
      var i = b.getAttribute("data-i");
      btns.forEach(function (x) { x.classList.remove("on"); });
      imgs.forEach(function (x) { x.classList.toggle("on", x.getAttribute("data-i") === i); });
      b.classList.add("on");
    });
  });
})();
