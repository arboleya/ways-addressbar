require.register('../../../src/index', function(require, module, exports){
var Event, History, RouterHttp,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

History = require('html5-history-api');

Event = require('the-event');

module.exports = RouterHttp = (function(_super) {
  __extends(RouterHttp, _super);

  function RouterHttp() {
    var prefixes,
      _this = this;
    if (window.addEventListener != null) {
      prefixes = ['addEventListener', ''];
    } else {
      prefixes = ['attachEvent', 'on'];
    }
    window[prefixes[0]](prefixes[1] + 'popstate', function() {
      return _this.emit('url:change', _this.get_url());
    }, false);
  }

  RouterHttp.prototype.get_url = function() {
    return (history.location || document.location).pathname;
  };

  RouterHttp.prototype.push_state = function(url, title, state) {
    history.pushState(state, title, url);
    return this.emit('url:change', this.get_url());
  };

  RouterHttp.prototype.replace_state = function(url, title, state) {
    return history.replaceState(state, title, url);
  };

  return RouterHttp;

})(Event);

module.exports = RouterHttp;

}, {"html5-history-api":"../../../node_modules/html5-history-api/history","the-event":"../../../node_modules/the-event/lib/event"});
/*
//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic2VjdGlvbnMiOlt7Im9mZnNldCI6eyJsaW5lIjoxLCJjb2x1bW4iOjB9LCJtYXAiOnsidmVyc2lvbiI6MywiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZGV4LmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJIaXN0b3J5ID0gcmVxdWlyZSAnaHRtbDUtaGlzdG9yeS1hcGknXG5FdmVudCA9IHJlcXVpcmUgJ3RoZS1ldmVudCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBSb3V0ZXJIdHRwIGV4dGVuZHMgRXZlbnRcblxuICBjb25zdHJ1Y3RvcjotPlxuICAgIGlmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyP1xuICAgICAgcHJlZml4ZXMgPSBbJ2FkZEV2ZW50TGlzdGVuZXInLCAnJ11cbiAgICBlbHNlXG4gICAgICBwcmVmaXhlcyA9IFsnYXR0YWNoRXZlbnQnLCAnb24nXVxuXG4gICAgd2luZG93W3ByZWZpeGVzWzBdXSBwcmVmaXhlc1sxXSArICdwb3BzdGF0ZScsID0+XG4gICAgICBAZW1pdCAndXJsOmNoYW5nZScsIEBnZXRfdXJsKClcbiAgICAsIGZhbHNlXG5cbiAgZ2V0X3VybDotPlxuICAgIChoaXN0b3J5LmxvY2F0aW9uIHx8IGRvY3VtZW50LmxvY2F0aW9uKS5wYXRobmFtZVxuXG4gIHB1c2hfc3RhdGU6KCB1cmwsIHRpdGxlLCBzdGF0ZSApLT5cbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSBzdGF0ZSwgdGl0bGUsIHVybFxuICAgIEBlbWl0ICd1cmw6Y2hhbmdlJywgQGdldF91cmwoKVxuXG4gIHJlcGxhY2Vfc3RhdGU6KCB1cmwsIHRpdGxlLCBzdGF0ZSApLT5cbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSBzdGF0ZSwgdGl0bGUsIHVybFxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlckh0dHAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxzQkFBQTtHQUFBO2tTQUFBOztBQUFBLENBQUEsRUFBVSxJQUFWLFlBQVU7O0FBQ1YsQ0FEQSxFQUNRLEVBQVIsRUFBUSxJQUFBOztBQUVSLENBSEEsRUFHdUIsR0FBakIsQ0FBTjtDQUVFOztDQUFZLENBQUEsQ0FBQSxpQkFBQTtDQUNWLE9BQUE7T0FBQSxLQUFBO0NBQUEsR0FBQSwyQkFBQTtDQUNFLENBQWdDLENBQXJCLEdBQVgsRUFBQSxVQUFXO01BRGI7Q0FHRSxDQUEyQixDQUFoQixDQUFBLEVBQVgsRUFBQSxLQUFXO01BSGI7Q0FBQSxDQUs4QyxDQUFaLENBQWxDLEVBQU8sRUFBUyxDQUE4QixDQUE5QztDQUNHLENBQW1CLEVBQXBCLENBQUMsRUFBbUIsS0FBcEIsQ0FBQTtDQURGLENBRUUsR0FGNEM7Q0FOaEQsRUFBWTs7Q0FBWixFQVVRLElBQVIsRUFBUTtDQUNMLEdBQW9CLEdBQWIsQ0FBUCxHQUFEO0NBWEYsRUFVUTs7Q0FWUixDQWFrQixDQUFQLEVBQUEsSUFBRSxDQUFiO0NBQ0UsQ0FBeUIsQ0FBekIsQ0FBQSxDQUFBLEVBQU8sRUFBUDtDQUNDLENBQW1CLEVBQW5CLEdBQW1CLElBQXBCLENBQUE7Q0FmRixFQWFXOztDQWJYLENBaUJxQixDQUFQLEVBQUEsSUFBRSxJQUFoQjtDQUNVLENBQW9CLENBQTVCLEVBQUEsRUFBTyxJQUFQLENBQUE7Q0FsQkYsRUFpQmM7O0NBakJkOztDQUZ3Qzs7QUFzQjFDLENBekJBLEVBeUJpQixHQUFYLENBQU4sR0F6QkEifX1dfQ==
*/