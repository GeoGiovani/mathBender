const Discord  = require('discord.js');
const https = require('https');
const fs = require('fs');


async function generateEmbedding(URL) {

    // Send query to Wolfram|Alpha 
    await queryWolfram(URL);

    // Generate a Discord Embedding
    embedding = new Discord.RichEmbed()
        .setTitle(' d[ o_0 ]b ')
        .attachFile('test.gif')
        .setImage('attachment://test.gif');

    return embedding;
}
  

// Send Wolfram|Alpha an HTTPS GET request for a GIF image of the query result
function queryWolfram(URL) {

    return new Promise(resolve => {
        https.get(URL, async (response) => {
            // Write the image to the file system
            await writeFile(response);
            resolve();
        }).on("error", (err) => {
            resolve(err.message);
        });
    });
}


// Writes image to the file system as a .gif file 
function writeFile(image) {

    return new Promise(resolve => {
        let write = image.pipe(fs.createWriteStream('./test.gif'));
        write.on('close', () => {
            resolve()
        });
    });
}

module.exports = generateEmbedding;


