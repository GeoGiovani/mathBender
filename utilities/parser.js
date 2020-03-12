// Generates a URL-encoded Query String
function parse (message) {

    // MathBender was not invoked ==> Return
    if (message.search("/mathBender") != 0) return "";

    // MathBender was invoked ==> Parse
    var len     = message.length;
    var query   = message.slice(12, len);
    if (!query.replace(/\s/g, '').length) return null;  // Query has no content

    // URL-encode the query 
    const querystring = require("querystring");
    query = querystring.stringify({'query': query});
    query = query.replace("query=", "");

    return "https://api.wolframalpha.com/v1/simple?appid=***REMOVED***&i=" 
            + query;
}

module.exports = parse; 