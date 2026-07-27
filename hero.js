/* Nalo · HERO + franja de prensa · réplica del hero de nalostore.com.
   Contenedor redondeado con márgenes (no full-width). Texto blanco sobre la imagen.
   La franja de prensa (curva violeta) se superpone a la imagen sin hueco.
   Engancha: <div id="nalo-hero"></div><script src="...hero.js"></script> */
(function () {
  var mount = document.getElementById("nalo-hero");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var CDN = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/hero/";
  var LG = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/logos/";
  var PRENSA = [
    ["lanacion", "Innovación textil que redefine la comodidad del hombre moderno."],
    ["infobae", "La tendencia invisible que revoluciona cómo vestirse hoy."],
    ["clarin", "Inversión inteligente para el hombre que busca presencia."],
    ["health", "La marca argentina que une bienestar masculino con ingeniería textil de vanguardia."]
  ];

  var CSS = "" +
    "#nalo-hero{--v:#5200ff}" +
    "#nalo-hero .nh-wrap{padding:16px clamp(12px,3vw,40px) 0}" +
    "#nalo-hero .nh{position:relative;max-width:1360px;margin:0 auto;border-radius:24px;overflow:hidden}" +
    "#nalo-hero .nh-bg{display:block;width:100%;height:auto}" +
    "#nalo-hero .nh-bg.m{display:none}" +
    "#nalo-hero .nh::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.45) 0%,rgba(0,0,0,.15) 40%,transparent 65%);pointer-events:none}" +
    "#nalo-hero .nh-txt{position:absolute;left:0;bottom:9%;width:100%;padding:0 6%;box-sizing:border-box;z-index:2}" +
    "#nalo-hero .nh-badge{display:inline-block;background:var(--v);color:#fff;font:700 12px/1 Poppins,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:8px 16px;border-radius:40px;margin-bottom:18px}" +
    "#nalo-hero .nh-h1{font:800 clamp(30px,4.6vw,60px)/1.03 Poppins,sans-serif;letter-spacing:.01em;color:#fff;margin:0 0 26px;max-width:13ch;text-shadow:0 2px 16px rgba(0,0,0,.35)}" +
    "#nalo-hero .nh-h1 .v{color:#7b3bff}" +
    "#nalo-hero .nh-cta{display:inline-block;background:#fff;color:#111;font:700 14px/1 Poppins,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:17px 38px;border-radius:8px;text-decoration:none;transition:.15s}" +
    "#nalo-hero .nh-cta:hover{background:#111;color:#fff}" +
    "#nalo-hero .nh-prensa{position:relative;z-index:1;background:linear-gradient(90deg,#3a00b3 0%,var(--v) 100%);color:#fff;margin-top:-90px;padding:150px 6% 52px;-webkit-mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 400' preserveAspectRatio='none'><path d='M0,140 C350,40 1050,40 1400,140 L1400,400 L0,400 Z' fill='black'/></svg>\");mask-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 400' preserveAspectRatio='none'><path d='M0,140 C350,40 1050,40 1400,140 L1400,400 L0,400 Z' fill='black'/></svg>\");-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}" +
    "#nalo-hero .nh-prensa h3{text-align:center;font:700 clamp(15px,1.8vw,21px)/1.3 Poppins,sans-serif;margin:0 0 36px}" +
    "#nalo-hero .nh-quotes{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;max-width:1200px;margin:0 auto}" +
    "#nalo-hero .nh-q{text-align:center}" +
    "#nalo-hero .nh-q .lg{display:block;height:26px;width:auto;max-width:130px;object-fit:contain;margin:0 auto 14px}" +
    "#nalo-hero .nh-q .t{font:italic 400 13.5px/1.5 Poppins,sans-serif;opacity:.92}" +
    "@media(max-width:768px){" +
      "#nalo-hero .nh-wrap{padding:10px 12px 0}" +
      "#nalo-hero .nh-bg.d{display:none}#nalo-hero .nh-bg.m{display:block}" +
      "#nalo-hero .nh::after{background:linear-gradient(180deg,transparent 30%,rgba(0,0,0,.55) 100%)}" +
      "#nalo-hero .nh-txt{bottom:6%;padding:0 26px}" +
      "#nalo-hero .nh-h1{max-width:none;font-size:34px}" +
      "#nalo-hero .nh-prensa{margin-top:-70px;padding:110px 22px 44px}" +
      "#nalo-hero .nh-quotes{grid-template-columns:1fr 1fr;gap:22px}" +
    "}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var quotes = PRENSA.map(function () { return '<div class="nh-q"><img class="lg" alt=""><span class="t"></span></div>'; }).join("");
  mount.innerHTML =
    '<div class="nh-wrap"><div class="nh">' +
      '<img class="nh-bg d" src="' + CDN + 'hero-desktop.webp" alt="">' +
      '<img class="nh-bg m" src="' + CDN + 'hero-mobile.webp" alt="">' +
      '<div class="nh-txt">' +
        '<span class="nh-badge">Envío gratis a todo el país</span>' +
        '<h1 class="nh-h1">Diseño Inteligente. <span class="v">Confianza Total.</span></h1>' +
        '<a class="nh-cta" href="/productos">Comprar ahora</a>' +
      '</div>' +
    '</div></div>' +
    '<div class="nh-prensa"><h3>Avalados por los medios más importantes del país.</h3>' +
      '<div class="nh-quotes">' + quotes + '</div></div>';

  var qs = mount.querySelectorAll(".nh-q");
  PRENSA.forEach(function (p, i) {
    qs[i].querySelector(".lg").src = LG + p[0] + ".png";
    qs[i].querySelector(".t").textContent = "“" + p[1] + "”";
  });
})();
