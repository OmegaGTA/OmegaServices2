const config = require(`../config.json`);
const Discord = require(`discord.js`);
const client = new Discord.Client();

exports.run = async (client, msg, args) => {
    if (!args[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        Embed(msg, 
`Use **${config.prefix}help <command>** for more details\n\n${client.commands.map(c => `**${config.prefix}${c.help.name}**${' '.repeat(longest - c.help.name.length)} - ${c.help.description}`).join('\n')}`,
        config.embed.colors.main, `= Command List =`);
    } else {
        let command = args[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            Embed(msg,
`${command.help.description}\nUsage: **${command.help.usage}**`,
            config.embed.colors.main, `= ${command.help.name} =`)
        }
    }
}

function Embed(msg, description, color, title) {
    embed = new Discord.RichEmbed()
    .setTitle(title)
    .setColor(color)
    .setDescription(description)
    .setTimestamp()
    .setFooter(config.embed.footer,config.embed.thumbnail)
    msg.channel.send({embed});
    return;
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: `help`,
  description: `Show info about the commands.`,
  usage: `help <command>`
}
