/* Nalo · "Confiado por los argentinos" · carrusel de videos shoppable.
   El video centrado se destaca (color + agrandado + reproduce muted); los demás se
   agrisan y pausan. Al deslizar, el que queda centrado se destaca automáticamente.
   Card con thumbnail del producto. Todos -> Musculosa.
   Engancha: <div id="nalo-videos"></div><script src="...videos.js"></script> */
(function () {
  var mount = document.getElementById("nalo-videos");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var CDN = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/videos/";
  var PROD_URL = "https://tiendadeadmin14.mitiendanube.com/productos/musculosa-reductora-2-0-nalo/";
  var PROD = {
    name: "Musculosa Reductora", promo: "$59.900", old: "$119.800",
    thumb: "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/tech/postura.webp"
  };
  var VIDS = ["brandon", "juan", "fabri", "bigari"];

  var CSS = "" +
    "#nalo-videos .nv{max-width:1240px;margin:0 auto;padding:44px 0 60px}" +
    "#nalo-videos h2{text-align:center;font-weight:700;letter-spacing:.02rem;font-size:32px;margin:0 0 18px}" +
    "#nalo-videos h2 .v{color:#5200ff}" +
    "#nalo-videos .nv-track{display:flex;gap:26px;overflow-x:auto;scroll-snap-type:x mandatory;padding:16px calc(50% - 150px);scroll-behavior:smooth;scrollbar-width:none}" +
    "#nalo-videos .nv-track::-webkit-scrollbar{display:none}" +
    "#nalo-videos .nv-item{flex:0 0 300px;scroll-snap-align:center;transition:transform .35s cubic-bezier(.2,.7,.2,1),filter .35s;filter:grayscale(.85) brightness(.9) opacity(.6);transform:scale(.9)}" +
    "#nalo-videos .nv-item.focus{filter:none;transform:scale(1.02)}" +
    "#nalo-videos .nv-vid{position:relative;aspect-ratio:9/16;border-radius:18px;overflow:hidden;background:#000;cursor:pointer;box-shadow:0 16px 40px rgba(0,0,0,.18)}" +
    "#nalo-videos .nv-vid video{width:100%;height:100%;object-fit:cover;display:block}" +
    "#nalo-videos .nv-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.1);transition:.2s}" +
    "#nalo-videos .nv-play svg{width:50px;height:50px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.4))}" +
    "#nalo-videos .nv-vid.on .nv-play{opacity:0;pointer-events:none}" +
    "#nalo-videos .nv-card{display:flex;align-items:center;gap:11px;margin-top:14px;padding:9px 11px;border:1px solid #eee;border-radius:12px;text-decoration:none;color:inherit;box-shadow:0 4px 14px rgba(0,0,0,.06);background:#fff}" +
    "#nalo-videos .nv-card img{width:46px;height:56px;object-fit:cover;border-radius:8px;flex:0 0 auto}" +
    "#nalo-videos .nv-card .nm{flex:1;min-width:0}" +
    "#nalo-videos .nv-card .nm b{display:block;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    "#nalo-videos .nv-card .promo{font-weight:700;color:#111;font-size:13px}" +
    "#nalo-videos .nv-card .old{color:#999;text-decoration:line-through;margin-left:5px;font-size:12px}" +
    "#nalo-videos .nv-card .add{flex:0 0 auto;width:36px;height:36px;border-radius:50%;background:#5200ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:21px}" +
    "#nalo-videos .nv-dots{display:flex;justify-content:center;gap:9px;margin-top:22px}" +
    "#nalo-videos .nv-dots button{width:8px;height:8px;border-radius:50%;border:0;background:#d5d5d5;cursor:pointer;padding:0;transition:.2s}" +
    "#nalo-videos .nv-dots button.on{background:#5200ff;width:22px;border-radius:5px}" +
    "@media(max-width:768px){#nalo-videos .nv-track{padding:22px calc(50% - 130px)}#nalo-videos .nv-item{flex:0 0 260px}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var PLAY = '<div class="nv-play"><svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></div>';
  var items = VIDS.map(function (k) {
    return '<div class="nv-item">' +
      '<div class="nv-vid" data-k="' + k + '"><video preload="metadata" muted loop playsinline poster="' + CDN + k + '.jpg">' +
        '<source src="' + CDN + k + '.mp4" type="video/mp4"></video>' + PLAY + '</div>' +
      '<a class="nv-card" href="' + PROD_URL + '"><img src="' + PROD.thumb + '" alt="">' +
        '<div class="nm"><b>' + PROD.name + '</b><span class="pr"><span class="promo">' + PROD.promo +
        '</span><span class="old">' + PROD.old + '</span></span></div><span class="add">+</span></a>' +
    '</div>';
  }).join("");
  var dots = VIDS.map(function (_, i) { return '<button data-i="' + i + '"' + (i === 1 ? ' class="on"' : '') + '></button>'; }).join("");

  mount.innerHTML = '<div class="nv"><h2>Confiado por los <span class="v">argentinos</span></h2>' +
    '<div class="nv-track">' + items + '</div><div class="nv-dots">' + dots + '</div></div>';

  var track = mount.querySelector(".nv-track");
  var itemEls = [].slice.call(mount.querySelectorAll(".nv-item"));
  var dotEls = [].slice.call(mount.querySelectorAll(".nv-dots button"));
  var current = -1;

  function focusCentered() {
    var c = track.getBoundingClientRect().left + track.clientWidth / 2;
    var best = 0, bestD = Infinity;
    itemEls.forEach(function (it, i) {
      var r = it.getBoundingClientRect();
      var d = Math.abs(r.left + r.width / 2 - c);
      if (d < bestD) { bestD = d; best = i; }
    });
    if (best === current) return;
    current = best;
    itemEls.forEach(function (it, i) {
      var on = i === best;
      it.classList.toggle("focus", on);
      var v = it.querySelector("video"), vid = it.querySelector(".nv-vid");
      if (on) { v.play().catch(function () {}); vid.classList.add("on"); }
      else { v.pause(); vid.classList.remove("on"); }
    });
    dotEls.forEach(function (d, i) { d.classList.toggle("on", i === best); });
  }

  var raf;
  track.addEventListener("scroll", function () {
    if (raf) return;
    raf = requestAnimationFrame(function () { raf = null; focusCentered(); });
  });
  itemEls.forEach(function (it, i) {
    it.querySelector(".nv-vid").addEventListener("click", function () {
      it.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  });
  dotEls.forEach(function (d, i) {
    d.addEventListener("click", function () { itemEls[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); });
  });
  // arranque: centrar el SEGUNDO video (evita el hueco a la izquierda) y destacarlo
  setTimeout(function () { itemEls[1].scrollIntoView({ inline: "center", block: "nearest" }); focusCentered(); }, 60);
})();
