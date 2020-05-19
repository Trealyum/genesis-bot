const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message, args) => {
  const absence = (args.slice(0).join(' '))

  message.delete();

  const embed = new MessageEmbed()
    .setColor("#ffa500")
    .setTitle("__Nouvelle absence !__")
    .setThumbnail(message.author.avatarURL())
    .addFields(
      { name: '**__Auteur : __**', value: (`${message.author.tag}`),inline: false },
      { name: '**__Motif : __**', value: (`${absence}`), inline: true }
    )
    .setFooter(message.author.username, message.author.avatarURL())

    message.channel.send('Le motif de ton absence a bien été transmis !');
    client.channels.cache.get('708247693050380318').send(embed)
};

module.exports.help = MESSAGES.COMMANDS.ABSENCE.ABSENCE;