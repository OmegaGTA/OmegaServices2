const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const token = require("./token.json");
const fs = require("fs");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
      let props = require(`./commands/${f}`);
      console.log(`Loading Command: ${props.help.name}.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
    console.log(`Loading a total of ${files.length} commands.`);
  });

fs.readdir('./events/', (err, files) => {
    if (err) console.error(err);
    console.log(`Loading a total of ${files.length} events.`);
    files.forEach(file => {
      const eventName = file.split(".")[0];
      const event = require(`./events/${file}`);
      if (eventName == "messageUpdate") client.on(eventName, event.bind(null));
      else {client.on(eventName, event.bind(null, client))};
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });



client.login(token.token)
