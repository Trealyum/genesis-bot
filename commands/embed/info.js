const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message,args) => {
  message.delete();

  const embed = new MessageEmbed()
      .setColor("#dc143c")
      .setTitle("Info Génésis")
      .setURL("https://google.com")
      .setDescription("Information sur le clan")
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: 'Date de création', value: 'Lundi 22 Octobre 2018', inline: true },
        { name: 'Description du clan', value: 'Clan sympatique ! Bavard ! Actif ! Respectueux et Mature ! Dons rapide et respecté ! 3 GDC par semaine ! On s\'amuse ! On rigole ! On a un discord ! Ambiance familiale ! Renouvellement du clan en continu ! Rejoignez-nous ! 💪🍀🔥', inline: false }
      )
      .setImage(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter("Je suis sur le pied du footer");

  message.channel.send(embed);
} 

module.exports.help = {
  name: 'info',
  aliases: ['info'],
  category: 'embed',
  description: 'Renvoie un embed',
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
}