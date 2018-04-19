const config = require(`../config.json`);
const Discord = require(`discord.js`);

exports.run = async (client, msg, args) => {
    var http = require('http');
    http.get('http://host.omegaservices.com/', function (res) {
        Embed(msg, `The website is up.`, config.embed.colors.main)
    }).on('error', function(e) {
        Embed(msg, `The website is down.`, config.embed.colors.main, `Server Status`)
    });
    
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
  name: `status`,
  description: `Show the website status.`,
  usage: `status`
}
