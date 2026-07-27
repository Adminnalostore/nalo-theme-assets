/* Nalo · Tecnología Aplicada · sección interactiva servida desde la VM.
   Se carga en el theme con:
     <div id="nalo-tecnologia"></div>
     <script src="https://163.176.147.46.nip.io/theme-assets/tech.js"></script>
   Fuente de contenido: nalostore.com. Editar acá y re-deploy (deploy-assets.sh). */
(function () {
  var mount = document.getElementById("nalo-tecnologia");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var ITEMS = [
    ["Postura y silueta",
      "Doble capa de compresión que reduce contorno y alinea la espalda. Invisible bajo cualquier prenda.",
      "https://cdn.shopify.com/s/files/1/0958/2647/7374/files/5_a9a19e1f-8b72-4e8f-ada3-54ca1495fef1.png?v=1771263126"],
    ["Versatilidad diaria",
      "La misma tecnología reductora en formato remera. Modeladora, antitranspirante y lista para usar todo el día.",
      "https://cdn.shopify.com/s/files/1/0958/2647/7374/files/5_9419ac64-1722-4b90-b164-5bdb5b64f04d.png?v=1774007377"],
    ["Estilo impecable",
      "Repele café, vino y agua. No se arruga, no necesita plancha. Tu look intacto siempre.",
      "https://cdn.shopify.com/s/files/1/0958/2647/7374/files/chatgpt-image-dec-5-2025-02_55_56-am-00551d85b26409df8e17649141847215-640-0_1.webp?v=1778503067"],
    ["Confort íntimo",
      "Fibra de bambú con ventilación 360°. Antibacteriana, hipoalergénica y 83% más duradera que el algodón.",
      "https://cdn.shopify.com/s/files/1/0958/2647/7374/files/Disenosintitulo-2026-04-30T122845.378.png?v=1777562991"],
    ["Fuerza interior",
      "Magnetismo natural de hematita en tu muñeca. Potencia enfoque, energía y presencia masculina.",
      "https://cdn.shopify.com/s/files/1/0958/2647/7374/files/HemiosBracelets7.webp?v=1771016459"]
  ];

  var CSS = "" +
    ".nalo-tech{max-width:1400px;margin:0 auto;padding:56px 24px}" +
    ".nalo-tech h2{text-align:center;font-weight:700;letter-spacing:.04rem;font-size:clamp(24px,3vw,40px);margin:0 0 40px}" +
    ".nalo-tech-wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}" +
    ".nalo-tech-list{display:flex;flex-direction:column;gap:8px}" +
    ".nalo-tech-item{appearance:none;background:none;border:0;border-left:2px solid #e5e5e5;text-align:left;padding:14px 0 14px 20px;cursor:pointer;transition:all .2s;font-family:inherit}" +
    ".nalo-tech-item .n{display:block;font-weight:700;font-size:clamp(20px,2.2vw,30px);color:#c8c8c8;transition:color .2s;letter-spacing:.02rem}" +
    ".nalo-tech-item .d{display:none;margin-top:10px;color:#333;font-size:15px;line-height:1.5;max-width:46ch}" +
    ".nalo-tech-item.on{border-left-color:#5200ff}" +
    ".nalo-tech-item.on .n{color:#111}" +
    ".nalo-tech-item.on .d{display:block}" +
    ".nalo-tech-media{position:relative;aspect-ratio:1/1;border-radius:16px;overflow:hidden;background:#f3f3f3}" +
    ".nalo-tech-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .35s}" +
    ".nalo-tech-media img.on{opacity:1}" +
    "@media(max-width:768px){.nalo-tech-wrap{grid-template-columns:1fr;gap:24px}.nalo-tech-media{order:-1}}";

  var style = document.createElement("style");
  style.textContent = CSS;
  document.head.appendChild(style);

  var list = "", media = "";
  ITEMS.forEach(function (it, i) {
    var on = i === 0 ? " on" : "";
    list += '<button class="nalo-tech-item' + on + '" data-i="' + i + '">' +
      '<span class="n"></span><span class="d"></span></button>';
    media += '<img class="nalo-tech-img' + on + '" data-i="' + i + '" loading="lazy">';
  });
  mount.innerHTML =
    '<div class="nalo-tech"><h2>Tecnología Aplicada</h2>' +
    '<div class="nalo-tech-wrap"><div class="nalo-tech-list">' + list +
    '</div><div class="nalo-tech-media">' + media + '</div></div></div>';

  // Rellenar texto/imgs por DOM (evita inyectar HTML de las descripciones)
  var btns = mount.querySelectorAll(".nalo-tech-item");
  var imgs = mount.querySelectorAll(".nalo-tech-media img");
  ITEMS.forEach(function (it, i) {
    btns[i].querySelector(".n").textContent = it[0];
    btns[i].querySelector(".d").textContent = it[1];
    imgs[i].src = it[2];
    imgs[i].alt = it[0];
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
