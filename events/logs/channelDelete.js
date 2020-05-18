const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1, 
    type: 'CHANNEL_DELETE'
  });

  const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelDeleted;
  
  const embed = new MessageEmbed()
    .setAuthor("Suppression d'un salon")
    .setColor("#dc143c")
    .setDescription(`**Action**: suppression de salon\n**Salon créé**: ${channel.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL())

  client.channels.cache.get('710923057467752489' || '711170282936729621').send(embed);
}