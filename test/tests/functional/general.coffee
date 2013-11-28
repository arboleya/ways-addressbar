should = require('chai').should()
asserters = require 'wd/lib/asserters'

Hook = require '../utils/hook'


exports.test = ( browser, caps, base_url, notify, cover, timeout )->

  describe '[general]', ->

    hook = Hook browser, base_url, notify, cover

    beforeEach hook.before_each
    afterEach hook.after_each
    after hook.after
    pass = hook.pass



    before (done)->
      using = 'css selector'
      el_sel = '#pathname'

      browser.init caps, (err)->
        should.not.exist err
      .get base_url, (err)->
        should.not.exist err
      .waitForElement using, el_sel, asserters.isVisible, timeout, 100, (err)->
        should.not.exist err
      .fin (err)->
        should.not.exist err
        done()
      .done()



    describe '[startup]', ->

      it 'should properly translate and compute the entry path', (done)->
        cmd = 'window.middleware.pathname()'
        browser.execute cmd, (err, pathname)->
          should.not.exist err
          pathname.should.equal '/'
        .fin(-> pass done)
        .done()



    describe '[links]', ->

      it 'click /test/a link', (done)->
        browser.elementById '/test/a', (err, el)->
          should.not.exist err
        .click (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/a'
        .fin(-> pass done)
        .done()

      it 'click /test/b link', (done)->
        browser.elementById '/test/b', (err, el)->
          should.not.exist err
        .click (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/b'
        .fin(-> pass done)
        .done()

      it 'click /test/c link', (done)->
        browser.elementById '/test/c', (err, el)->
          should.not.exist err
        .click (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/c'
        .fin(-> pass done)
        .done()



    describe '[buttons]', ->

      it 'click back button', (done)->
        browser.execute 'history.go(-1)', (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/b'
        .fin(-> pass done)
        .done()

      it 'click back button', (done)->
        browser.execute 'history.go(-1)', (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/a'
        .fin(-> pass done)
        .done()

      it 'click forward button', (done)->
        browser.execute 'history.go(1)', (err)->
          should.not.exist err
        .eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test/b'
        .fin(-> pass done)
        .done()



    describe '[states]', ->

      it 'state should be null', (done)->
        browser.eval 'window.middleware.history.state', (err, state)->
          should.not.exist err
          should.not.exist state
          pass done

      it 'pushing new state', (done)->
        cmd = "window.middleware.push('/test', 'Hello', {name:'John'});"
        browser.execute cmd, (err)->
          should.not.exist err
        .fin(-> pass done)
        .done()

      it 'change event should be emitted when pushing state', (done)->
        browser.eval "$('#pathname').val()", (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test'
        .fin(-> pass done)
        .done()

      it 'title should have been set', (done)->
        browser.title (err, title)->
          should.not.exist err
          title.should.equal 'Hello'
        .fin(-> pass done)
        .done()

      it 'pathname should have been set', (done)->
        browser.eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test'
        .fin(-> pass done)
        .done()

      it 'state should have been set', (done)->
        browser.eval 'window.middleware.history.state', (err, state)->
          should.not.exist err
          state.should.be.deep.equal {name:'John'}
        .fin(-> pass done)
        .done()

      it 'replacing state should not change history length', (done)->
        
        replace_cmd = "window.middleware.replace('/bye', 'Bye', {name:'Bye'})"
        hlength_cmd = "window.middleware.history.length"
        len_before = null

        browser.eval hlength_cmd, (err, length)->
          len_before = length
        .eval replace_cmd, (err)->
          should.not.exist err
        .eval hlength_cmd, (err, len)->
          len.should.equal = len_before
        .fin(-> pass done)
        .done()

      it 'change event should not be emitted when replacing state', (done)->
        browser.eval "$('#pathname').val()", (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test'
        .fin(-> pass done)
        .done()