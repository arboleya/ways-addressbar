Event = require 'the-event'

History = require './history'
Hash = require './hash'

module.exports = class RouterBrowser extends Event

  history: null

  constructor:->
    if window.history.pushState?
      @history = new History
    else
      @history = new Hash

    @history.on 'url:change', (pathname)=>
      @emit 'url:change', pathname

  pathname:->
    @history.pathname()

  state:->
    @history.state()

  push:( url, title, state )->
    @history.push url, title, state

  replace:( url, title, state )->
    @history.replace state, title, url