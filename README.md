# 🎮 Hawli - Twitch IRC Botu (2018)
**"Yazılıma olan yolculuğum, birihtiyacı çözme isteğiyle başladı."**

Bu proje, ben daha **13 yaşındayken** (2018) PS4 üzerinden **Twitch** yayınları yaptığım dönemde, yayınlarımı daha profesyonel yönetebilmek için geliştirdiğim bir asistandır. Konsoldan yayın yaparken chat'i kontrol etmek zordu, ben de bu sorunu kendi botumu yazarak çözmeye karar verdim.

### 💡 Neden Bu Botu Yazdım? (İhtiyaçtan Çözüme)
Yayıncılık yaptığım dönemde chat yönetimini kolaylaştırmak için şu çözümleri kodladım:
* **Çok Dilli Karşılama:** Yayınlarıma sadece Türk izleyiciler değil; İngilizce ve İspanyolca konuşanlar da geliyordu. Her birine kendi dilinde (`hi`, `hola`, `merhaba`) otomatik selam veren bir yapı kurdum.
* **Hızlı Bilgi Erişimi:** Yayında sürekli sorulan Discord adresi, bağış linki ve çekiliş şartları gibi bilgileri `!dc`, `!bağış`, `!çekiliş` gibi komutlarla botun anlık yanıtlamasını sağladım.
* **Esnek Algılama:** İzleyicilerin "SA", "sa" veya "Sa" yazması fark etmeksizin botun yanıt vermesi için o dönem tüm varyasyonları tek tek `if` bloklarıyla kontrol ederek chat akışını canlı tuttum.

### 🛠️ Teknik Analiz (O Günkü Bakış Açısı)
Bugün baktığımda daha optimize yazılabilecek yerler olsa da, 13 yaşında şu kavramları uygulamış olmak benim için büyük bir adımdı:
* **Configuration Management:** `Database.json` üzerinden bot ayarlarını koddan bağımsız yönetmek.
* **Environment Variables:** `process.env.PORT` kullanarak botun herhangi bir sunucuda (Heroku, AWS) çalışabilmesini sağlamak.
* **IRC Protokolü:** `tmi.js` kütüphanesi ile Twitch IRC sunucularına bağlanıp "aws" cluster yönetimi yapmak.

---
*Bu repo, yazılımın sadece kod yazmak değil, hayatımızdaki sorunları çözmek için bir araç olduğunu keşfettiğim ilk yerdir. "Hawli" ismi ise o günkü çocuksu heyecanımı ve özgüvenimi temsil ediyor.*
