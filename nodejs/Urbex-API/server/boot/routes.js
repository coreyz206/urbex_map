'use strict';

var path = require('path');
var app = loopback();

module.exports = function setRoutes(server) {
  // Install a `/` route that redirects to map
  app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/map_main.html'));
  });
};
