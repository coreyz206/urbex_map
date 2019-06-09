// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

module.exports = function(server) {
  // Install a `/` route that redirects to map
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    res.redirect('./map_main.html')
  });
  router.get('/.well-known/acme-challenge/pBGp__bpK2ceP_BDDuP9FHI50DvK62zHxajwUWPvSK8', function(req, res) {
    res.send('pBGp__bpK2ceP_BDDuP9FHI50DvK62zHxajwUWPvSK8.Rd7nuVTnx9w1mr3cWjkq_sLNKrN9TDoCQDp-ebObs1U')
  })
  server.use(router);
};
