const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message,args) => {
  const user = message.mentions.users.first();
  const reason = (args.slice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !");

  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(`${user.usename} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('710923057467752489').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;
