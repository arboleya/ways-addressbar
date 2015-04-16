var Middleware = require('../../../..');

// Approach used to AVOID subtle-close of the window, in order to make it
// possible to collect coverage analysis before closing the browser
// 
// This is only used by the test `push-to-hash`, check it out.

if (window.location.pathname.length > 1 && (window.history.pushState == null)){
  window.onbeforeunload = function() {
    return 'DO NOT CLICK ME!';
  };
}

$(document).ready(function() {
  
  var middleware = window.middleware = new Middleware;
  
  middleware.on('url:change', function(pathname) {
    $('#pathname').val(pathname);
  });

  $('#pathname').val(middleware.pathname());

  $('a[href*="/"]').each(function(index, item) {
    $(item).click(function(event) {
      middleware.push($(event.delegateTarget).attr('href'));
      return false;
    });
  });
});