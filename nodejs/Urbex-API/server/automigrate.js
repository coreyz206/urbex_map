var server = require('./server.js');
var ds = server.dataSources.locationDS;
var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'locations'];

ds.automigrate(lbTables, function(er) {
    if(er) throw er;
    console.log('Loopback tables [' + lbTables + '] have been created in ', ds.adapter.name);
    ds.disconnect;
});