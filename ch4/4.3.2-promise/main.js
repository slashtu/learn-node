const readFile = require('./readFile.js');

readFile('./data', 'utf8').then(function(data){ console.log( 'then ---> ', data) })