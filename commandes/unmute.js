const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
let commande = args.shift();
let MUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args.shift()));
if(!MUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
let MReason = args.join(" ");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peut pas faire ça !");
if(MUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être ban !");

if(!MReason) return message.reply("Vous n'avez pas spécifié de motif ! (*unmute @user motif)");

  let muterole = message.guild.roles.find(`name`, "Mute serveur");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mute serveur",
        color: "#000001",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end 

  let muteEmbed = new Discord.RichEmbed()
    .setTitle(`~ Mute ~`)
    .setColor("#ff0000")
    .addField("Joueur", `${MUser}`, true)
    .addField("Staff", `<@${message.author.id}>`, true)
    .addField("Durée", `${ms(ms(mutetime))}`)
    .addField("Motif", MReason)
    .setFooter(`Made by ${botconfig.author} | Version ${botconfig.version}`)
    .setTimestamp();

    let muteChannel = message.guild.channels.find(`name`, "📜▕-passage-discord");
    if(!muteChannel) return message.channel.send("Je ne trouve pas le channel !");
    const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
let commande = args.shift();
let MUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args.shift()));
if(!MUser) return message.channel.send("Je ne trouve pas l'utilisateur.");
let MReason = args.join(" ");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu peut pas faire ça !");
if(MUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être ban !");

    let muteChannel = message.guild.channels.find(`name`, "📜▕-passage-discord");
    if(!muteChannel) return message.channel.send("Je ne trouve pas le channel !");

    let unbanEmbed = new Discord.RichEmbed()
    .setTitle(`~ UnMute ~`)
    .setColor("#008000")
    .addField("Pseudo", `${MUser}`, true)
    .addField("Staff", `@${bot.user.tag}`, true)
    .setFooter(`Made by ${botconfig.author} | Version ${botconfig.version}`)
    .setTimestamp();

    MUser.removeRole(muterole.id);
    muteChannel.send(unbanEmbed);
    console.log(`[STAFF] ${MUser.user.tag} n'est plus mute de ${message.guild.name}`)


//end of module
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

module.exports.help = {
  name: 'unmute',
  description: 'Permet de retirer un mute temporairemment une personne du discord.',
  usage: 'unmute @pseudo#xxx [motif]'
}}