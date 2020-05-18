const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message,args) => {
  const user = message.mentions.users.first();
  const reason = (args.slice(1).join(' ') || 'Aucune raison spécifiée');
  user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas !");

  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(`${user.usename} (${user.id})`)
    .setColor("#dc143c")
    .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('710923057467752489' || '711170282936729621').send(embed);
};

module.exports.help = {
  name: 'ban',
  aliases: ['ban'],
  category: 'moderation',
  description: "Ban un utilisateur !",
  cooldown: 10,
  usage: '<@user> <raison>',
  isUserAdmin: true,
  permissions: true,
  args: true
}