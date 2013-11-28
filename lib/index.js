// Generated by CoffeeScript 1.6.3
var Event, Hash, History, RouterBrowser,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Event = require('the-event');

History = require('./history');

Hash = require('./hash');

module.exports = RouterBrowser = (function(_super) {
  __extends(RouterBrowser, _super);

  RouterBrowser.prototype.api = null;

  function RouterBrowser() {
    var _this = this;
    if ((window.history.pushState != null) && false) {
      this.api = new History;
    } else {
      this.api = new Hash;
    }
    this.api.on('url:change', function(pathname) {
      return _this.emit('url:change', pathname);
    });
    this.history = this.api.history;
  }

  RouterBrowser.prototype.pathname = function() {
    return this.api.pathname();
  };

  RouterBrowser.prototype.push = function(url, title, state) {
    return this.api.push(url, title, state);
  };

  RouterBrowser.prototype.replace = function(url, title, state) {
    return this.api.replace(url, title, state);
  };

  return RouterBrowser;

})(Event);