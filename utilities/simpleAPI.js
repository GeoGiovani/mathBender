require('dotenv').config();


// Generate a link that will be recognized by the Wolfram|Alpha simple API
function generateSimpleAPILink(encodedQuery) {

    const wolframID = (process.env.WOLFRAM_TOKEN);
    const link = `https://api.wolframalpha.com/v1/simple?appid=${wolframID}&i= 
                  ${encodedQuery}&fontsize=20&timeout=2`;

    return link;
}

module.exports = generateSimpleAPILink;