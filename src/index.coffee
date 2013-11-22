History = require 'html5-history-api'
Event = require 'the-event'

module.exports = class RouterHttp extends Event

  constructor:->
    if window.addEventListener?
      prefixes = ['addEventListener', '']
    else
      prefixes = ['attachEvent', 'on']

    window[prefixes[0]] prefixes[1] + 'popstate', =>
      @emit 'url:change', @get_url()
    , false

  get_url:->
    (history.location || document.location).pathname

  push_state:( url, title, state )->
    history.pushState state, title, url

  replace_state:( url, title, state )->
    history.replaceState state, title, url

module.exports = RouterHttp