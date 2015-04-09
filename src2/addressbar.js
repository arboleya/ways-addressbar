(function (global, factory) {
  module && module.exports ? module.exports = factory() :
  define && define.amd ? define(factory) : global.AddressBar = factory();
}(this, function () {

  'use strict';

  // avoid requiring files if CJS or AMD is not supported
  if((module && module.exports) || (define && defined.amd)){
    var Happens = require('happens');
    var Hash = require('./hash');
    var History = require('./history');
  };


  /**
   * Abstraction between #Hash and pushState
   */
  var AddressBar, Hash, History;

  AddressBar = (function() {
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