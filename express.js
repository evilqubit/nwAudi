var express = require('express');
var url = require('url');
var request = require('request');
app = express();
var logger = require('./logger.js');
app.use(logger);
app.get('/tweets/:username',function (req,response) {
    var username = req.params.username;
    var options = {
    protocol:"http",
    host: "api.twitter.com",
    pathname: "/1/statuses/user_timeline.json",
    query: {screen_name: username, count:10}
    }

    var urlformat = url.format(options);
    console.log(urlformat);
    response.write("hello");
    response.end();
    //response.sendFile(__dirname + "/README.md")
    //request(urlformat).pipe(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
