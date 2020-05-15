const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message,args) => {
  const user = message.mentions.users.first();
};

module.exports.help = {
  name: 'mute',
  aliases: ['mute'],
  description: "mute un utilisateur !",
  cooldown: 10,
  usage: '<@user> <time>',
  isUserAdmin: true,
  permissions: true,
  args: true
}
