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

/* 3B sahne: fare hareketine göre hafif eğim (yalnızca fare olan cihazlarda) */
(function () {
  if (!window.matchMedia || !matchMedia("(pointer: fine)").matches) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".sahne").forEach(function (s) {
    var ic = s.querySelector(".sahne-ic");
    s.addEventListener("mousemove", function (e) {
      var r = s.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      ic.style.setProperty("--ry", (x * 12).toFixed(2) + "deg");
      ic.style.setProperty("--rx", (-y * 10).toFixed(2) + "deg");
    });
    s.addEventListener("mouseleave", function () {
      ic.style.setProperty("--ry", "0deg"); ic.style.setProperty("--rx", "0deg");
    });
  });
})();
