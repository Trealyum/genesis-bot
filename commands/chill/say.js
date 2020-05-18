module.exports.run = (client, message,args) => {
  message.channel.send(args.join(" "));

  message.delete();
} 

module.exports.help = {
  name: 'say',
  aliases: ['repeat', 'rep'],
  category: 'chill',
  description: "Répéte le message d'un utilisateur",
  cooldown: 10,
  usage: '<votre_message>',
  isUserAdmin: false,
  permissions: true,
  args: true
}
