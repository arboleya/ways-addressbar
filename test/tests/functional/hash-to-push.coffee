should = require('chai').should()
Hook = require '../utils/hook'

exports.test = ( browser, caps, base_url, notify, cover, timeout )->

  # the tests bellow does not run in IE 8/9
  is_ie_8_or_9 = caps.browserName is 'internet explorer'
  is_ie_8_or_9 and= parseInt(caps.version) < 10
  return if is_ie_8_or_9



  describe '[hash-to-push]', ->

    hook = Hook browser, base_url, notify, cover

    beforeEach hook.before_each
    afterEach hook.after_each
    after hook.after
    pass = hook.pass



    before (done)->
      browser.init caps, (err)->
        should.not.exist err
      .get base_url + '/#/entry', (err)->
        should.not.exist err
      .fin(done)
      .done()



    describe '[hash=/#/entry to pushState]', ->

      it 'should translate initial url when coming from hash urls', (done)->

        browser.eval 'window.location.pathname', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/entry'
        .eval 'window.location.hash', (err, hash)->
          should.not.exist err
          hash.should.equal ''
        .fin(-> pass done)
        .done()