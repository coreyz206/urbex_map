var http = require('http');

// set up plain http server
var redirect = http.createServer();

// route to redirect http to https
redirect.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
    console.log('http request received')
})

// have it listen on 8080
redirect.listen(8080);