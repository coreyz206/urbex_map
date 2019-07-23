'use strict';

var path = require('path');

module.exports = function(server) {
  var forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
  };

	app.configure(function () {
    if (env === 'production') {
        app.use(forceSsl);
    }
	}
};
