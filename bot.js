const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("DoritoBot activated.")
})

client.login(process.env.BOT_TOKEN);