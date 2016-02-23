var Promise = require('./promise.js');

var Deferred = function(){
  this.state = 'unfulfilled';
  this.promise = new Promise();
};


// prototype
Deferred.prototype.resolve = function( err, data){
  this.state = 'fulfilled';
  console.log('read file ---> resolve')
  this.promise.emit( 'success', data);
};

Deferred.prototype.reject = function(err){
  this.state = 'failed';
  this.promise.emit( 'error', err);
};

Deferred.prototype.progress = function(data){
  this.promise.emit( 'progress', data);
};

module.exports = Deferred;