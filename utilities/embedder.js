const Discord   = require('discord.js');
const encoder   = require('../utilities/encoder.js');
const validator = require('../utilities/queryCheck.js'); 
const simpleAPI = require('../utilities/simpleAPI.js');


// Generates an embedding containing an image from Wolfram|Alpha
async function generateEmbedding(query) {

    // Generate a URL-encoded query
    const encodedQuery = encoder(query);
    
    // Verify that the encoded query will generate a response
    const valid = await validator(encodedQuery);

    if (valid) {
        const link = simpleAPI(encodedQuery);
        embedding  = new Discord.RichEmbed()
            .setColor('#00d871')
            .setTitle(query)
            .attachFiles([{name: "image.gif", attachment: link}])
            .setImage('attachment://image.gif');
    }
    else {
        embedding = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle("I encountered an error, please check your expression.")
    }     
    return embedding;
}
  
module.exports = generateEmbedding;