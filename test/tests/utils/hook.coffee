should = do (require 'chai').should
request = require 'request'
coverage = require './coverage'
sauce = require './sauce'

user = process.env.SAUCE_USERNAME
key = process.env.SAUCE_ACCESS_KEY
build_id = process.env.TRAVIS_BUILD_NUMBER or (do new Date().getTime)

module.exports = (ctx, browser, caps, entry_url, base_url, notify, cover) ->

  passed = false
  failures = 0

  ctx.beforeAll (done)->
    browser.init caps, (err)->
      should.not.exist err
      browser.get entry_url, (err)->
        should.not.exist err

        # gives some time for initialization
        new setTimeout (-> done()), 1500


  ctx.afterAll (done)->

    if not cover
      return quit browser, failures, notify, done

    console.log '\nSaving test coverage..'
    browser.eval 'window.__coverage__', (err, cover_data)->
      coverage.save base_url, cover_data, ->
        quit browser, failures, notify, ->
          console.log 'Done.\n\n'
          do done

  ctx.beforeEach ->
    passed = false

  ctx.afterEach ->
    failures++ if not passed

  pass = (done)->
    passed = true
    do done


quit = (browser, failures, notify, done) ->
  browser.quit (err)->
    should.not.exist err
    if notify
      sauce.notify browser.sessionID, (failures is 0), done
    else
      done()