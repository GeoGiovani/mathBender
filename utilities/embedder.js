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

    if(valid) {
        const link  = simpleAPI(encodedQuery);
        embedding = new Discord.RichEmbed()
            .setTitle(query)
            .setColor('#0099ff')
            .attachFiles([{name: "image.gif", attachment: link}])
            .setImage('attachment://image.gif');
    }
    else {
        embedding = new Discord.RichEmbed()
            .setTitle("Error occurred, please double check expression.")
            .setColor('#FF5733')
    }     
    return embedding;
}
  
module.exports = generateEmbedding;