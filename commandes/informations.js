const Discord = require("discord.js");
const botconfig = require("../botconfig.json");


module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Information du bot")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nom du bot", bot.user.username, true)
    .addField("Auteur", `${botconfig.author}`, true)
    .addField("Version", `${botconfig.version}`)
    .setFooter(`Made by ${botconfig.author} | Version ${botconfig.version}`)
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

module.exports.help = {
  name: 'informations',
  description: 'Affiche toutes les informations du bot.',
  usage: 'informations',
};

