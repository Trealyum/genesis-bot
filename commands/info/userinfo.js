module.exports.run = (client, message,args) => {
  const user_mention = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`);
} 

module.exports.help = {
  name: 'userinfo',
  description: 'Renvoie les informations d\'un utilisateur mentionné',
  aliases: ['userinfo'],
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}
