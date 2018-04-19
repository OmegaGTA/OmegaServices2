const config = require(`../config.json`);
const Discord = require(`discord.js`);

exports.run = async (client, msg, args) => {
    Embed(msg, `Website link:\nhttp://host.omegaservices.com/`, config.embed.colors.main, `Buy Link`)
}

function Embed(msg, description, color, title) {
  embed = new Discord.RichEmbed()
  .setTitle(title)
  .setColor(color)
  .setDescription(description)
  .setTimestamp()
  .setFooter(config.embed.footer, config.embed.thumbnail)
  msg.channel.send({embed});
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: `buy`,
  description: `Show the website link.`,
  usage: `buy`
}
