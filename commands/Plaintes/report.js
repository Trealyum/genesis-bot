const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message, args) => {
  const report = (args.slice(0).join(' '))

  message.delete();

  const embed = new MessageEmbed()
    .setColor("#ffa500")
    .setTitle("__Nouvelle plainte !__")
    .setThumbnail(message.author.avatarURL())
    .addFields(
      { name: '**__Auteur : __**', value: (`${message.author.tag}`),inline: false },
      { name: '**__Plainte : __**', value: (`${report}`), inline: true }
    )
    .setFooter(message.author.username, message.author.avatarURL())

    message.channel.send("La plainte a bien été transmise au staff !");
    client.channels.cache.get('708247694681964554').send(embed)
};

module.exports.help = MESSAGES.COMMANDS.PLAINTES.REPORT;