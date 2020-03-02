// Generates a URI-Encoded Query String
function parse (query) {

    if (!query) return "";

    var querystring = require("querystring");
    query = querystring.stringify({'query': query});
    query = query.replace("query=", "");

    return query;
}

module.exports = parse; 