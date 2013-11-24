require.register('src/app', function(require, module, exports){
var Middleware, middleware;

Middleware = require('../../../../src');

middleware = new Middleware;

middleware.on('url:change', function() {
  return $('#location').val(middleware.get_url());
});

$(document).ready(function() {
  var _this = this;
  return $('a[href*="/"]').each(function(index, item) {
    return $(item).click(function(event) {
      middleware.push_state($(event.delegateTarget).attr('href'));
      return false;
    });
  });
});

}, {"../../../../src":"../../../src/index"});
/*
//@ sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic2VjdGlvbnMiOlt7Im9mZnNldCI6eyJsaW5lIjoxLCJjb2x1bW4iOjB9LCJtYXAiOnsidmVyc2lvbiI6MywiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXMiOlsic3JjL2FwcC5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsiTWlkZGxld2FyZSA9IHJlcXVpcmUgJy4uLy4uLy4uLy4uL3NyYydcblxubWlkZGxld2FyZSA9IG5ldyBNaWRkbGV3YXJlXG5taWRkbGV3YXJlLm9uICd1cmw6Y2hhbmdlJywgLT5cbiAgJCgnI2xvY2F0aW9uJykudmFsIG1pZGRsZXdhcmUuZ2V0X3VybCgpXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gICQoICdhW2hyZWYqPVwiL1wiXScgKS5lYWNoICggaW5kZXgsIGl0ZW0gKSA9PlxuICAgICQoIGl0ZW0gKS5jbGljayAoIGV2ZW50ICkgLT5cbiAgICAgIG1pZGRsZXdhcmUucHVzaF9zdGF0ZSAkKCBldmVudC5kZWxlZ2F0ZVRhcmdldCApLmF0dHIgJ2hyZWYnXG4gICAgICByZXR1cm4gb2ZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsa0JBQUE7O0FBQUEsQ0FBQSxFQUFhLElBQUEsR0FBYixPQUFhOztBQUViLENBRkEsRUFFYSxPQUFiOztBQUNBLENBSEEsQ0FHQSxDQUE0QixNQUFBLENBQWxCLEVBQVY7Q0FDRSxFQUFBLElBQW1CLEVBQW5CLENBQTZCLENBQTdCO0NBRDBCOztBQUc1QixDQU5BLEVBTWtCLEVBQWxCLEdBQUEsQ0FBa0I7Q0FDaEIsS0FBQSxNQUFBO0NBQUEsQ0FBa0MsQ0FBVCxDQUF6QixDQUF5QixJQUF6QixLQUFBO0NBQ0UsRUFBZ0IsQ0FBaEIsQ0FBQSxJQUFrQixFQUFsQjtDQUNFLEdBQXNCLENBQVEsQ0FBOUIsSUFBVSxJQUFZO0NBQ3RCLElBQUEsUUFBTztDQUZULElBQWdCO0NBRGxCLEVBQXlCO0NBRFQifX1dfQ==
*/