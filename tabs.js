/* Nalo · "Tecnología textil para tu mejor versión" · tabs de productos por colección.
   GENERADO por gen_tabs.py desde referencia/productos_tn.json. No editar a mano.
   Engancha con: <div id="nalo-tabs"></div><script src="...tabs.js"></script> */
(function () {
  var mount = document.getElementById("nalo-tabs");
  if (!mount || mount.dataset.done) return;
  mount.dataset.done = "1";
  var P = [["Pulsera de Hematita", "Magnética. Ancestral. Poderosa", "69900.00", "44900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/hemiosbracelets7-71e8474faa43a89c5817851630871457-1024-1024.webp", "https://tiendadeadmin14.mitiendanube.com/productos/pulsera-nalo-de-hematita/", ["Accesorios"]], ["Musculosa Reductora 2.0", "Reductor. Postural. Invisible", "119800.00", "59900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/5_a9a19e1f-8b72-4e8f-ada3-54ca1495fef1-d8247656144acd1c2f17851632776457-1024-1024.png", "https://tiendadeadmin14.mitiendanube.com/productos/musculosa-reductora-2-0-nalo/", ["Reductoras"]], ["Remera Reductora", "Modeladora. Antitranspiración. Versátil", "65000.00", "49900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/5_9419ac64-1722-4b90-b164-5bdb5b64f04d-aa554bb09b2ea66d5b17851633251996-1024-1024.png", "https://tiendadeadmin14.mitiendanube.com/productos/remera-reductora-nalo/", ["Reductoras"]], ["CoolBamboo – Pack de 4 Boxers", "", "129800.00", "64900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/disenosintitulo-2026-04-30t122845-378-f3313d2edbaafdf9cc17851633518595-1024-1024.png", "https://tiendadeadmin14.mitiendanube.com/productos/coolbamboo-pack-de-4-boxers-de-tela-de-bambu/", ["Boxers", "Packs"]], ["Camisa Impermeable Antiarrugas", "Impermeable. Antiarrugas. Cómoda", "89900.00", "79900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/chatgpt-image-dec-5-2025-02_55_56-am-00551d85b26409df8e17649141847215-640-0_1-02c152d7d05d6fd2f917851634179697-1024-1024.webp", "https://tiendadeadmin14.mitiendanube.com/productos/camisa-hombre-nalo-impermeable-antiarrugas-manga-larga/", ["Antiarrugas"]], ["Pantalón Antiarrugas", "", "100000.00", "84900.00", "https://dcdn-us.mitiendanube.com/stores/008/014/202/products/pantalonantiarrugasnegroportada1_f98fc83b-976a-42d2-b905-a67832b19605-f0bc0d09a3ab0402a817851634625749-1024-1024.png", "https://tiendadeadmin14.mitiendanube.com/productos/pantalon-antiarrugas-nalo/", ["Antiarrugas"]]];
  var TABS = ["Bestsellers", "Reductoras", "Boxers", "Antiarrugas", "Accesorios", "Packs"];
  function money(v){return "$"+String(Math.round(parseFloat(v))).replace(/\B(?=(\d{3})+(?!\d))/g,".");}
  function inTab(p,t){return t==="Bestsellers"?true:p[6].indexOf(t)!==-1;}
  var CSS=""+
    "#nalo-tabs .nt{max-width:1400px;margin:0 auto;padding:56px 24px}"+
    "#nalo-tabs h2{text-align:center;font-weight:700;letter-spacing:.03rem;font-size:32px;margin:0 0 28px}"+
    "#nalo-tabs h2 .v{color:#5200ff}"+
    "#nalo-tabs .nt-tabs{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:36px}"+
    "#nalo-tabs .nt-tab{appearance:none;border:1px solid #ddd;background:#fff;color:#111;font:600 13px/1 Poppins,sans-serif;letter-spacing:.04em;text-transform:uppercase;padding:11px 20px;border-radius:40px;cursor:pointer;transition:.15s}"+
    "#nalo-tabs .nt-tab.on{background:#5200ff;border-color:#5200ff;color:#fff}"+
    "#nalo-tabs .nt-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;align-items:stretch}"+
    "#nalo-tabs .nt-card{display:flex;flex-direction:column;height:100%;text-decoration:none;color:inherit}"+
    "#nalo-tabs .nt-ph{position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#f3f3f3;box-shadow:0 0 1.5rem rgba(0,0,0,.08)}"+
    "#nalo-tabs .nt-ph img{width:100%;height:100%;object-fit:cover;transition:transform .4s}"+
    "#nalo-tabs .nt-card:hover .nt-ph img{transform:scale(1.04)}"+
    "#nalo-tabs .nt-name{font-weight:700;font-size:16px;margin:14px 0 4px;text-align:center}"+
    "#nalo-tabs .nt-sub{font-size:12.5px;color:#666;text-align:center;margin-bottom:8px}"+
    "#nalo-tabs .nt-price{text-align:center;font-size:15px}"+
    "#nalo-tabs .nt-promo{font-weight:700;color:#111}"+
    "#nalo-tabs .nt-old{color:#999;text-decoration:line-through;margin-left:6px;font-size:13px}"+
    "#nalo-tabs .nt-buy{display:block;margin:14px 0 0;margin-top:auto;background:#000;color:#fff;font:700 12px/1 Poppins,sans-serif;letter-spacing:.06em;text-transform:uppercase;padding:13px 16px;border-radius:6px;text-align:center;transition:.15s}"+
    "#nalo-tabs .nt-card:hover .nt-buy{background:#5200ff}"+
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
      a.innerHTML='<div class="nt-ph"><img loading="lazy" alt=""></div><div class="nt-name"></div><div class="nt-sub"></div><div class="nt-price">'+ph+'</div><span class="nt-buy">Comprar</span>';
      a.querySelector("img").src=p[4];
      a.querySelector(".nt-name").textContent=p[0];
      a.querySelector(".nt-sub").textContent=p[1];
      grid.appendChild(a);
    });
  }
  render("Bestsellers");
})();
