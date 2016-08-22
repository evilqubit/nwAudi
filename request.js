var http = require('http');
var message = "Here's looking at you, kid.";
var options = {
    host:'localhost', port:8080, path: '/', method :'POST'
}

var request = http.request(options, function(response){
    response.on('data',function(data){
        console.log(data.toString());
    })
});

request.write(message);
request.end();