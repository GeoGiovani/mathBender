// Parses input to determine if mathBender was invoked. If so, return query.
function parse(message) {

    var messageStart;

    // Check if MathBender was invoked
    if (message.search("/mb") == 0)              messageStart = 4;
    else if (message.search("/mathBender") == 0) messageStart = 12;
    else                                         return "";
  
    // Extract query
    var length = message.length;
    var query  = message.slice(messageStart, length);

    // Query has no content
    if (!query.replace(/\s/g, '').length) return "";    
    else                                  return query;
}

module.exports = parse; 