should = require('chai').should()
Hook = require '../utils/hook'

exports.test = ( browser, caps, base_url, notify, cover, timeout )->

  # the tests bellow runs ONLY in IE 8/9
  is_ie_8_or_9 = caps.browserName is 'internet explorer'
  is_ie_8_or_9 and= parseInt(caps.version) < 10
  return if not is_ie_8_or_9



  describe '[push-to-hash]', ->

    hook = Hook browser, base_url, notify, cover

    beforeEach hook.before_each
    afterEach hook.after_each
    after hook.after
    pass = hook.pass



    before (done)->
      browser.init caps, (err)->
        should.not.exist err
      .get base_url + '/entry', (err)->
        should.not.exist err
      .fin ->
        # giving some time for the good IE
        new setTimeout done, 2000
      .done()



    describe '[push-to-hash] (ie 8/9 only)', ->

      it 'should redirect initial page when needed', (done)->

        browser.dismissAlert (err)->
          should.not.exist err
        .execute 'window.onbeforeunload = null', (err)->
          should.not.exist err
        .eval 'window.location.pathname', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/entry'
        .then().eval 'window.location.hash', (err, hash)->
          should.not.exist err
          hash.should.equal ''
        .fin(-> pass done)
        .done()