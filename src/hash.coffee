Event = require 'the-event'

class PseudoHistory extends Array
  state: null


module.exports = class Hash extends Event

  history: null

  constructor:->
    @history = new PseudoHistory

    hash = window.location.hash
    pathname = window.location.pathname

    if hash is ''
      if pathname.length > 1
        window.location.href = '/#'+ pathname
      else
        window.location.href = '#/'

    window.attachEvent 'onhashchange', =>
      @emit 'url:change', @pathname()
    , false

  pathname:->
    window.location.hash

  push:( url, title, state )->
    @history.push @history.state = state
    window.location.hash = url
    document.title = title if title?
    @emit 'url:change', @pathname()

  replace:( url, title, state )->
    @history[@history.length-1] = @history.state = state
    document.title = title if title?
    window.location.hash.replace url