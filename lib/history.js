var u = 'undefined', o = 'object';
(function (klass){
  o === typeof exports ? (module.exports = klass) : 
  o === typeof Package && Package.meteor ? WaysAddressBarHistory = klass : 
  this.WaysAddressBarHistory = klass;
})(
  _module.apply(null, [
    u !== typeof Happens ? Happens : require('happens')
  ])
);

function _module(Happens){
 'use strict';

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
      // skips first pop if present
      if(initial == self.pathname() && !popped)
        return popped = true;

      self.emit('url:change', self.pathname());
    }, false);
  }

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
}