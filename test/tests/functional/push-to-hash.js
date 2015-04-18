var should = require('chai').should();
var Hook   = require('../utils/hook');

exports.test = function(browser, caps, base_url, notify, cover, timeout) {
  
  var is_ie = caps.browserName === 'internet explorer';
  var version = parseInt(caps.version);

  // abort if browser *IS NOT* IE8 or IE9
  if (!is_ie || (version === 8 || version === 9)) return;


  /**
   * testing url type transitions
   */
  describe('[push-to-hash]', function() {
    
    var hook, pass;

    hook = Hook(browser, base_url, notify, cover);
    beforeEach(hook.before_each);
    afterEach(hook.after_each);
    after(hook.after);
    pass = hook.pass;

    before(function(done) {
      browser.init(caps, function(err) {
        should.not.exist(err);
      }).get(base_url + '/entry', function(err) {
        should.not.exist(err);
      }).fin(function() {
        new setTimeout(done, 2000);
      }).done();
    });

    /**
     * testing url transition from pushState to #hash
     */
    describe('[push-to-hash] (ie 8/9 only)', function() {
      it('should redirect initial page when needed', function(done) {
        browser.dismissAlert(function(err) {
          should.not.exist(err);
        }).execute('window.onbeforeunload = null', function(err) {
          should.not.exist(err);
        })["eval"]('window.location.pathname', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/entry');
        }).then()["eval"]('window.location.hash', function(err, hash) {
          should.not.exist(err);
          hash.should.equal('');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });
  });
};