var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    var buffIndexFile =  fs.readFileSync(htmlfile);
    response.send(buffIndexFile.toString('utf8'));
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
