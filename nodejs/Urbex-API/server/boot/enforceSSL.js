"use strict";

var path = require("path");

module.exports = function(server) {
  var forceSsl = function(req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(["https://", req.get("Host"), req.url].join(""));
    }
    return next();
  };

  server.configure(function() {
    server.use(forceSsl);
  });
};
