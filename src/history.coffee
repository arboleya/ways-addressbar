Event = require 'the-event'

module.exports = class History extends Event
  history: window.history

  constructor:->
    
    if window.location.hash?.length
      @replace window.location.hash.substr 1

    # THIS BECAME USELESS SINCE BROWSERS THAT DOESN'T SUPPORT
    # PUSHSTATE USES `attachEvent` (ie8 and ie9)

      # if window.addEventListener?
      #   listen = 'addEventListener'
      #   event_name = 'popstate'
      # else
      #   listen = 'attachEvent'
      #   event_name = 'onpopstate'
      #   
      # window[listen] event_name, =>

    window.addEventListener 'popstate', =>
      @emit 'url:change', window.location.pathname
    , false

  pathname:->
    window.location.pathname

  push:( url, title, state )->
    window.history.pushState state, title, url
    document.title = title if title?
    @emit 'url:change', window.location.pathname

  replace:( url, title, state )->
    window.history.replaceState state, title, url
    document.title = title if title?