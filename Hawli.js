const tmi           = require('tmi.js');
const database      = require('./config/Database.json')
const express       = require("express");
const app           = express();
const Kanal         = database.Kanal  
const Bot           = database.Bot
const Admin         = database.Admin
const Mod           = database.Mod
const Nick          = database.Nick
const Discord       = database.Discord
const Prefix        = database.prefix
const Donate        = database.Donate_Linki
const Kullanıcı_Adı = database.Kullanıcı_Adı
const channel       = database.Kanal
const BOT_USERNAME  = database.Kullanıcı_Adı
const kullanıcı     = Bot
const listener = app.listen(process.env.PORT, () => {
console.log(`Your app is listening on port ${listener.address().port}`);
});
const options = {
options: {
debug:true,
},
connection: {
cluster: "aws",
reconnect: "true",
},
identity: {
username: Kullanıcı_Adı,
password: kullanıcı,
},
channels: [Kanal],
};
const client = new tmi.client(options);
client.connect();
client.on('connected', (address, port) => {
client.action(Kanal, 'Bot başarıyla bağlandı');
});
//komutlar 
client.on('chat', (channel, user, message, self) => {
    if (message === Prefix + "çekiliş") {
        client.action(Kanal, "Çekilişe Katılma Şartları: 1-Kanalımı Takip Etme, 2-Discord Sunucumda Bulunma, 3-Bot komut kanalına !Çekiliş + Nickinizi Yazmanız Gerekiyor. İyi Şanslar Umarım Sana :çıkar");
       
    }
    if (message === Prefix + "Çekiliş") {
        client.action(Kanal, "Çekilişe Katılma Şartları: 1-Kanalımı Takip Etme, 2-Discord Sunucumda Bulunma, 3-Bot komut kanalına !Çekiliş + Nickinizi Yazmanız Gerekiyor. İyi Şanslar Umarım Sana :çıkar");
    }
    if (message === Prefix + "ÇEKİLİŞ") {
        client.action(Kanal, "Çekilişe Katılma Şartları: 1-Kanalımı Takip Etme, 2-Discord Sunucumda Bulunma, 3-Bot komut kanalına !Çekiliş + Nickinizi Yazmanız Gerekiyor. İyi Şanslar Umarım Sana :çıkar");
    }
   if (message === Prefix + "nick") {
       client.action(Kanal, Nick);
   }
   if (message === Prefix + "Nick") {
       client.action(Kanal, Nick);
   }
   if (message === Prefix + "NİCK") {
       client.action(Kanal, Nick);
   } 
   if (message === Prefix + "dc") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "Dc") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "dC") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "DC") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "discord") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "Discord") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "DİSCORD") {
       client.action(Kanal, Discord);
   }
   if (message === Prefix + "bağış") {
       client.action(Kanal, Donate);
   }
   if (message === Prefix + "Bağış") {
       client.action(Kanal, Donate);
   }
   if (message === Prefix + "BAĞIŞ") {
       client.action(Kanal, Donate);
   }
   if (message === Prefix + "donate") {
       client.action(Kanal, Donate);
   }
   if (message === Prefix + "Donate") {
       client.action(Kanal, Donate);
   }
   if (message === Prefix + "DONATE") {
       client.action(Kanal, Donate);
   }
});
//TR
client.on('chat', (channel, user, message, self) => {
    if (message === "merhaba") {
        client.action(Kanal, 'merhaba hoşgeldin');
    }
    if (message === "Merhaba") {
        client.action(Kanal, 'Merhaba Hoşgeldin');
    }
    if (message === "MERHABA") {
        client.action(Kanal, 'MERHABA HOŞGELDİN');
    }
    if (message === "sa") {
        client.action(Kanal, 'as, hg');
    }
    if (message === "Sa") {
        client.action(Kanal, 'As, Hg');
    }
    if (message === "sA") {
        client.action(Kanal, 'aS, Hg');
    }
    if (message === "SA") {
        client.action(Kanal, 'AS, HG');
    }
    if (message === "selamun aleyküm") {
        client.action(Kanal, 'aleykümselam hoşgeldin');
    }
    if (message === "Selamun Aleyküm") {
        client.action(Kanal, 'Aleyküm Selam hoşgeldin');
    }
    if (message === "selamunaleyküm") {
        client.action(Kanal, 'aleykümselam hoşgeldin');
    }
    if (message === "selamunaleyküm") {
        client.action(Kanal, 'aleykümselam hoşgeldin');
    }
    if (message === "SELAMUN ALEYKÜM") {
        client.action(Kanal, 'ALEYKÜM SELAM HOŞGELDİN');
    }
    if (message === "slm") {
        client.action(Kanal, 'slm hg');
    }
    if (message === "Slm") {
        client.action(Kanal, 'Slm hg');
    }
    if (message === "SLM") {
        client.action(Kanal, 'SLM HG');
    }
    if (message === "selam") {
        client.action(Kanal, 'selam hoşgeldin');
    }
    if (message === "Selam") {
        client.action(Kanal, 'Selam Hoşgeldin');
    }
    if (message === "SELAM") {
        client.action(Kanal, 'SELAM HOŞGELDİN');
    }
    if (message === "naber") {
        client.action(Kanal, 'iyi sen');
    }
    if (message === "Naber") {
        client.action(Kanal, 'İyi Sen');
    }
    if (message === "NABER") {
        client.action(Kanal, 'İYİ SEN');
    }
    if (message === "nbr") {
        client.action(Kanal, 'iyi sen');
    }
    if (message === "Nbr") {
        client.action(Kanal, 'İyi Sen');
    }
    if (message === "NBR") {
        client.action(Kanal, 'İYİ SEN');
    }
    if (message === "hb") {
        client.action(Kanal, 'nasılsın');
    }
    if (message === "Hb") {
        client.action(Kanal, 'Nasılsın');
    }
    if (message === 'hB') {
        client.action(Kanal, 'Nasılsın');
    }
    if (message === 'HB') {
        client.action(Kanal, 'NASILSIN');
    }
    if (message === "iyi sen") {
        client.action(Kanal, 'iyi bende');
    }
    if (message === "İyi sen") {
        client.action(Kanal, 'İyi bende');
    }
    if (message === "iyi Sen") {
        client.action(Kanal, 'iyi Bende');
    }
    if (message === "İYİ SEN") {
        client.action(Kanal, 'İYİ BENDE');
    }
    if (message === "iyisen") {
        client.action(Kanal, 'iyi bende');
    }
    if (message === "İyisen") {
        client.action(Kanal, 'İyi bende');
    }
    if (message === "iyiSen") {
        client.action(Kanal, 'iyi Bende');
    }
    if (message === "İYİSEN") {
        client.action(Kanal, 'İYİ BENDE');
    }
    if (message === "iyi") {
        client.action(Kanal, 'İYİ BENDE');
    }
    if (message === "iyi yayınlar") {
        client.action(Kanal, 'teşekkürler');
    }
    if (message === "İyi yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "iyi Yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "İYİ YAYINLAR") {
        client.action(Kanal, 'TEŞEKKÜRLER');
    }
    if (message === "iyiyayınlar") {
        client.action(Kanal, 'teşekkürler');
    }
    if (message === "İyiyayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "iyiYayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "İYİYAYINLAR") {
        client.action(Kanal, 'TEŞEKKÜRLER');
    }
    if (message === "iyi yayınlar") {
        client.action(Kanal, 'teşekkürler');
    }
    if (message === "ii yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "İi yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "İİ yayınlar") {
        client.action(Kanal, 'TEŞEKKÜRLER');
    }
    if (message === "İİ Yayınlar") {
        client.action(Kanal, 'teşekkürler');
    }
    if (message === "İi Yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "iİ Yayınlar") {
        client.action(Kanal, 'Teşekkürler');
    }
    if (message === "İİ YAYINLAR") {
        client.action(Kanal, 'TEŞEKKÜRLER');
    }
});
//İNG 
client.on('chat', (channel, user, message, self) => {   

    if (message === "hi") {
        client.action(Kanal, 'hi, welcome');
    }
    if (message === "Hi") {
        client.action(Kanal, 'Hi, welcome');
    }
    if (message === "hİ") {
        client.action(Kanal, 'hİ, welcome');
    }
    if (message === "Hİ") {
        client.action(Kanal, 'Hİ, WELCOME');
    }
    if (message === "hi") {
        client.action(Kanal, 'hi, welcome');
    }
    if (message === "hello") {
        client.action(Kanal, 'hello, welcome');
    }
    if (message === "Hello") {
        client.action(Kanal, 'Hello, welcome');
    }
    if (message === "HELLO") {
        client.action(Kanal, 'HELLO, WELCOME');
    }
});
//isp
client.on('chat', (channel, user, message, self) => {   

    if (message === "hola") {
        client.action(Kanal, 'Hola bienvenido');
    }
    if (message === "Hola") {
        client.action(Kanal, 'Hola bienvenido');
    }
    if (message === "HOLA") {
        client.action(Kanal, 'Hola bienvenido');
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
