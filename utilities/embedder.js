const Discord  = require('discord.js');
const https = require('https');
const fs = require('fs');

async function generateEmbedding(URL) {

    // Obtain result from Wolfram|Alpha
    await queryWolfram(URL);

    // Generate a Discord Embedding
    embedding = new Discord.RichEmbed()
        .setTitle(' d[ o_0 ]b ')
        .attachFile('test.gif')
        .setImage('attachment://test.gif');

    return embedding;
}
        
function queryWolfram(URL) {

    // Send Wolfram|Alpha an HTTPS GET request
    return new Promise(resolve => {
        console.log("Sending GET request to Wolfram|Alpha");
        https.get(URL, (resp) => {

            // Write image to file system
            resp => resp.pipe(fs.createWriteStream('./test.gif'));
            resolve( '/test.gif' );

        }).on("error", (err) => {
            resolve(err.message); // Send Error message back
        });
    });
}

module.exports = generateEmbedding;


