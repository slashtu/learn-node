const EventEmitter = require('events');
const util = require('util');

var Promise = function(){
  EventEmitter.call(this);
};

util.inherits( Promise, EventEmitter);


// prototype
Promise.prototype.then = function( fulfilledHandler, errorHandler, progressHandler){
  if( typeof fulfilledHandler === 'function'){
    this.once('success', fulfilledHandler);
  }

  if( typeof errorHandler === 'function'){
    this.once('error', errorHandler);
  }

  if( typeof progressHandler === 'function'){
    this.once('progress', progressHandler);
  }

  return this;
}

module.exports = Promise;