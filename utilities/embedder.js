const Discord  = require('discord.js');
const https = require('https');
const fs = require('fs');

// Queries Wolfram|Alpha for a result image using the URL provided by link and
// generates a Discord embedding with the returned image.
async function generateEmbedding(link, query) {

    // Send query to Wolfram|Alpha 
    await queryWolfram(link);

    // Generate the Discord Embedding
    embedding = new Discord.RichEmbed()
        .setTitle(query)
        .setColor('#0099ff')
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