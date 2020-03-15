const https = require('https');


// Checks that an encodedQuery will generate a response from the server
function validate(encodedQuery) {
    
    link = "https://www.wolframalpha.com/queryrecognizer/query.jsp?appid=DEMO&mode=Default&i=" 
            + encodedQuery + "&output=json";

    return new Promise(resolve => {
        https.get(link, function(response){
            var body = '';
        
            response.on('data', function(chunk) { 
                body += chunk; 
            });

            response.on('end', function(){
                const json = JSON.parse(body);
                resolve(json.query[0].accepted === 'true');
            });
        }).on('error', function(){
              resolve(0);
        });
    });
}

module.exports = validate;