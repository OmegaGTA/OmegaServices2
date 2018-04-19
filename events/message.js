const Discord = require(`discord.js`);
const config = require("../config.json");

module.exports = (client, msg) => {
  if (!msg.guild) return;
  if (!msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES')) return msg.author.send(`:x: I don't have permissions to **send messages** on **${msg.guild.name}**`).catch(() => {return})
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;
  let command = msg.content.toLowerCase().split(' ')[0].slice(config.prefix.length);
  let params = msg.content.split(' ').slice(1);
  let cmd;
  client.cmd = cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, msg, params);
  }
};
