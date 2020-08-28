require('dotenv').config();

const Discord  = require('discord.js');
const client   = new Discord.Client();
const parser   = require('./utilities/parser.js');
const embedder = require('./utilities/embedder.js');


// Log in mathBender
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.login(process.env.DISCORD_TOKEN);
process.env.DISCORD_TOKEN = ""

// Monitor channel messages, respond if mathBender is called by a user.
client.on('message', async msg => {

    // Ignore messages from mathBender
    if (msg.author.bot) return;

    // Parse message for a query and send Wolfram|Alpha a request if valid
    query = parser(msg.content);
    if (query) {
        msg.reply("hold on boss, let me look that up for you.")
        embedding = await embedder(query);
        await msg.reply(embedding);
    }
});