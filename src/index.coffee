Event = require 'the-event'

History = require './history'
Hash = require './hash'

module.exports = class RouterBrowser extends Event

  api: null

  constructor:->
    if window.history.pushState?
      @api = new History
    else
      @api = new Hash
    
    @api.on 'url:change', (pathname)=>
      @emit 'url:change', pathname

    @history = @api.history

  pathname:->
    @api.pathname()

  push:( url, title, state )->
    @api.push url, title, state

  replace:( url, title, state )->
    @api.replace url, title, state