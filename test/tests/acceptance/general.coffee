should = do (require 'chai').should
# conds = require '../utils/conditions'

exports.test = ( browser, pass, timeout )->

  describe '[middleware]', ->

    # menu
    describe '[menu]', ->
      it 'wait until menu is visible', (done)->
        browser.waitForElementByClassName 'menu', timeout, (err)->
          should.not.exist err
          browser.elementByClassName 'menu', (err, el)->
            should.not.exist err
            should.exist el
            pass done

    # clicking links
    describe '[links]', ->

      it 'click /test/a link', (done)->
        browser.elementById '/test/a', (err, el)->
          should.not.exist err
          el.click (err)->
            should.not.exist err

            browser.eval 'window.middleware.pathname()', (err, pathname)->
              should.not.exist err
              pathname.should.equal '/test/a'
              pass done

      it 'click /test/b link', (done)->
        browser.elementById '/test/b', (err, el)->
          should.not.exist err
          el.click (err)->
            should.not.exist err

            browser.eval 'window.middleware.pathname()', (err, pathname)->
              should.not.exist err
              pathname.should.equal '/test/b'
              pass done

      it 'click /test/c link', (done)->
        browser.elementById '/test/c', (err, el)->
          should.not.exist err
          el.click (err)->
            should.not.exist err

            browser.eval 'window.middleware.pathname()', (err, pathname)->
              should.not.exist err
              pathname.should.equal '/test/c'
              pass done