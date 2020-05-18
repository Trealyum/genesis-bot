module.exports.run = (client, message,args) => {
  message.channel.send("Pong!");

  message.delete();
} 

module.exports.help = {
  name: 'ping',
  aliases: ['ping'],
  category: 'chill',
  description: 'Renvoie pong!',
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: false,
  args: false
}
