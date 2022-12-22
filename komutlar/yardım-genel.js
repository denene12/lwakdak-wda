  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffffff') 
.setAuthor(` Genel Komutlar`, client.user.avatarURL())
.setDescription(`Kanna Chan`)
.addField(`__Komut Sayısı__`,`  \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Bot Bilgi__`,`  \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`  \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`  \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`  \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`  \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Avatar__`,`  \`${prefix}avatar\` Avatarınızın Resmini Atar`,true)
.addField(`__Ayarlar__`,`  \`${prefix}ayarlar\` Sunucu Ayarlarını Atar`,true)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
