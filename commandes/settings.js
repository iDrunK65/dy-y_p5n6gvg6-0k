const Discord = require("discord.js");

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0
  };
  
  module.exports.help = {
    name: 'settings',
    description: ':gear: Commande en dev !',
    usage: 'settings <type> <value>',
  };