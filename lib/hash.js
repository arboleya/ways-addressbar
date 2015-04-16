(function (global, factory) {
  module && module.exports ? module.exports = factory() :
  define && define.amd ? define(factory) : global.AddressBar = factory();
}(this, function () {

  'use strict';

  // avoid requiring files if CJS or AMD is not supported
  if((module && module.exports) || (define && defined.amd)){
    var Happens = require('happens');
  };

  /**
   * Hash class.
   * 
   * Handle all #Hash url's interaction with the browser.
   */
  var Hash = (function() {
    function Hash(){

      Happens(this);

      this.history = [];
      this.history.state = null;

      var self = this;
      var hash = window.location.hash;
      var pathname = window.location.pathname;

      if(hash === '')
        if(pathname.length > 1)
          window.location.href = '/#'+ pathname;
        else
          window.location.href = '#/';

      window.attachEvent('onhashchange', function(){
        self.emit('url:change', self.pathname())
      }, false);
    }

    Hash.prototype.pathname = function (){
      return window.location.hash;
    };

    Hash.prototype.push = function(url, title, state){
      this.history.push(this.history.state = state);
      window.location.hash = url;
      if(title) document.title = title;
      this.emit('url:change', this.pathname());
    };

    Hash.prototype.replace = function(url, title, state){
      this.history[this.history.length-1] = this.history.state = state;
      if(title) document.title = title;
      window.location.hash.replace(url);
    };

    return Hash;
  })();

  return Hash;
}));