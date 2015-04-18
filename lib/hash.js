(function (global, factory) {
  "object" === typeof exports ? module.exports = factory() :
  "function" === typeof define && define.amd ? define(factory) : 
  global.Hash = factory();
}(this, function () {

  'use strict';

  // avoid requiring files if CJS or AMD is not supported
  var cjs = 'object' === typeof exports;
  var amd = 'function' === typeof define && define.amd;

  if(cjs || amd )
    var Happens = require('happens');

  /**
   * Hash class.
   * 
   * Handle all #Hash url's interaction with the browser.
   */
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
}));