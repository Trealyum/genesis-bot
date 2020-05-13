module.exports = {
  name: 'user',
  description: 'Renvoie les informations de l\'utilisateur de la commande',
  execute(message, args) {
    channel.send(`Je suis l'utilisateur ${message.author.tag}.`);
  }
}