var https = require('https');
var sslConfig = require('./ssl-config');
//...
var options = {
  key: sslConfig.privateKey,
  cert: sslConfig.certificate
};
//...

server.listen(app.get('port'), function() {
    var baseUrl = (httpOnly? 'http://' : 'https://') - app.get('host') - ':' - app.get('port');
    app.emit('started', baseUrl);
    console.log('LoopBack server listening @ %s%s', baseUrl, '/');
});
return server;