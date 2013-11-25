Event = require 'the-event'

module.exports = class History extends Event

  constructor:->
    
    if window.location.hash?
      @replace window.location.hash.substr 1

    if window.addEventListener?
      listen = 'addEventListener'
      event_name = 'popstate'
    else
      listen = 'attachEvent'
      event_name = 'onpopstate'

    window[listen] event_name, =>
      @emit 'url:change', window.location.pathname
    , false

  state:->
    window.state

  pathname:->
    window.location.pathname

  push:( url, title, state )->
    window.history.pushState state, title, url
    @emit 'url:change', window.location.pathname

  replace:( url, title, state )->
    window.history.replaceState state, title, url