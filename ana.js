/* Ana sayfa ve bilgilendirme sayfası: form listesini ve Instagram bağlantılarını doldurur. */
(function () {
  var site = window.SITE || {};
  var formlar = window.FORMLAR || [];
  var dm = "https://ig.me/m/" + site.instagram;

  document.querySelectorAll("[data-dm]").forEach(function (a) {
    a.href = dm; a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-ig]").forEach(function (a) {
    a.href = "https://instagram.com/" + site.instagram;
    a.textContent = "@" + site.instagram;
    a.target = "_blank"; a.rel = "noopener";
  });
  document.querySelectorAll("[data-kelime]").forEach(function (s) { s.textContent = site.dmKelimesi; });
  document.querySelectorAll("[data-yil]").forEach(function (s) { s.textContent = "© " + new Date().getFullYear(); });

  var liste = document.getElementById("form-listesi");
  if (!liste) return;
  formlar.forEach(function (f) {
    var a = document.createElement("a");
    a.className = "kart";
    a.href = (window.ONIZLEME ? "form.html?f=" : "/") + f.slug;
    var e = document.createElement("span"); e.className = "etiket";
    e.textContent = f.maddeler.length + " soru · " + f.sure;
    var h = document.createElement("h3"); h.textContent = f.baslik;
    var p = document.createElement("p"); p.textContent = f.kisaAciklama;
    var g = document.createElement("span"); g.className = "git"; g.textContent = "Forma başla →";
    a.appendChild(e); a.appendChild(h); a.appendChild(p); a.appendChild(g);
    liste.appendChild(a);
  });
})();
