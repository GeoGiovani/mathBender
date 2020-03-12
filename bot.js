require('dotenv').config();

const Discord  = require('discord.js');
const client   = new Discord.Client();
const parser   = require('./utilities/parser.js');
const embedder = require('./utilities/embedder.js')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

client.on('message', async msg => {

    // Ignore messages from mathBender
    if (msg.author.bot) return;

    // Parse message and send Wolfram|Alpha a pull request if valid
    query = parser(msg.content);
    if (query) {
        msg.reply("hold on boss, let me look that up for you.")
        embedding = await embedder(query);
        msg.reply(embedding);
    } // Invalid
    else msg.reply("please enter a valid expression.");
});