 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(` Koruma Komutları`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`Kanna Chan`)
.addField(`__Anti Raid__`,`  \`${prefix}anti-raid\` Sunucuya Bilinmeyen Botların Katılmasını Engeller`,true)
.addField(`__Anti Raid İzin__`,`  \`${prefix}anti-raid-izin\` Anti Raid Açıkken Sunucuya Bot Girme İzni Vermek İçin`,true)
.addField(`__Anti Raid__`,`  \`${prefix}anti-raid\` Sunucuya Bilinmeyen Botların Katılmasını Engeller`,true)
.addField(`__Ddos Koruma__`,`  \`${prefix}ddos-koruma\` Ddos Korumasını Açar`,true)
.addField(`__Ddos Log Ayarla__`,`  \`${prefix}ddos-log-ayarla\` Ddos Engellendiğinde Haber Verilecek Kanalı Ayarlar`,true)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "guard",
  aliases: []
}

