module.exports = {
  name: 'ping',
  description: 'Renvoie le mot pong à l\'utilisateur de la commande',
  execute(client, message, args) {
  message.channel.send("Pong!");
  }
}