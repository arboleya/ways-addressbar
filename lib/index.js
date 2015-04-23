var u = 'undefined', o = 'object';
(function (klass){
  o === typeof exports ? (module.exports = klass) : 
  o === typeof Package && Package.meteor ? WaysAddressBar = klass : 
  this.WaysAddressBar = klass;
})(
  _module.apply(null, [
    u !== typeof Happens ? Happens : require('happens'),
    u !== typeof WaysAddressBarHash ? WaysAddressBarHash : require('./hash'),
    u !== typeof WaysAddressBarHistory ? WaysAddressBarHistory : require('./history')
  ])
);

function _module(Happens, Hash, History){
 'use strict';

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
}