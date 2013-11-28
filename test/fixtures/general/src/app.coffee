Middleware = require '../../../../src/index'

# Approach used to AVOID subtle-close of the window, in order to make it
# possible to collect coverage analysis before closing the browser
# 
# This is only used by the test `push-to-hash`, check it out.
if window.location.pathname.length > 1 and not window.history.pushState?
  window.onbeforeunload = ->
    return 'DO NOT CLICK ME!'



$(document).ready ->

  middleware = window.middleware = new Middleware

  middleware.on 'url:change', (pathname)->
    $('#pathname').val pathname

  $('#pathname').val middleware.pathname()

  $( 'a[href*="/"]' ).each ( index, item ) =>
    $( item ).click ( event ) ->
      middleware.push $( event.delegateTarget ).attr 'href'
      return off