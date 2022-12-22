const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(` Eklenti Komutları`, client.user.avatarURL())
.setDescription(`Kanna Chan`)
.addField(`__Kayıt Sistemi__`,`  \`${prefix}kayıtsistemi\` Gelişmiş Kayıt Sistemi`,true)
.addField(`__Davet Sistemi__`,`  \`${prefix}davetsistemi\` Gelişmiş Davet Sistemi`,true)
.addField(`__Oto Cevap__`,`  \`${prefix}oto-cevap\` Gelişmiş Oto Cevap Sistemi`,true)
.setThumbnail(client.user.avatarURL)
message.channel.send(eklenti) 
  };
exports.config = {
name: "eklenti",
  aliases: []
}
