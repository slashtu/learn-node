const readFile = require('./readFile.js');
const fs = require('fs');

readFile('./data', 'utf8').then(function(data){ console.log( 'then ---> ', data) })