/* Nalo · "Confiado por los argentinos" · carrusel de videos shoppable.
   Engancha con: <div id="nalo-videos"></div>
   <script src="https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/videos.js"></script>
   Videos + posters servidos por jsDelivr (videos/<key>.mp4 / .jpg). Todos -> Musculosa. */
(function () {
  var mount = document.getElementById("nalo-videos");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";

  var CDN = "https://cdn.jsdelivr.net/gh/Adminnalostore/nalo-theme-assets@main/videos/";
  var PROD_URL = "https://tiendadeadmin14.mitiendanube.com/productos/musculosa-reductora-2-0-nalo/";
  var PROD = { name: "Musculosa Reductora", promo: "$59.900", old: "$119.800" };
  var VIDS = ["brandon", "juan", "fabri", "bigari"];

  var CSS = "" +
    "#nalo-videos .nv{max-width:1400px;margin:0 auto;padding:56px 16px}" +
    "#nalo-videos h2{text-align:center;font-weight:700;letter-spacing:.03rem;font-size:clamp(22px,2.8vw,36px);margin:0 0 32px}" +
    "#nalo-videos h2 .v{color:#5200ff}" +
    "#nalo-videos .nv-track{display:flex;gap:20px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 4px 16px;scrollbar-width:thin}" +
    "#nalo-videos .nv-item{flex:0 0 auto;width:270px;scroll-snap-align:center}" +
    "#nalo-videos .nv-vid{position:relative;aspect-ratio:9/16;border-radius:14px;overflow:hidden;background:#000;cursor:pointer}" +
    "#nalo-videos .nv-vid video{width:100%;height:100%;object-fit:cover;display:block}" +
    "#nalo-videos .nv-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.15);transition:.2s}" +
    "#nalo-videos .nv-play svg{width:54px;height:54px;filter:drop-shadow(0 2px 6px rgba(0,0,0,.4))}" +
    "#nalo-videos .nv-vid.playing .nv-play{opacity:0;pointer-events:none}" +
    "#nalo-videos .nv-card{display:flex;align-items:center;gap:12px;margin-top:12px;padding:10px 12px;border:1px solid #eee;border-radius:12px;text-decoration:none;color:inherit;box-shadow:0 0 1rem rgba(0,0,0,.05)}" +
    "#nalo-videos .nv-card .nm{flex:1}" +
    "#nalo-videos .nv-card .nm b{display:block;font-size:14px}" +
    "#nalo-videos .nv-card .nm .pr{font-size:13px}" +
    "#nalo-videos .nv-card .nm .promo{font-weight:700;color:#111}" +
    "#nalo-videos .nv-card .nm .old{color:#999;text-decoration:line-through;margin-left:5px;font-size:12px}" +
    "#nalo-videos .nv-card .add{flex:0 0 auto;width:38px;height:38px;border-radius:50%;background:#5200ff;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:600}" +
    "@media(max-width:768px){#nalo-videos .nv-item{width:230px}}";
  var st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);

  var PLAY = '<div class="nv-play"><svg viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z"/></svg></div>';
  var items = VIDS.map(function (k) {
    return '<div class="nv-item">' +
      '<div class="nv-vid" data-k="' + k + '">' +
        '<video preload="none" muted loop playsinline poster="' + CDN + k + '.jpg">' +
          '<source src="' + CDN + k + '.mp4" type="video/mp4"></video>' + PLAY +
      '</div>' +
      '<a class="nv-card" href="' + PROD_URL + '"><div class="nm"><b>' + PROD.name + '</b>' +
        '<span class="pr"><span class="promo">' + PROD.promo + '</span><span class="old">' + PROD.old + '</span></span></div>' +
        '<span class="add">+</span></a>' +
    '</div>';
  }).join("");

  mount.innerHTML =
    '<div class="nv"><h2>Confiado por los <span class="v">argentinos</span></h2>' +
    '<div class="nv-track">' + items + '</div></div>';

  mount.querySelectorAll(".nv-vid").forEach(function (box) {
    var v = box.querySelector("video");
    box.addEventListener("click", function () {
      if (v.paused) {
        mount.querySelectorAll(".nv-vid video").forEach(function (o) { if (o !== v) { o.pause(); o.parentElement.classList.remove("playing"); } });
        v.play(); box.classList.add("playing");
      } else { v.pause(); box.classList.remove("playing"); }
    });
  });
})();
