const Deferred = require('./deferred.js');
const fs = require('fs');

var readFile = function( file, encoding ){
  var deferred = new Deferred();
  fs.readFile( file, encoding, deferred.resolve.bind(deferred));

  return deferred.promise;
}

module.exports = readFile; 