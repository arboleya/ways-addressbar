should = do (require 'chai').should
request = require 'request'
coverage = require './coverage'
sauce = require './sauce'

module.exports = (browser, base_url, notify, cover) ->

  passed = false
  failures = 0

  return {
    after:(done)->
      if not cover
        return quit browser, failures, notify, done

      browser.eval 'window.__coverage__', (err, cover_data)->
        should.not.exist err
        should.exist cover_data
        coverage.save base_url, cover_data, ->
          quit browser, failures, notify, done
      .done()

    before_each: -> passed = false
    after_each:-> failures++ if not passed
    pass: (done)->
      passed = true
      done()
  }

quit = (browser, failures, notify, done) ->
  browser.quit (err)->
    should.not.exist err
  .fin ->
    if notify
      sauce.notify browser.sessionID, (failures is 0), done
    else
      done()
  .done()