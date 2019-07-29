// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-example-ssl
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var loopback = require("loopback");
var boot = require("loopback-boot");
var path = require("path");

var http = require("http");
var https = require("https");
var sslConfig = require("./ssl-config");

var app = (module.exports = loopback());

// boot scripts mount components like REST API
boot(app, __dirname);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../client/map_main.html"));
});

app.start = function() {
  process.on("uncaughtException", function(err) {
    console.log(err);
  });
  var server = null;
  var options = {
    key: sslConfig.privateKey,
    cert: sslConfig.certificate
  };
  server = https.createServer(options, app);
  server.listen(app.get("port"), function() {
    var baseUrl = "https://" + app.get("host") + ":" + app.get("port");
    app.emit("started", baseUrl);
    console.log("LoopBack server listening @ %s%s", baseUrl, "/");
    if (app.get("loopback-component-explorer")) {
      var explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
  return server;
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
