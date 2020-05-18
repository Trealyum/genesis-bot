const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message,args) => {
  const user = await client.users.fetch(args[0]);
  if(!user) return message.reply("L'utilisateur n'existe pas !")
  message.guild.members.unban(user)

  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(`${user.usename} (${user.id})`, user.avatarURL())
    .setColor("#35f092")
    .setDescription(`**Action**: unban`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('710923057467752489' || '711170282936729621').send(embed);
};

module.exports.help = {
  name: 'unban',
  aliases: ['unban'],
  category: 'moderation',
  description: "Unban un utilisateur !",
  cooldown: 10,
  usage: '<user_id>',
  isUserAdmin: false,
  permissions: true,
  args: true
}