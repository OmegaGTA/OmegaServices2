const Discord = require(`discord.js`);
const config = require("../config.json");

module.exports = (client, msg) => {
    console.log(`Ready!`);
    client.user.setPresence({ status: 'online', game: { name: `-buy | Webhost | OmegaServices |` } });
}
