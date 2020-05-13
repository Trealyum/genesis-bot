module.exports = {
  name: 'salut',
  description: 'Renvoie le mot bonjour à l\'utilisateur de la commande',
  execute(message, args) {
    message.channel.send("Salut, je suis le bot!");
  }
}
