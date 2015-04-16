var should = require('chai').should();
var Hook   = require('../utils/hook');

exports.test = function(browser, caps, base_url, notify, cover, timeout) {

  var is_ie_8_or_9;

  is_ie_8_or_9 = caps.browserName === 'internet explorer';
  is_ie_8_or_9 = is_ie_8_or_9 && (parseInt(caps.version) < 10);

  // the tests bellow does not run in IE 8/9
  if (is_ie_8_or_9) return;
  
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