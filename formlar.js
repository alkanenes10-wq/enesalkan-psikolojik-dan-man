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

/* Sıklık soran formlar için 1-5 yanıt seçenekleri */
var SECENEKLER_SIKLIK = [
  "Hiçbir zaman",
  "Nadiren",
  "Bazen",
  "Sık sık",
  "Neredeyse her zaman"
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
  },

  /* ---------------- SINAV KAYGISI ---------------- */
  {
    slug: "sinav-kaygisi",
    baslik: "Sınav Kaygısı",
    altBaslik: "BDT temelli kendini değerlendirme formu",
    kisaAciklama: "Kaygının düşüncelerinde mi, bedeninde mi, sınav anında mı yoksa beklentilerde mi yoğunlaştığını gör.",
    sure: "3 dakika",
    giris: "Aşağıdaki 12 ifade, YKS'ye hazırlanan 12. sınıf ve mezun öğrencilerin deneme ve sınav dönemlerinde yaşadıklarını anlatıyor. Her birini son bir ayda ne sıklıkla yaşadığını işaretle. Doğru ya da yanlış yanıt yok.",
    secenekler: SECENEKLER_SIKLIK,
    /* alanlar: isteğe bağlı. Her maddenin "alan" kodu buradaki kodlardan biri olmalı. */
    alanlar: [
      { kod: "dusunce", ad: "Düşünceler",
        not: "Kaygın en çok zihninde kurduğun senaryolardan besleniyor. BDT'de bu düşünceleri fark etmek ve kanıtlarıyla sınamak üzerine çalışılır." },
      { kod: "beden", ad: "Bedensel belirtiler",
        not: "Kaygın en çok bedeninde kendini gösteriyor. Nefes ve gevşeme becerileri düzenli çalışıldığında bu belirtiler yönetilebilir hale gelir." },
      { kod: "an", ad: "Sınav anı",
        not: "En çok, bildiğini sınavda ortaya koymakta zorlanıyorsun. Bu çoğunlukla bilgi eksiğinden değil, dikkatin kaygıya kaymasından kaynaklanır ve deneme stratejisiyle çalışılabilir." },
      { kod: "baski", ad: "Baskı ve beklenti",
        not: "Kaygın en çok beklentilerden ve kıyaslamadan besleniyor. Kendi hedefini başkalarının beklentisinden ayırabilmek bu yükü hafifletir." }
    ],
    maddeler: [
      { alan: "dusunce", metin: "Deneme sonucum kötü geldiğinde aklım hemen \"bu sene de olmayacak\" noktasına gider." },
      { alan: "beden",   metin: "Deneme ya da sınav sabahı midemde, göğsümde ya da nefesimde belirgin bir sıkışma olur." },
      { alan: "an",      metin: "Evde rahatça çözdüğüm türden soruları denemede yapamam." },
      { alan: "baski",   metin: "Ailemin emeğini ve beklentisini boşa çıkarma düşüncesi üzerimde ağır bir yük gibi durur." },
      { alan: "dusunce", metin: "YKS'yi düşündüğümde aklıma önce ters gidebilecek şeyler gelir." },
      { alan: "beden",   metin: "Sınav yaklaştıkça uykuya dalmam zorlaşır ya da uykum bölünür." },
      { alan: "an",      metin: "Bir soruya takıldığımda toparlanamam; sonraki sorulara da o gerginlikle devam ederim." },
      { alan: "baski",   metin: "Arkadaşlarımın netlerini duyduğumda kendi emeğim gözümde değersizleşir." },
      { alan: "dusunce", metin: "İstediğim sonucu alamazsam her şeyin biteceğini düşünürüm." },
      { alan: "beden",   metin: "Deneme ya da sınav sırasında ellerim terler, titrer ya da omuzlarım kaskatı kesilir." },
      { alan: "an",      metin: "Sınav sırasında kalan süreyi ve soruları düşünmekten okuduğumu anlamakta zorlanırım." },
      { alan: "baski",   metin: "Bu sınavın benim için \"son şans\" olduğu düşüncesi peşimi bırakmaz." }
    ],
    /* Puan aralıkları: 12 madde x (1-5) = en az 12, en çok 60 */
    sonuclar: [
      {
        min: 12, max: 28,
        etiket: "Sınav kaygısı seni pek zorlamıyor",
        yorum: "Yanıtların, sınav kaygısının şu an hazırlığını ve performansını belirgin biçimde etkilemediğini gösteriyor. Bir miktar heyecan olağandır ve çoğu zaman dikkati toplamaya yardım eder.",
        oneri: "Denemelerden sonra yalnızca yanlışlarına değil, sınav sırasında kendini nasıl hissettiğine de bir cümleyle not düş. Kaygı artmaya başlarsa erkenden fark edersin."
      },
      {
        min: 29, max: 44,
        etiket: "Sınav kaygısı zaman zaman performansını etkiliyor",
        yorum: "Yanıtların, kaygının bazı denemelerde ya da bazı dönemlerde bildiğini ortaya koymanı zorlaştırdığını gösteriyor. Kaygı çoğunlukla üç yerden beslenir: aklından geçen düşünceler, bedenindeki tepkiler ve sınav anındaki dikkat. Hangisinin sende öne çıktığını aşağıda görebilirsin.",
        oneri: "Denemeye başlamadan önce iki dakika boyunca nefesini yavaşlat: dört saniyede al, altı saniyede ver. Bedenin sakinleştiğinde dikkatin de sorulara daha kolay döner."
      },
      {
        min: 45, max: 60,
        etiket: "Sınav kaygısı hazırlığını ve sınavını zorluyor",
        yorum: "Yanıtların, kaygının şu an hem çalışma sürecini hem de sınav performansını ciddi biçimde etkilediğini gösteriyor. Bu, yeterince çalışmadığın ya da güçsüz olduğun anlamına gelmez. Sınav kaygısı, doğru becerilerle yönetilmesi öğrenilebilen bir durumdur.",
        oneri: "Aklındaki en kötü senaryoyu bir kağıda yaz. Altına iki soru sor: \"Bunun olacağına dair kanıtım ne?\" ve \"Olsa bile sonrasında ne yapabilirim?\". Yazıya dökülen düşünce, akılda dönen düşünceden daha yönetilebilirdir."
      }
    ]
  }

  /* YENİ FORM EKLEMEK İÇİN:
     1) Yukarıdaki form bloklarından birinin tamamını  {  işaretinden  }  işaretine kadar kopyalayın.
     2) Son bloğun kapanan  }  işaretinden sonra bir virgül koyup kopyayı yapıştırın.
     3) slug, baslik, maddeler ve sonuclar alanlarını yeni konuya göre değiştirin.
     Ayrıntılar: YENI-FORM-EKLEME.md */
];
