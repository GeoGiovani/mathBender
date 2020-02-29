const querystring = require("querystring");


// Generates a URL-encoded query string
function encode(queury) {

    encodedQuery = querystring.stringify({'query': query});
    encodedQuery = query.replace("query=", "");
    return encodedQuery;
}

module.exports = encode; 