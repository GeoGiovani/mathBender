// Generates a URI-Encoded Query String
function parse (message) {

    // MathBender -invoked ==> Return
    if (message.search("/mathBender") != 0) return "";

    // MathBender invoked ==> Parse
    var len     = message.length;
    var query   = message.slice(12, len);
    if (!query) return "Please enter a valid expression :)";

    const querystring = require("querystring");
    query = querystring.stringify({'query': query});
    query = query.replace("query=", "");

    return "http://api.wolframalpha.com/v1/simple?appid=***REMOVED***&i=" 
            + query;
}

module.exports = parse; 