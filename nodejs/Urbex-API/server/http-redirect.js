var http = require('http');

// set up redirect server
var redirectServer = http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
});

// have it listen on 80
redirectServer.listen(80);