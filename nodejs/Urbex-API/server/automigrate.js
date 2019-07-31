var server = require("./server");
var ds = server.dataSources.locationDS;
var lbTable = process.argv[2];

ds.automigrate(lbTable, function(er) {
  if (er) throw er;
  console.log(
    "Loopback table(s) [" + lbTable + "] created in ",
    ds.adapter.name
  );
  ds.disconnect();
});
