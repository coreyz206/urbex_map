'use strict';

var path = require('path');
var loopback = require('loopback');
var app = loopback();

module.exports = function() {
  // Install a `/` route that redirects to map
  app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/map_main.html'));
  });
};
