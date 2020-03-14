// Generates a URL-encoded Query String
function encode(queury) {

    const querystring = require("querystring");
    var params = "&fontsize=20"  + "&timeout=2";  // Wolfram|Alpha parameters

    encodedQuery = querystring.stringify({'query': query});
    encodedQuery = query.replace("query=", "");

    return "https://api.wolframalpha.com/v1/simple?appid=***REMOVED***&i=" 
            + encodedQuery + params;
}

module.exports = encode; 