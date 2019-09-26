var path = require('path'),
fs = require("fs");
exports.privateKey = fs.readFileSync('/etc/letsencrypt/live/urbexmap.us/privkey.pem').toString();
exports.certificate = fs.readFileSync('/etc/letsencrypt/live/urbexmap.us/fullchain.pem').toString();