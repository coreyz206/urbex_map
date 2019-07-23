"use strict";

var path = require('path');
var loopback = require('loopback');
var app = loopback();

module.exports = function() {
  var forceSsl = function(req, res, next) {
    if (req.headers["forwarded-proto"] !== "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    return next();
  };

  app.configure(function() {
    app.use(forceSsl);
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname + '/../../client/map_main.html'));
    });
  });
};
