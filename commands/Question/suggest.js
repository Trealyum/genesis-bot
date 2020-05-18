const { MessageEmbed } = require('discord.js');

module.exports.run = (client,message, args) => {
  const suggest = (args.slice(0).join(' '))

  message.delete();

  const embed = new MessageEmbed()
    .setDescription("Cliquez sur une des réactions ci-dessous pour être \"pour\" ou \"contre\" la suggestion proposer !")
    .setColor("#ffa500")
    .setTitle("__Nouvelle idée !__")
    .setThumbnail(message.author.avatarURL())
    .addFields(
      { name: '**__Auteur : __**', value: (`${message.author.tag}`),inline: false },
      { name: '**__Suggestion : __**', value: (`${suggest}`), inline: true }
    )
    .setFooter(message.author.username, message.author.avatarURL())

    client.channels.cache.get('708247649849049150').send(embed).then(async msg => {
      await msg.react('✅');
      await msg.react('❌');
    });
};

module.exports.help = {
  name: 'suggest',
  aliases: ['suggest'],
  category: 'question',
  description: "Fais une suggestion !",
  cooldown: 10,
  usage: '<votre_suggestion>',
  isUserAdmin: false,
  permissions: false,
  args: true
}