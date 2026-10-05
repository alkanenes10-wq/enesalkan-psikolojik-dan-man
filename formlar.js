/* ==========================================================
   SİTE AYARLARI VE FORMLAR
   Yeni form eklemek için bu dosyanın en altındaki açıklamayı
   ya da YENI-FORM-EKLEME.md dosyasını okuyun.
   ========================================================== */

window.SITE = {
  ad: "Enes Alkan",
  unvan: "Psk. Danışman",
  slogan: "İrade değil, yöntem.",
  instagram: "enesalkan.pdr",   // başında @ olmadan
  dmKelimesi: "GÖRÜŞME"
};

/* Tüm formlarda ortak kullanılan 1-5 yanıt seçenekleri */
var SECENEKLER_UYUM = [
  "Bana hiç uymuyor",
  "Pek uymuyor",
  "Biraz uyuyor",
  "Çoğunlukla uyuyor",
  "Tamamen uyuyor"
];

window.FORMLAR = [

  /* ---------------- ERTELEME ---------------- */
  {
    slug: "erteleme",                 // linkin sonu: siteniz.com/erteleme
    baslik: "Erteleme",
    altBaslik: "BDT temelli kendini değerlendirme formu",
    kisaAciklama: "Çalışmaya başlamayı ne sıklıkla ve hangi biçimde ertelediğine birlikte bakalım.",
    sure: "2 dakika",
    giris: "Aşağıdaki 10 ifade, YKS'ye hazırlanırken yaşanan erteleme davranışlarını anlatıyor. Her birinin son iki haftada sana ne kadar uyduğunu işaretle. Doğru ya da yanlış yanıt yok.",
    secenekler: SECENEKLER_UYUM,
    maddeler: [
      { metin: "Çalışmaya oturmadan önce masamı, telefonumu ya da odamı \"hazırlamakla\" epey vakit geçiririm." },
      { metin: "Zor bulduğum dersi programın sonuna atarım; çoğu zaman da sıra ona gelmez." },
      { metin: "\"Yarın daha erken kalkıp telafi ederim\" dediğim günler sık olur." },
      { metin: "Konu eksiğim büyüdükçe o derse başlamak daha da zorlaşır." },
      { metin: "Çalışmam gerektiğini bile bile başka bir şey yaparım; keyif almam ama bırakamam da." },
      { metin: "Başlamak için kendimi \"hazır\" ya da \"havamda\" hissetmeyi beklerim." },
      { metin: "\"Beş dakika bakıp çıkacağım\" diye açtığım telefon çalışma saatimin büyük kısmını alır." },
      { metin: "Programı yapmak bana iyi gelir, ama ertesi gün o programa uymakta zorlanırım." },
      { metin: "Bir işi ancak son ana kaldığında, sıkışınca yapabilirim." },
      { metin: "Günün sonunda yapamadıklarım yüzünden kendime kızarım, ertesi gün yine aynı şey olur." }
    ],
    /* Puan aralıkları: 10 madde x (1-5) = en az 10, en çok 50 */
    sonuclar: [
      {
        min: 10, max: 23,
        etiket: "Erteleme seni pek yavaşlatmıyor",
        yorum: "Yanıtların, ertelemenin şu an çalışma düzenini belirgin biçimde bozmadığını gösteriyor. Ara sıra ertelemek herkesin yaşadığı bir şey; önemli olan bunun alışkanlığa dönüşmemesi.",
        oneri: "İşaretlediğin en yüksek puanlı maddeye bak. O tek durum için bu hafta küçük bir kural koy: örneğin \"zor dersi günün ilk 30 dakikasında açarım\"."
      },
      {
        min: 24, max: 37,
        etiket: "Erteleme ara ara araya giriyor",
        yorum: "Yanıtların, ertelemenin bazı derslerde ya da bazı günlerde çalışmanı aksattığını gösteriyor. Bu genellikle tembellikle değil, başlamanın zor gelmesiyle ilgilidir: iş gözünde büyür, başlamak ertelenir, eksik büyüdükçe başlamak daha da zorlaşır.",
        oneri: "Beş dakika kuralını dene: ertelediğin derse yalnızca beş dakika çalışacağına söz ver ve süre dolunca bırakmakta serbest ol. Çoğu zaman en zor kısım olan başlangıcı geçmiş olursun."
      },
      {
        min: 38, max: 50,
        etiket: "Erteleme çalışmanın önüne geçiyor",
        yorum: "Yanıtların, ertelemenin şu an hazırlık sürecini ciddi biçimde zorladığını gösteriyor. Bu bir irade ya da karakter sorunu değil; kaçınma, suçluluk ve yeniden kaçınmadan oluşan, öğrenilmiş bir döngü. Döngüler doğru yöntemle değiştirilebilir.",
        oneri: "Bugün için tek bir hedef seç ve onu küçült: \"Matematik çalışacağım\" yerine \"saat 17.00'de masada, türevden 5 soru\". Ne zaman, nerede ve ne kadar olduğu belli olan hedefe başlamak çok daha kolaydır."
      }
    ]
  }

  /* YENİ FORM EKLEMEK İÇİN:
     1) Yukarıdaki erteleme bloğunun tamamını  {  işaretinden  }  işaretine kadar kopyalayın.
     2) Erteleme bloğunun kapanan  }  işaretinden sonra bir virgül koyup kopyayı yapıştırın.
     3) slug, baslik, maddeler ve sonuclar alanlarını yeni konuya göre değiştirin.
     Ayrıntılar: YENI-FORM-EKLEME.md */
];
