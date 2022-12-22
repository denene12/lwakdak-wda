const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`ddosid_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`  **Ddos Log Kanalı Zaten ayarlı değil**`);
    db.delete(`ddosid_${message.guild.id}`)
   message.channel.send(`  **Ddos Log Kanalı başarıyla sıfırlandı.**`);
  
    return
  }
  
if (!logk) return message.channel.send(`  **Bir log kanalı belirtmelisin.**`);

db.set(`ddosid_${message.guild.id}`, logk.id)

message.channel.send(`**Ddos Log kanalı başarıyla ${logk} olarak ayarlandı.**`);

};

exports.config = {
    name: "ddos-log-ayarla",
    aliases: ["dsffghjkl"]
}