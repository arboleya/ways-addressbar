Event = require 'the-event'

module.exports = class History extends Event
  history: null

  constructor:->
    
    if window.location.hash?
      @replace window.location.hash.substr 1

    # THIS BECAME USELESS SINCE BROWSERS SUPPORTING PUSHSTATE
    # USES `addEventListener`

      # if window.addEventListener?
      #   listen = 'addEventListener'
      #   event_name = 'popstate'
      # else
      #   listen = 'attachEvent'
      #   event_name = 'onpopstate'

    window.addEventListener 'popstate', =>
      @emit 'url:change', window.location.pathname
    , false

    @history = window.history

  pathname:->
    window.location.pathname

  push:( url, title, state )->
    document.title = title
    window.history.pushState state, title, url
    @emit 'url:change', window.location.pathname

  replace:( url, title, state )->
    document.title = title
    window.history.replaceState state, title, url