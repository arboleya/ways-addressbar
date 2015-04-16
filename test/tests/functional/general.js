var should    = require('chai').should();
var asserters = require('wd/lib/asserters');
var Hook      = require('../utils/hook');

exports.test = function(browser, caps, base_url, notify, cover, timeout) {

  /**
   * general functional tests
   */
  describe('[general]', function() {
    var hook, pass;
    
    hook = Hook(browser, base_url, notify, cover);
    beforeEach(hook.before_each);
    afterEach(hook.after_each);
    after(hook.after);
    pass = hook.pass;

    before(function(done) {
      var el_sel, using;
      using = 'css selector';
      el_sel = '#pathname';
      browser.init(caps, function(err) {
        should.not.exist(err);
      }).get(base_url, function(err) {
        should.not.exist(err);
      }).waitForElement(using, el_sel, asserters.isDisplayed, timeout, 100, function(err) {
      // }).waitForElement(using, el_sel, asserters.isVisible, timeout, 100, function(err) {
        should.not.exist(err);
      }).fin(function(err) {
        should.not.exist(err);
        done();
      }).done();
    });

    /**
     * checking startup
     */
    describe('[startup]', function() {
      it('should properly translate and compute the entry path', function(done) {
        var cmd;
        cmd = 'window.middleware.pathname()';
        browser.execute(cmd, function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });

    /**
     * testing links
     */
    describe('[links]', function() {
      it('click /test/a link', function(done) {
        browser.elementById('/test/a', function(err, el) {
          should.not.exist(err);
        }).click(function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/a');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('click /test/b link', function(done) {
        browser.elementById('/test/b', function(err, el) {
          should.not.exist(err);
        }).click(function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/b');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('click /test/c link', function(done) {
        browser.elementById('/test/c', function(err, el) {
          should.not.exist(err);
        }).click(function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/c');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });
  
    /**
     * testing browser's back/forward buttons
     */
    describe('[buttons]', function() {
      it('click back button', function(done) {
        browser.execute('history.go(-1)', function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/b');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('click back button', function(done) {
        browser.execute('history.go(-1)', function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/a');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('click forward button', function(done) {
        browser.execute('history.go(1)', function(err) {
          should.not.exist(err);
        })["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test/b');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });
  
  /**
   * testing history states
   */
    describe('[states]', function() {
      it('state should be null', function(done) {
        browser["eval"]('window.middleware.history.state', function(err, state) {
          should.not.exist(err);
          should.not.exist(state);
          pass(done);
        });
      });
      it('pushing new state', function(done) {
        var cmd = "window.middleware.push('/test', 'Hello', {name:'John'});";
        browser.execute(cmd, function(err) {
          should.not.exist(err);
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('change event should be emitted when pushing state', function(done) {
        browser["eval"]("$('#pathname').val()", function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('title should have been set', function(done) {
        browser.title(function(err, title) {
          should.not.exist(err);
          title.should.equal('Hello');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('pathname should have been set', function(done) {
        browser["eval"]('window.middleware.pathname()', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test');
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('state should have been set', function(done) {
        browser["eval"]('window.middleware.history.state', function(err, state) {
          should.not.exist(err);
          state.should.be.deep.equal({
            name: 'John'
          });
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('replacing state should not change history length', function(done) {
        var hlength_cmd, len_before, replace_cmd;
        replace_cmd = "window.middleware.replace('/bye', 'Bye', {name:'Bye'})";
        hlength_cmd = "window.middleware.history.length";
        len_before = null;
        browser["eval"](hlength_cmd, function(err, length) {
          len_before = length;
        })["eval"](replace_cmd, function(err) {
          should.not.exist(err);
        })["eval"](hlength_cmd, function(err, len) {
          len.should.equal = len_before;
        }).fin(function() {
          pass(done);
        }).done();
      });
      it('change event should not be emitted when replacing state', function(done) {
        browser["eval"]("$('#pathname').val()", function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/test');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });
  });
};