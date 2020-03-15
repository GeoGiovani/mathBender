// Parses input to determine if mathBender was invoked. If so, return query.
function parse(message) {

    // MathBender not invoked ==> Return
    if (message.search("/mathBender") != 0) return "";  

    var len   = message.length;
    var query = message.slice(12, len);

    if (!query.replace(/\s/g, '').length) return ""; // Query has no content
    else                                  return query;
}

module.exports = parse; 