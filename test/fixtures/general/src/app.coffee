Middleware = require '../../../../src'

middleware = new Middleware
middleware.on 'url:change', ->
  $('#location').val middleware.get_url()

$(document).ready ->
  $( 'a[href*="/"]' ).each ( index, item ) =>
    $( item ).click ( event ) ->
      middleware.push_state $( event.delegateTarget ).attr 'href'
      return off