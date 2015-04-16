(function (global, factory) {
  'object' === typeof exports ? module.exports = factory() :
  'function' === typeof define && define.amd ? define(factory) :
  global.WaysAddressBar = factory();
}(this, function () {

  'use strict';

  // avoid requiring files if CJS or AMD is not supported
  var cjs = 'object' === typeof exports;
  var amd = 'function' === typeof define && define.amd;

  if(cjs || amd ){
    var Happens = require('happens');
    var Hash = require('./hash');
    var History = require('./history');
  };


  /**
   * Abstraction between #Hash and pushState
   */
  var AddressBar = (function() {

    if('undefined' === typeof window)
      throw new Error('ways-addressbar doesn\'t work outside a browser window');

    function AddressBar(){
      Happens(this);

      var self = this;
      var use_history_api = !!(window && window.history && window.history.pushState);

      this.api = new (use_history_api ? History : Hash);

      this.api.on('url:change', function(pathname){
        self.emit('url:change', pathname);
      });

      this.history = this.api.history;
    };

    AddressBar.prototype.pathname = function(){
      return this.api.pathname();
    };

    AddressBar.prototype.push = function(url, title, state){
      this.api.push(url, title, state);
    };

    AddressBar.prototype.replace = function(url, title, state){
      this.api.replace(url, title, state);
    };

    return AddressBar;
  })();

  return AddressBar;
}));