module.exports.run = (client, message,args) => {
  let role = message.guild.roles.cache.find(r => r.name === args.toString());
    if (role) {
      if (!message.member.roles.cache.has(role.id)) return message.channel.send("Vous possédez pas ce rôle!");

      message.member.roles.remove(role)
      .then(m => message.channel.send(`Vous ne possédez plus le rôle ${role}.`))
      .catch(e => console.log(e));
    } else {
      message.channel.send("Vous ne pouvez pas enlevé un rôle qui n'existe pas!");
  } 
}

module.exports.help = {
  name: 'remove',
  description: 'Supprimer un rôle!',
  aliases: ['remove'],
  cooldown: 10,
  usage: '',
  isUserAdmin: false,
  permissions: true,
  args: false
}