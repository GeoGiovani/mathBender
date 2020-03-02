// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const parser = require('./utilities/parser.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', msg => {
    var content = msg.content;
    if (content.search("/mathBender") === 0) {
        var len   = content.length;
        var query = content.slice(12, len);
        query = parser(query);
        msg.reply("http://api.wolframalpha.com/v1/simple?appid=***REMOVED***&i=" + query);
    }
});