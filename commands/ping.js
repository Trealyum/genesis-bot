module.exports = {
  name: 'ping',
  description: 'Renvoie le mot pong à l\'utilisateur de la commande',
  execute(message, args) {
  message.channel.send("Pong!");
  }
}