const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message,args) => {
  const user_mention = message.mentions.users.first();
    message.channel.send(`Voici le tag de la personne mentionné: ${user_mention.tag}`);
} 

module.exports.help = MESSAGES.COMMANDS.INFO.USERINFO;
