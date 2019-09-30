var http = require('http');

// set up redirect server
var redirectServer = http.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://urbexmap.us" });
    res.end();
});

// have it listen on 80
redirectServer.listen(80);
console.log("Redirect server listening on port 80");