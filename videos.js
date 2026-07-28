/* Nalo · "Confiado por los argentinos" · carrusel de videos shoppable INFINITO.
   Loop en ambos sentidos (al llegar al último, reaparece el primero). El video
   centrado se destaca (color + agrandado + reproduce muted); los demás grises.
   Card con thumbnail del producto. Todos -> Musculosa.
   Engancha: <div id="nalo-videos"></div><script src="...videos.js"></script> */
(function () {
  var mount = document.getElementById("nalo-videos");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";
  var bare = mount.getAttribute("data-bare") === "1"; // solo videos, sin título ni cards

  var S = document.currentScript || document.querySelector('script[src*="videos.js"]');
  var BASE = S.src.replace(/videos\.js.*$/, "");
  var CDN = BASE + "videos/";
  var PROD_URL = "https://tiendadeadmin14.mitiendanube.com/productos/musculosa-reductora-2-0-nalo/";
  var PROD = {
    name: "Musculosa Reductora", promo: "$59.900", old: "$119.800",
    thumb: BASE + "tech/postura.webp"
  };
  var VIDS = ["brandon", "juan", "fabri", "bigari"];
  var N = VIDS.length;
  var SEQ = VIDS.concat(VIDS).concat(VIDS); // 3 copias: set central = [N, 2N)

  var CSS = "" +
    "#nalo-videos .nv{max-width:1240px;margin:0 auto;padding:44px 0 60px}" +
    "#nalo-videos[data-bare='1'] .nv{padding:22px 0 0}" +
    "#nalo-videos h2{text-align:center;font-weight:700;letter-spacing:.02rem;font-size:32px;margin:0 0 18px}" +
    "#nalo-videos h2 .v{color:#5200ff}" +
    "#nalo-videos .nv-track{display:flex;gap:26px;overflow-x:auto;padding:16px calc(50% - 150px);scrollbar-width:none}" +
    "#nalo-videos .nv-track::-webkit-scrollbar{display:none}" +
    "#nalo-videos .nv-item{flex:0 0 300px;transition:transform .35s cubic-bezier(.2,.7,.2,1),filter .35s;filter:grayscale(.85) brightness(.9) opacity(.6);transform:scale(.9)}" +
    "#nalo-videos .nv-item.focus{filter:none;transform:scale(1.02)}" +
    "#nalo-videos .nv-vid{position:relative;aspect-ratio:9/16;border-radius:18px;overflow:hidden;background:#000;cursor:pointer;box-shadow:0 16px 40px rgba(0,0,0,.18)}" +
    "#nalo-videos .nv-vid video{width:100%;height:100%;object-fit:cover;display:block}" +
    "#nalo-videos .nv-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.1);transition:.2s}" +
    "#nalo-videos .nv-play svg{width:50px;height:50px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.4))}" +
    "#nalo-videos .nv-vid.on .nv-play{opacity:0;pointer-events:none}" +
    "#nalo-videos .nv-sound{position:absolute;top:12px;right:12px;width:40px;height:40px;border-radius:50%;border:0;background:rgba(0,0,0,.5);color:#fff;cursor:pointer;display:none;align-items:center;justify-content:center;z-index:4;padding:0}" +
    "#nalo-videos .nv-item.focus .nv-sound{display:flex}" +
    "#nalo-videos .nv-sound svg{width:20px;height:20px;fill:#fff}" +
    "#nalo-videos .nv-sound .s-on{display:none}" +
    "#nalo-videos .nv-sound.on .s-off{display:none}" +
    "#nalo-videos .nv-sound.on .s-on{display:block}" +
    "#nalo-videos .nv-card{display:flex;align-items:center;gap:11px;margin-top:14px;padding:9px 11px;border:1px solid #eee;border-radius:12px;text-decoration:none;color:inherit;box-shadow:0 4px 14px rgba(0,0,0,.06);background:#fff}" +
    "#nalo-videos .nv-card img{width:46px;height:56px;object-fit:cover;border-radius:8px;flex:0 0 auto}" +
    "#nalo-videos .nv-card .nm{flex:1;min-width:0}" +
    "#nalo-videos .nv-card .nm b{display:block;font-size:13.5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    "#nalo-videos .nv-card .promo{font-weight:700;color:#111;font-size:13px}" +
    "#nalo-videos .nv-card .old{color:#999;text-decoration:line-through;margin-left:5px;font-size:12px}" +
    "#nalo-videos .nv-card .add{flex:0 0 auto;width:36px;height:36px;border-radius:50%;background:#5200ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:21px}" +
    "#nalo-videos .nv-nav{display:flex;justify-content:center;gap:16px;margin-top:22px}" +
    "#nalo-videos .nv-nav button{width:44px;height:44px;border-radius:50%;border:1px solid #ddd;background:#fff;color:#111;font-size:20px;cursor:pointer;transition:.15s;display:flex;align-items:center;justify-content:center}" +
    "#nalo-videos .nv-nav button:hover{background:#5200ff;border-color:#5200ff;color:#fff}" +
    "@media(max-width:768px){#nalo-videos .nv-track{padding:16px calc(50% - 120px)}#nalo-videos .nv-item{flex:0 0 240px}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var PLAY = '<div class="nv-play"><svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></div>';
  var SOUND = '<button class="nv-sound" aria-label="Sonido">' +
    '<svg class="s-off" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.9 8.9 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>' +
    '<svg class="s-on" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>' +
    '</button>';
  function itemHTML(k) {
    var card = bare ? "" : '<a class="nv-card" href="' + PROD_URL + '"><img src="' + PROD.thumb + '" alt="">' +
      '<div class="nm"><b>' + PROD.name + '</b><span class="pr"><span class="promo">' + PROD.promo +
      '</span><span class="old">' + PROD.old + '</span></span></div><span class="add">+</span></a>';
    return '<div class="nv-item">' +
      '<div class="nv-vid" data-k="' + k + '"><video preload="none" muted loop playsinline poster="' + CDN + k + '.jpg">' +
        '<source src="' + CDN + k + '.mp4" type="video/mp4"></video>' + PLAY + SOUND + '</div>' + card +
    '</div>';
  }

  mount.innerHTML = '<div class="nv">' + (bare ? '' : '<h2>Confiado por los <span class="v">argentinos</span></h2>') +
    '<div class="nv-track">' + SEQ.map(itemHTML).join("") + '</div>' +
    '<div class="nv-nav"><button class="prev" aria-label="Anterior">‹</button><button class="next" aria-label="Siguiente">›</button></div></div>';

  var track = mount.querySelector(".nv-track");
  var itemEls = [].slice.call(mount.querySelectorAll(".nv-item"));
  var step = 0;          // ancho de un item incl. gap
  var current = -1;

  function measure() {
    if (itemEls.length > 1) step = itemEls[1].offsetLeft - itemEls[0].offsetLeft;
  }
  function centerIndex(i, smooth) {
    var it = itemEls[i];
    var target = it.offsetLeft - (track.clientWidth - it.offsetWidth) / 2;
    track.scrollTo({ left: target, behavior: smooth ? "smooth" : "auto" });
  }
  function nearestIndex() {
    var c = track.scrollLeft + track.clientWidth / 2;
    var best = 0, bestD = Infinity;
    itemEls.forEach(function (it, i) {
      var d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - c);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  }
  function focusOn(i) {
    if (i === current) return;
    current = i;
    itemEls.forEach(function (it, j) {
      var on = j === i;
      it.classList.toggle("focus", on);
      var v = it.querySelector("video"), vid = it.querySelector(".nv-vid");
      if (on) { v.play().catch(function () {}); vid.classList.add("on"); }
      else { v.pause(); vid.classList.remove("on"); }
    });
  }

  var raf, settle;
  track.addEventListener("scroll", function () {
    if (!raf) raf = requestAnimationFrame(function () { raf = null; focusOn(nearestIndex()); });
    clearTimeout(settle);
    settle = setTimeout(relocate, 120); // tras frenar, reposicionar al set central
  });

  // Loop infinito: mantener el centrado dentro del set central [N, 2N)
  function relocate() {
    var i = nearestIndex();
    if (i < N || i >= 2 * N) {
      var mid = N + (((i % N) + N) % N);
      var delta = (mid - i) * step;
      track.scrollLeft += delta;      // salto sin animación
      current = -1; focusOn(nearestIndex());
    }
  }

  mount.querySelector(".prev").addEventListener("click", function () { centerIndex(nearestIndex() - 1, true); });
  mount.querySelector(".next").addEventListener("click", function () { centerIndex(nearestIndex() + 1, true); });
  itemEls.forEach(function (it, i) {
    it.querySelector(".nv-vid").addEventListener("click", function () { centerIndex(i, true); });
    var snd = it.querySelector(".nv-sound"), vv = it.querySelector("video");
    snd.addEventListener("click", function (e) {
      e.stopPropagation();
      vv.muted = !vv.muted;
      snd.classList.toggle("on", !vv.muted);
    });
  });

  // arranque: centrar el 2do del set central
  function start() {
    measure();
    if (!step) { setTimeout(start, 80); return; }
    centerIndex(N + 1, false);
    focusOn(nearestIndex());
  }
  setTimeout(start, 80);
})();
