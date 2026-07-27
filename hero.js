/* Nalo · HERO + prensa · réplica fiel de nalostore.com.
   La imagen y la franja de prensa forman UNA tarjeta redondeada (mismo ancho, con
   márgenes). La curva violeta se superpone ("come") la parte inferior de la foto.
   Texto a la izquierda, "Confianza Total." en violeta de marca. Mobile: prensa como
   carrusel (1 medio a la vez) con flechas, incrustado en la foto.
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
  var CURVE = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1400 400' preserveAspectRatio='none'><path d='M0,150 C350,40 1050,40 1400,150 L1400,400 L0,400 Z' fill='black'/></svg>\")";

  var CSS = "" +
    "#nalo-hero{--v:#5200ff}" +
    "#nalo-hero .nh-wrap{padding:16px clamp(12px,3vw,40px) 40px}" +
    "#nalo-hero .nh-card{position:relative;max-width:1360px;margin:0 auto;border-radius:26px;overflow:hidden}" +
    "#nalo-hero .nh-imgbox{position:relative}" +
    "#nalo-hero .nh-bg{display:block;width:100%;height:auto}" +
    "#nalo-hero .nh-bg.m{display:none}" +
    "#nalo-hero .nh-imgbox::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.5) 0%,rgba(0,0,0,.12) 45%,transparent 70%);pointer-events:none}" +
    "#nalo-hero .nh-txt{position:absolute;top:50%;transform:translateY(-58%);left:0;padding:0 clamp(24px,5%,80px);text-align:left;z-index:2}" +
    "#nalo-hero .nh-badge{display:inline-block;background:var(--v);color:#fff;font:700 12px/1 Poppins,sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:8px 16px;border-radius:40px;margin-bottom:20px}" +
    "#nalo-hero .nh-h1{font:800 clamp(30px,4.4vw,58px)/1.04 Poppins,sans-serif;letter-spacing:.005em;color:#fff;margin:0 0 28px;max-width:12ch;text-shadow:0 2px 18px rgba(0,0,0,.4)}" +
    "#nalo-hero .nh-h1 .v{color:var(--v)}" +
    "#nalo-hero .nh-cta{display:inline-block;background:#fff;color:#111;font:700 14px/1 Poppins,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:18px 40px;border-radius:40px;text-decoration:none;transition:.15s}" +
    "#nalo-hero .nh-cta:hover{background:#111;color:#fff}" +
    "#nalo-hero .nh-prensa{position:relative;z-index:3;margin-top:-110px;background:linear-gradient(100deg,#2e0090 0%,var(--v) 100%);color:#fff;padding:150px 6% 54px;-webkit-mask-image:" + CURVE + ";mask-image:" + CURVE + ";-webkit-mask-size:100% 100%;mask-size:100% 100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}" +
    "#nalo-hero .nh-prensa h3{text-align:center;font:700 clamp(16px,1.9vw,24px)/1.3 Poppins,sans-serif;margin:0 0 34px}" +
    "#nalo-hero .nh-quotes{display:grid;grid-template-columns:repeat(4,1fr);gap:34px;max-width:1180px;margin:0 auto}" +
    "#nalo-hero .nh-q{text-align:center}" +
    "#nalo-hero .nh-q .lg{display:block;height:24px;width:auto;max-width:120px;object-fit:contain;margin:0 auto 14px}" +
    "#nalo-hero .nh-q .t{font:italic 400 14px/1.5 Poppins,sans-serif;opacity:.95}" +
    "#nalo-hero .nh-arrows{display:none}" +
    // MOBILE
    "@media(max-width:768px){" +
      "#nalo-hero .nh-wrap{padding:8px 10px 28px}" +
      "#nalo-hero .nh-bg.d{display:none}#nalo-hero .nh-bg.m{display:block}" +
      "#nalo-hero .nh-imgbox::after{background:linear-gradient(180deg,rgba(0,0,0,.35) 0%,transparent 40%)}" +
      "#nalo-hero .nh-txt{top:26px;transform:none}" +
      "#nalo-hero .nh-h1{font-size:33px;max-width:11ch}" +
      "#nalo-hero .nh-cta{padding:15px 32px}" +
      "#nalo-hero .nh-prensa{margin-top:-150px;padding:120px 20px 34px}" +
      "#nalo-hero .nh-prensa h3{font-size:17px;margin-bottom:20px}" +
      "#nalo-hero .nh-quotes{display:block;overflow:hidden}" +
      "#nalo-hero .nh-q{display:none;padding:0 30px}" +
      "#nalo-hero .nh-q.on{display:block}" +
      "#nalo-hero .nh-q .lg{height:22px}" +
      "#nalo-hero .nh-arrows{display:flex;justify-content:center;gap:24px;margin-top:18px}" +
      "#nalo-hero .nh-arrows button{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.5);background:rgba(255,255,255,.12);color:#fff;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center}" +
    "}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var quotes = PRENSA.map(function (p, i) {
    return '<div class="nh-q' + (i === 0 ? ' on' : '') + '"><img class="lg" alt=""><span class="t"></span></div>';
  }).join("");

  mount.innerHTML =
    '<div class="nh-wrap"><div class="nh-card">' +
      '<div class="nh-imgbox">' +
        '<img class="nh-bg d" src="' + CDN + 'hero-desktop.webp" alt="">' +
        '<img class="nh-bg m" src="' + CDN + 'hero-mobile.webp" alt="">' +
        '<div class="nh-txt">' +
          '<span class="nh-badge">Envío gratis a todo el país</span>' +
          '<h1 class="nh-h1">Diseño Inteligente. <span class="v">Confianza Total.</span></h1>' +
          '<a class="nh-cta" href="/productos">Comprar ahora</a>' +
        '</div>' +
      '</div>' +
      '<div class="nh-prensa"><h3>Avalados por los medios más importantes del país.</h3>' +
        '<div class="nh-quotes">' + quotes + '</div>' +
        '<div class="nh-arrows"><button class="prev">‹</button><button class="next">›</button></div>' +
      '</div>' +
    '</div></div>';

  var qs = mount.querySelectorAll(".nh-q");
  PRENSA.forEach(function (p, i) {
    qs[i].querySelector(".lg").src = LG + p[0] + ".png";
    qs[i].querySelector(".t").textContent = "“" + p[1] + "”";
  });

  // carrusel mobile
  var idx = 0;
  function go(d) {
    qs[idx].classList.remove("on");
    idx = (idx + d + qs.length) % qs.length;
    qs[idx].classList.add("on");
  }
  var prev = mount.querySelector(".prev"), next = mount.querySelector(".next");
  if (prev) prev.addEventListener("click", function () { go(-1); });
  if (next) next.addEventListener("click", function () { go(1); });
})();
