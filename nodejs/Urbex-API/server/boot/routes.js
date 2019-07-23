'use strict';

var path = require('path');

module.exports = function setRoutes(server) {
  // Install a `/` route that redirects to map
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../../client/map_main.html'));
  });
  server.use(router);
};
