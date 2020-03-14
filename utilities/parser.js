// Parses input to determine if mathBender was invoked. If so, return query.
function parse(message) {

    // MathBender was not invoked ==> Return
    if (message.search("/mathBender") != 0) return "";

    // MathBender was invoked ==> Parse
    var len   = message.length;
    var query = message.slice(12, len);

    // Check if query has no content
    if (!query.replace(/\s/g, '').length) 
        return null;  

    return query;
}

module.exports = parse; 