"""Genera tabs.js desde referencia/productos_tn.json (data real de Tiendanube).
Así las URLs, imágenes y precios salen de la fuente, no se tipean a mano.
Uso: python gen_tabs.py  (desde vm-theme-assets/)
"""
import json, os

REF = os.path.join(os.path.dirname(__file__), "..", "referencia", "productos_tn.json")
OUT = os.path.join(os.path.dirname(__file__), "tabs.js")

# Subtítulos reales extraídos de nalostore.com (los que aparecen bajo cada card).
# Si no hay subtítulo confiable, se deja vacío (no se inventa).
SUBS = {
    "Musculosa": "Reductor. Postural. Invisible",
    "Remera": "Modeladora. Antitranspiración. Versátil",
    "Camisa": "Impermeable. Antiarrugas. Cómoda",
    "Pulsera": "Magnética. Ancestral. Poderosa",
    "CoolBamboo": "",
    "Pantalón": "",
}
TABS = ["Bestsellers", "Reductoras", "Boxers", "Antiarrugas", "Accesorios", "Packs"]

# nombres cortos para la card (los de Tiendanube son muy largos)
SHORT = {
    "Musculosa": "Musculosa Reductora 2.0",
    "Remera": "Remera Reductora",
    "CoolBamboo": "CoolBamboo – Pack de 4 Boxers",
    "Camisa": "Camisa Impermeable Antiarrugas",
    "Pantalón": "Pantalón Antiarrugas",
    "Pulsera": "Pulsera de Hematita",
}

def keyof(name):
    for k in SUBS:
        if k.lower() in name.lower():
            return k
    return name

prods = json.load(open(REF, encoding="utf-8"))
P = []
for p in prods:
    k = keyof(p["name"])
    P.append([SHORT.get(k, p["name"]), SUBS.get(k, ""), p["price"], p["promo"] or "",
              p["img"], p["url"], p["cats"]])

JS = """/* Nalo · "Tecnología textil para tu mejor versión" · tabs de productos por colección.
   GENERADO por gen_tabs.py desde referencia/productos_tn.json. No editar a mano.
   Engancha con: <div id="nalo-tabs"></div><script src="...tabs.js"></script> */
(function () {
  var mount = document.getElementById("nalo-tabs");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";
  var P = __DATA__;
  var TABS = __TABS__;
  function money(v){return "$"+String(Math.round(parseFloat(v))).replace(/\\B(?=(\\d{3})+(?!\\d))/g,".");}
  function inTab(p,t){return t==="Bestsellers"?true:p[6].indexOf(t)!==-1;}
  var CSS=""+
    "#nalo-tabs .nt{max-width:1400px;margin:0 auto;padding:56px 24px}"+
    "#nalo-tabs h2{text-align:center;font-weight:700;letter-spacing:.03rem;font-size:clamp(22px,2.8vw,36px);margin:0 0 28px}"+
    "#nalo-tabs h2 .v{color:#5200ff}"+
    "#nalo-tabs .nt-tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:36px}"+
    "#nalo-tabs .nt-tab{appearance:none;border:1px solid #ddd;background:#fff;color:#111;font:600 13px/1 Poppins,sans-serif;letter-spacing:.04em;text-transform:uppercase;padding:11px 20px;border-radius:40px;cursor:pointer;transition:.15s}"+
    "#nalo-tabs .nt-tab.on{background:#5200ff;border-color:#5200ff;color:#fff}"+
    "#nalo-tabs .nt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}"+
    "#nalo-tabs .nt-card{display:block;text-decoration:none;color:inherit}"+
    "#nalo-tabs .nt-ph{position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#f3f3f3;box-shadow:0 0 1.5rem rgba(0,0,0,.08)}"+
    "#nalo-tabs .nt-ph img{width:100%;height:100%;object-fit:cover;transition:transform .4s}"+
    "#nalo-tabs .nt-card:hover .nt-ph img{transform:scale(1.04)}"+
    "#nalo-tabs .nt-name{font-weight:700;font-size:15px;margin:14px 0 4px;text-align:center}"+
    "#nalo-tabs .nt-sub{font-size:12.5px;color:#666;text-align:center;margin-bottom:8px}"+
    "#nalo-tabs .nt-price{text-align:center;font-size:15px}"+
    "#nalo-tabs .nt-promo{font-weight:700;color:#111}"+
    "#nalo-tabs .nt-old{color:#999;text-decoration:line-through;margin-left:6px;font-size:13px}"+
    "@media(max-width:900px){#nalo-tabs .nt-grid{display:flex;overflow-x:auto;gap:14px;scroll-snap-type:x mandatory;padding-bottom:12px;grid-template-columns:none}#nalo-tabs .nt-card{flex:0 0 46%;scroll-snap-align:center}}";
  var st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
  mount.innerHTML='<div class="nt"><h2>Tecnología textil para tu <span class="v">mejor versión.</span></h2><div class="nt-tabs"></div><div class="nt-grid"></div></div>';
  var tabsEl=mount.querySelector(".nt-tabs"),grid=mount.querySelector(".nt-grid");
  TABS.forEach(function(t,i){
    var b=document.createElement("button");
    b.className="nt-tab"+(i===0?" on":"");b.textContent=t;
    b.addEventListener("click",function(){tabsEl.querySelectorAll(".nt-tab").forEach(function(x){x.classList.remove("on");});b.classList.add("on");render(t);});
    tabsEl.appendChild(b);
  });
  function render(tab){
    grid.innerHTML="";
    P.filter(function(p){return inTab(p,tab);}).slice(0,4).forEach(function(p){
      var a=document.createElement("a");a.className="nt-card";a.href=p[5];
      var ph=p[3]?'<span class="nt-promo">'+money(p[3])+'</span><span class="nt-old">'+money(p[2])+'</span>':'<span class="nt-promo">'+money(p[2])+'</span>';
      a.innerHTML='<div class="nt-ph"><img loading="lazy" alt=""></div><div class="nt-name"></div><div class="nt-sub"></div><div class="nt-price">'+ph+'</div>';
      a.querySelector("img").src=p[4];
      a.querySelector(".nt-name").textContent=p[0];
      a.querySelector(".nt-sub").textContent=p[1];
      grid.appendChild(a);
    });
  }
  render("Bestsellers");
})();
"""
JS = JS.replace("__DATA__", json.dumps(P, ensure_ascii=False)).replace("__TABS__", json.dumps(TABS, ensure_ascii=False))
open(OUT, "w", encoding="utf-8").write(JS)
print("tabs.js generado:", len(JS), "chars,", len(P), "productos")
