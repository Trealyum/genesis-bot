const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
  const user = message.author;
  if (user.bot) return;

  const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: Ouverture d'un ticket\n**Raison**: ${message.content}\nUtilisateur: ${user}`)
    .setThumbnail(user.avatarURL())
    .setFooter(message.author.username, message.author.avatarURL())

  user.send("Nous avons reçu votre ticket, on vous répondra dès que possible !");
  client.channels.cache.get('710923057467752489').send(embed);
}