// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    var content = msg.content;
    if (content.search("/mathBender") === 0) {
        var len   = content.length;
        var query = content.slice(12, len);
        msg.reply("http://api.wolframalpha.com/v1/simple?appid=***REMOVED***&i=" + query);
    }
});