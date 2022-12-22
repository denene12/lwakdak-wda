const Discord = require("discord.js");
const db = require("quick.db")

exports.run = async (client, message, args) => {
const fynx = require("../ayarlar/bot.json");
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
  let isim31 = await db.fetch(`isimsistemi_${message.guild.id}`);
  let chid = await db.fetch(`kayitKanal_${message.guild.id}`);
  let ch = await message.guild.channels.cache.find(kanal => kanal.id === chid);
  let ar = await db.fetch(`kayitAR_${message.guild.id}`);
  let vr = await db.fetch(`kayitVR_${message.guild.id}`);
  
  if (!isim31) return message.channel.send("İsim Sistemi Kurulu Değil Lütfen Bir Yetkiliyle İletişime Geçiniz")
  if (!ch) return message.channel.send("Kayıt Olma Kanalı Ayarlı Değil Lütfen Bir Yetkiliyle İletişime Geçiniz")
  if (!ar) return message.channel.send("Kayıtsız Rolü Ayarlı Değil Lütfen Bir Yetkiliyle İletişime Geçiniz")
  if (!vr) return message.channel.send("Kayıt Olunca Verilecek Rol Ayarlı Değil Lütfen Bir Yetkiliyle İletişime Geçiniz")
  if (!isim31.includes(`-yas-`)) {
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`${prefix}kayıt Utku\``)
 
  message.channel.send(`Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`))
  message.member.roles.remove(message.guild.roles.cache.get(ar));
  message.member.roles.add(message.guild.roles.cache.get(vr));
      
  return ch.send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
  }
  let isim = args[0]
  let yas = args[1];
  if (!isim) return message.channel.send(`Seni Kayıt Etmem İçin Bir İsim Girmelisin : \`${prefix}kayıt Arda 15\``)
  if (!yas) return message.channel.send(`Seni Kayıt Etmem İçin Bir Yaş Girmelisin : \`${prefix}kayıt Utku 17\``)

  
    message.channel.send(`Kaydınız Oluşturuldu.`)
  message.member.setNickname(isim31.replace("-uye-", `${isim}`).replace("-yas-", `${yas}`))
  message.member.roles.remove(message.guild.roles.cache.get(ar));
  message.member.roles.add(message.guild.roles.cache.get(vr));
      
  ch.send(`:scroll: <@${message.author.id}> İçin Kayıt İşlemi Başarı İle Tamamlandı. :clipboard:`)
}
exports.config = {
 name: "kayıt-ol",
  aliases: ["kayıtol", "k", "kayit", "kaydol"]
}
