const Discord  = require('discord.js');
const https    = require('https');
const fs       = require('fs');
const encoder  = require('../utilities/encoder.js');

// Generates an embedding containing an image from Wolfram|Alpha
async function generateEmbedding(query) {

    // Generate a URL-encoded link
    const link = encoder(query);

    // Generate the Discord Embedding
    embedding = new Discord.RichEmbed()
        .setTitle(query)
        .setColor('#0099ff')
        .attachFiles([{name: "image.gif", attachment: link}])
        .setImage('attachment://image.gif');

    return embedding;
}
  
module.exports = generateEmbedding;