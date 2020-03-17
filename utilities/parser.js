// Parses input to determine if mathBender was invoked. If so, return query.
function parse(message) {

    // MathBender was not invoked ==> Return
    if (message.search("/mathBender") != 0) return "";  

    var length = message.length;
    var query  = message.slice(12, length);

    // Query has no content
    if (!query.replace(/\s/g, '').length) return "";    
    else                                  return query;
}

module.exports = parse; 