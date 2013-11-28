Middleware = require '../../../../src/index'

if window.location.pathname.length > 1 and not window.history.pushState?
  # used to ALWAYS post coverage before leaving page
  # this is needed for testing the url redirects while
  # preserving coverage analysys
  window.onbeforeunload = ->
    return 'DO NOT CLICK ME!'



$(document).ready ->
  middleware = new Middleware
  middleware.on 'url:change', (pathname)->
      $('#pathname').val pathname
  window.middleware = middleware
  $('#pathname').val middleware.pathname()
  $( 'a[href*="/"]' ).each ( index, item ) =>
    $( item ).click ( event ) ->
      middleware.push $( event.delegateTarget ).attr 'href'
      return off