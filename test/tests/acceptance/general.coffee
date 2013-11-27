should = do (require 'chai').should

exports.test = ( browser, pass, timeout )->

  describe '[middleware]', ->

    # menu
    describe '[startup]', ->

      it 'wait until menu is visible', (done)->
        browser.waitForElementByClassName 'menu', timeout, (err)->
          should.not.exist err
          browser.elementByClassName 'menu', (err, el)->
            should.not.exist err
            should.exist el
            pass done

      it 'should properly translate and compute the entry path', (done)->
        browser.eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/entry'
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

    # clicking buttons
    describe '[buttons]', ->

      it 'click back button', (done)->
        browser.back (err)->
          should.not.exist err
          browser.eval 'window.middleware.pathname()', (err, pathname)->
            should.not.exist err
            pathname.should.equal '/test/b'
            pass done

      it 'click back button', (done)->
        browser.back (err)->
          should.not.exist err
          browser.eval 'window.middleware.pathname()', (err, pathname)->
            should.not.exist err
            pathname.should.equal '/test/a'
            pass done

      it 'click forward button', (done)->
        browser.forward (err)->
          should.not.exist err
          browser.eval 'window.middleware.pathname()', (err, pathname)->
            should.not.exist err
            pathname.should.equal '/test/b'
            pass done

    # clicking buttons
    describe '[states]', ->

      it 'state should be null', (done)->
        browser.eval 'window.middleware.history.state', (err, state)->
          should.not.exist err
          should.not.exist state
          pass done

      it 'pushing new state', (done)->
        browser.back (err)->
          should.not.exist err
          cmd = "window.middleware.push('/test', 'Hello', {name:'John'})"
          browser.eval cmd, (err)->
            should.not.exist err
            pass done

      it 'title should have been set', (done)->
        browser.title (err, title)->
          should.not.exist err
          title.should.equal 'Hello'
          pass done

      it 'pathname should have been set', (done)->
        browser.eval 'window.middleware.pathname()', (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test'
          pass done

      it 'state should have been set', (done)->
        browser.eval 'window.middleware.history.state', (err, state)->
          should.not.exist err
          state.should.be.deep.equal {name:'John'}
          pass done

      it 'replacing state should not change history length', (done)->
        
        replace_cmd = "window.middleware.replace('/bye', 'Bye', {name:'Bye'})"
        hlength_cmd = "window.middleware.history.length"

        len_before = null
        browser.eval hlength_cmd, (err, length)->
          len_before = length

          browser.eval replace_cmd, (err)->
            should.not.exist err

            browser.eval hlength_cmd, (err, length)->
              length.should.equal = len_before
              pass done

      it 'change event should not be emitted when replacing state', (done)->
        browser.eval "$('#pathname').val()", (err, pathname)->
          should.not.exist err
          pathname.should.equal '/test'
          pass done