Event = require 'happens'

module.exports = class History extends Event
  history: window.history

  constructor:->
    popped = false
    initial = @pathname()

    if window.location.hash?.length
      @replace window.location.hash.substr 1

    window.addEventListener 'popstate', =>

      # skips first pop if present (like in chrome)
      if initial is @pathname() and not popped
        return popped = true

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