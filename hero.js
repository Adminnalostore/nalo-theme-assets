/* Nalo · HERO + franja de prensa · réplica del hero de nalostore.com.
   Engancha con: <div id="nalo-hero"></div>
   <script src="https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/hero.js"></script>
   Imágenes de fondo servidas por jsDelivr (hero/hero-desktop.webp, hero-mobile.webp). */
(function () {
  var mount = document.getElementById("nalo-hero");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var CDN = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/hero/";
  var PRENSA = [
    ["La Nación", "Innovación textil que redefine la comodidad del hombre moderno."],
    ["Infobae", "La tendencia invisible que revoluciona cómo vestirse hoy."],
    ["Clarín", "Inversión inteligente para el hombre que busca presencia."],
    ["Health", "La marca argentina que une bienestar masculino con ingeniería textil de vanguardia."]
  ];

  var CSS = "" +
    "#nalo-hero{--v:#5200ff}" +
    "#nalo-hero .nh{position:relative;width:100%;overflow:hidden}" +
    "#nalo-hero .nh-bg{display:block;width:100%;height:auto}" +
    "#nalo-hero .nh-bg.d{display:block}#nalo-hero .nh-bg.m{display:none}" +
    "#nalo-hero .nh-txt{position:absolute;left:0;bottom:8%;width:100%;padding:0 6%;box-sizing:border-box}" +
    "#nalo-hero .nh-badge{display:inline-block;background:var(--v);color:#fff;font:700 12px/1 Poppins,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:8px 16px;border-radius:40px;margin-bottom:18px}" +
    "#nalo-hero .nh-h1{font:800 clamp(30px,5vw,64px)/1.02 Poppins,sans-serif;letter-spacing:.01em;color:#111;margin:0 0 26px;max-width:14ch}" +
    "#nalo-hero .nh-h1 .v{color:var(--v)}" +
    "#nalo-hero .nh-cta{display:inline-block;background:#fff;color:#111;font:700 14px/1 Poppins,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:17px 38px;border-radius:8px;text-decoration:none;transition:.15s}" +
    "#nalo-hero .nh-cta:hover{background:#111;color:#fff}" +
    "#nalo-hero .nh-prensa{position:relative;background:linear-gradient(90deg,#3a00b3 0%,var(--v) 100%);color:#fff;padding:64px 6% 56px;margin-top:-1px;-webkit-mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 320' preserveAspectRatio='none'><path d='M0,90 C350,10 1050,10 1400,90 L1400,320 L0,320 Z' fill='black'/></svg>\");mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 320' preserveAspectRatio='none'><path d='M0,90 C350,10 1050,10 1400,90 L1400,320 L0,320 Z' fill='black'/></svg>\");-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}" +
    "#nalo-hero .nh-prensa h3{text-align:center;font:700 clamp(16px,2vw,22px)/1.3 Poppins,sans-serif;margin:24px 0 40px}" +
    "#nalo-hero .nh-quotes{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;max-width:1300px;margin:0 auto}" +
    "#nalo-hero .nh-q{text-align:center}" +
    "#nalo-hero .nh-q .m{display:block;font:800 15px/1 Poppins,sans-serif;letter-spacing:.05em;text-transform:uppercase;margin-bottom:12px;opacity:.95}" +
    "#nalo-hero .nh-q .t{font:italic 400 14px/1.5 Poppins,sans-serif;opacity:.92}" +
    "@media(max-width:768px){" +
      "#nalo-hero .nh-bg.d{display:none}#nalo-hero .nh-bg.m{display:block}" +
      "#nalo-hero .nh-txt{bottom:5%;text-align:center;padding:0 22px}" +
      "#nalo-hero .nh-h1{max-width:none}" +
      "#nalo-hero .nh-quotes{grid-template-columns:1fr 1fr;gap:24px}" +
    "}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var quotes = PRENSA.map(function (p) {
    return '<div class="nh-q"><span class="m"></span><span class="t"></span></div>';
  }).join("");

  mount.innerHTML =
    '<div class="nh">' +
      '<img class="nh-bg d" src="' + CDN + 'hero-desktop.webp" alt="">' +
      '<img class="nh-bg m" src="' + CDN + 'hero-mobile.webp" alt="">' +
      '<div class="nh-txt">' +
        '<span class="nh-badge">Envío gratis a todo el país</span>' +
        '<h1 class="nh-h1">Diseño Inteligente. <span class="v">Confianza Total.</span></h1>' +
        '<a class="nh-cta" href="/productos">Comprar ahora</a>' +
      '</div>' +
    '</div>' +
    '<div class="nh-prensa"><h3>Avalados por los medios más importantes del país.</h3>' +
      '<div class="nh-quotes">' + quotes + '</div></div>';

  // rellenar prensa por DOM (sin inyectar HTML del contenido)
  var qs = mount.querySelectorAll(".nh-q");
  PRENSA.forEach(function (p, i) {
    qs[i].querySelector(".m").textContent = p[0];
    qs[i].querySelector(".t").textContent = "“" + p[1] + "”";
  });
})();
