var should = require('chai').should();
var Hook   = require('../utils/hook');

exports.test = function(browser, caps, base_url, notify, cover, timeout) {

  var is_ie = caps.browserName === 'internet explorer';
  var version = parseInt(caps.version);

  // abort if browser *IS* IE8 or IE9
  if (is_ie && (version === 8 || version === 9)) return;
  
  /**
   * testing url type transitions
   */
  describe('[hash-to-push]', function() {
    
    var hook, pass;
    
    hook = Hook(browser, base_url, notify, cover);
    beforeEach(hook.before_each);
    afterEach(hook.after_each);
    after(hook.after);
    pass = hook.pass;

    before(function(done) {
      browser.init(caps, function(err) {
        should.not.exist(err);
      }).get(base_url + '/#/entry', function(err) {
        should.not.exist(err);
      }).fin(done).done();
    });

    /**
     * testing url transition from #hash to pushState
     */
    describe('[hash=/#/entry to pushState]', function() {
      it('should translate initial url when coming from hash urls', function(done) {
        browser["eval"]('window.location.pathname', function(err, pathname) {
          should.not.exist(err);
          pathname.should.equal('/entry');
        })["eval"]('window.location.hash', function(err, hash) {
          should.not.exist(err);
          hash.should.equal('');
        }).fin(function() {
          pass(done);
        }).done();
      });
    });
  });
};