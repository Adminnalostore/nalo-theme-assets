/* Nalo · "Ingeniería inteligente para el hombre moderno" · réplica de Shopify.
   Fondo negro, foto a la izquierda, 3 columnas con íconos violetas + botón "Potenciá tu día".
   Engancha: <div id="nalo-ingenieria"></div><script src="...ingenieria.js"></script>
   NOTA: la foto (ing-foto.webp) es placeholder — la exacta de esa sección no está en el
   código de Shopify. Reemplazar el archivo si Ignacio pasa la original. */
(function () {
  var mount = document.getElementById("nalo-ingenieria");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var A = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/ing/";
  var COLS = [
    ["icon-textil.png", "Ingeniería Textil", "Fórmulas y herramientas diseñadas con precisión para un calce discreto, efectivo y funcional."],
    ["icon-rendimiento.png", "Rendimiento Diario", "Calce discreto y cómodo que acompaña tus movimientos, potenciando tu figura y confianza."],
    ["icon-funcionalidad.png", "Funcionalidad", "Soluciones funcionales invisibles que mejoran tu bienestar y presencia sin esfuerzo garantizado."]
  ];

  var CSS = "" +
    "#nalo-ingenieria .ni{background:#000;color:#fff;padding:64px clamp(16px,4vw,56px)}" +
    "#nalo-ingenieria .ni-in{max-width:1300px;margin:0 auto;display:grid;grid-template-columns:.85fr 1.15fr;gap:48px;align-items:center}" +
    "#nalo-ingenieria .ni-foto{aspect-ratio:4/5;border-radius:18px;overflow:hidden;background:#222}" +
    "#nalo-ingenieria .ni-foto img{width:100%;height:100%;object-fit:cover}" +
    "#nalo-ingenieria .ni-h{font:800 clamp(22px,2.4vw,34px)/1.15 Poppins,sans-serif;letter-spacing:.01em;margin:0 0 36px;max-width:20ch}" +
    "#nalo-ingenieria .ni-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-bottom:36px}" +
    "#nalo-ingenieria .ni-col img{width:44px;height:44px;object-fit:contain;margin-bottom:12px}" +
    "#nalo-ingenieria .ni-col b{display:block;font:700 16px/1.2 Poppins,sans-serif;margin-bottom:8px}" +
    "#nalo-ingenieria .ni-col p{font:400 13.5px/1.5 Poppins,sans-serif;color:#bdbdbd;margin:0}" +
    "#nalo-ingenieria .ni-cta{display:inline-block;background:#5200ff;color:#fff;font:700 14px/1 Poppins,sans-serif;letter-spacing:.05em;text-transform:uppercase;padding:16px 34px;border-radius:8px;text-decoration:none;transition:.15s}" +
    "#nalo-ingenieria .ni-cta:hover{filter:brightness(1.15)}" +
    "@media(max-width:768px){#nalo-ingenieria .ni-in{grid-template-columns:1fr;gap:28px}#nalo-ingenieria .ni-cols{grid-template-columns:1fr;gap:22px;text-align:center}#nalo-ingenieria .ni-h{text-align:center;max-width:none}#nalo-ingenieria .ni{text-align:center}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var cols = COLS.map(function () {
    return '<div class="ni-col"><img alt=""><b></b><p></p></div>';
  }).join("");
  mount.innerHTML =
    '<div class="ni"><div class="ni-in">' +
      '<div class="ni-foto"><img src="' + A + 'ing-foto.webp" alt=""></div>' +
      '<div class="ni-txt"><h2 class="ni-h">Ingeniería inteligente para el hombre moderno.</h2>' +
        '<div class="ni-cols">' + cols + '</div>' +
        '<a class="ni-cta" href="/productos">Potenciá tu día</a>' +
      '</div>' +
    '</div></div>';

  var els = mount.querySelectorAll(".ni-col");
  COLS.forEach(function (c, i) {
    els[i].querySelector("img").src = A + c[0];
    els[i].querySelector("b").textContent = c[1];
    els[i].querySelector("p").textContent = c[2];
  });
})();
