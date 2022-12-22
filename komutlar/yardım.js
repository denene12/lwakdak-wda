 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(` Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`Kanna Chan`)  
.addField(`__Genel Komutlar__`,`  \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`  \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`  \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`  \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`  \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`  \`${prefix}prefix\` `,true)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}