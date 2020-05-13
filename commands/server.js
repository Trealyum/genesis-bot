module.exports = {
  name: 'server',
  description: 'Renvoie les informations du server',
  execute(message, args) {
    message.channel.send(`Je suis sur le serveur ${message.guild.name}.`);
  }
}