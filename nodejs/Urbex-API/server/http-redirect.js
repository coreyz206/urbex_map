// set up plain http server
var http = express.createServer();

// route to redirect http to https
http.get('*', function(req, res) {  
    res.redirect('https://' + req.headers.host + req.url);
})

// have it listen on 8080
http.listen(8080);