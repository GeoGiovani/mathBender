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
        https.get(URL, async (resp) => {

            // Write image to file system
            await writeFile(resp);
            resolve ('success');

        }).on("error", (err) => {
            resolve(err.message); // Send Error message back
        });
    });
}

function writeFile(image) {
    return new Promise(resolve => {
        let r = image.pipe(fs.createWriteStream('./test.gif'));
        r.on('close', () => {
            resolve()
        });
    });
}

module.exports = generateEmbedding;


