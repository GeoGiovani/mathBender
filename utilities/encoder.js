// Generates a URL-encoded Query String
function encode(queury) {

    const querystring = require("querystring");
    encodedQuery = querystring.stringify({'query': query});
    encodedQuery = query.replace("query=", "");
    return encodedQuery;
}

module.exports = encode; 