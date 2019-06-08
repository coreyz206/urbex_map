var server = require('./server.js');
var ds = server.dataSources.locationDS;
var lbTable = 'locations';

ds.automigrate(lbTable, function(er) {
    if(er) throw er;
    console.log('Loopback table [' + lbTable + '] has been created in ', ds.adapter.name);
    ds.disconnect;
});