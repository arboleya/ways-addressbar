Event = require 'the-event'

module.exports = class Hash extends Event

  states: null
  current_state: null

  constructor:->
    @states = []

    hash = window.location.hash
    pathname = window.location.pathname

    if hash.length is 0
      if pathname.length > 1
        return window.location.href = '/#'+ pathname
      else
        window.location.href = '/#/'

    if window.addEventListener?
      listen = 'addEventListener'
      event_name = 'hashchange'
    else
      listen = 'attachEvent'
      event_name = 'onhashchange'

    window[listen] event_name, =>
      @emit 'url:change', @pathname()
    , false

  state:->
    @current_state

  pathname:->
    if (hash = window.location.hash).length >= 2
      return hash.toString().substr(1)
    return '/'

  push:( url, title, state )->
    @states.push @current_state = state
    document.title = title if title?
    window.location.hash = url

  replace:( url, title, state )->
    @states[states.length-1] = @current_state = state
    document.title = title if title?
    window.location.hash.replace url