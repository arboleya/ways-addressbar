Event = require 'the-event'

class PseudoHistory extends Array
  state: null


module.exports = class Hash extends Event

  history: null

  constructor:->
    @history = new PseudoHistory

    hash = window.location.hash
    pathname = window.location.pathname

    if hash.length is 0
      if pathname.length > 1
        window.location.href = '/#'+ pathname
      else
        window.location.href = '#/'

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
      
    window.attachEvent 'onhashchange', =>
      @emit 'url:change', @pathname()
    , false

  pathname:->
    window.location.hash.toString().substr(1)

  push:( url, title, state )->
    @history.push @history.state = state
    window.location.href = '#' + url
    document.title = title if title?

  replace:( url, title, state )->
    @history[@history.length-1] = @history.state = state
    document.title = title if title?
    window.location.hash.replace url