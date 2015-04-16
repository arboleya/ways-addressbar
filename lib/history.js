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
   * History class.
   * 
   * Handle all /push/state url's interaction with the browser.
   */
  var History = (function() {
    function History(){

      Happens(this);

      this.history = window.history;

      var self = this;
      var popped = false;
      var initial = this.pathname();
      var hash = window.location.hash || null;

      if(hash && hash.length)
        this.replace(window.location.hash.substr(1));

      window.addEventListener('popstate', function(){
        // skips first pop if present (like in chrome)
        if(initial == self.pathname() && !popped)
          return popped = true;

        self.emit('url:change', window.location.pathname);
      }, false);
    };


    History.prototype.pathname = function(){
      return window.location.pathname;
    }

    History.prototype.push = function(url, title, state){
      window.history.pushState(state, title, url);
      if(title) document.title = title;
      this.emit('url:change', window.location.pathname);
    }

    History.prototype.replace = function(url, title, state){
      window.history.replaceState(state, title, url);
      if(title) document.title = title;
    };

    return History;
  })();

  return History;
}));