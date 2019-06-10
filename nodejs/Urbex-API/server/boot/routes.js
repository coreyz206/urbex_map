// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function(server) {
  // Install a `/` route that redirects to map
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    res.sendFile('map_main.html', root = '/root/urbex-git/urbex_map/nodejs/Urbex-API/client/')
  });
  server.use(router);
};
