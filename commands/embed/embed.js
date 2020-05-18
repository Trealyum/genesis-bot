const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  message.delete();

  const embed = new MessageEmbed()
      .setColor("#dc143c")
      .setTitle("Titre de l'embed")
      .setURL("https://google.com")
      .setDescription("Description de l'embed")
      .setThumbnail(client.user.displayAvatarURL())
      .addField("#accueil", "et je suis sa valeur")
      .addFields(
        { name: 'Je suis le champ 1', value: 'et je suis sa valeur', inline: true },
        { name: 'Je suis le champ 2', value: 'et en plus je suis aligné!', inline: true }
      )
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter("Je suis sur le pied du footer");

  message.channel.send(embed);
} 

module.exports.help = {
  name: 'embed',
  aliases: ['embed'],
  category: 'embed',
  description: 'Renvoie un embed',
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
}