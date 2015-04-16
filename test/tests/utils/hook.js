var should   = require('chai').should();
var request  = require('request');
var coverage = require('./coverage');
var sauce    = require('./sauce');

function quit(browser, failures, notify, done) {
  browser.quit(function(err) {
    should.not.exist(err);
  }).fin(function() {
    if (notify) {
      sauce.notify(browser.sessionID, failures === 0, done);
    } else {
      done();
    }
  }).done();
};

module.exports = function(browser, base_url, notify, cover) {
  
  var passed = false;
  var failures = 0;

  return {

    after: function(done) {
      if (!cover)
        return quit(browser, failures, notify, done);
      
      browser["eval"]('window.__coverage__', function(err, cover_data) {
        should.not.exist(err);
        should.exist(cover_data);
        coverage.save(base_url, cover_data, function() {
          quit(browser, failures, notify, done);
        });
      }).done();
    },

    before_each: function() {
      passed = false;
    },

    after_each: function() {
      if (!passed) failures++;
    },

    pass: function(done) {
      passed = true;
      done();
    }
  };
};