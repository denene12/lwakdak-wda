


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()

.addField("__**Bot Verileri**__", `  **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n   **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Sürümler**__", `  **Discord.js Sürümü** **|**  **v${Discord.version}** \n  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "  " +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://geekflare.com/wp-content/uploads/2021/02/discord-bot-hosting-1200x385.jpg`)
.setColor("#ffffff")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}