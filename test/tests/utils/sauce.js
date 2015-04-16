var should   = require('chai').should();
var request  = require('request');

var user     = process.env.SAUCE_USERNAME;
var key      = process.env.SAUCE_ACCESS_KEY;
var build_id = process.env.TRAVIS_BUILD_NUMBER || (new Date().getTime());

exports.notify = function(job_id, status, done) {
  
  var opts = {
    url: "http://" + user + ":" + key + "@saucelabs.com/rest/v1/" + user + "/jobs/" + job_id,
    method: 'PUT',
    headers: {
      'Content-Type': 'text/json'
    },
    body: JSON.stringify({
      passed: status,
      "public": true,
      build: build_id
    })
  };
  
  request(opts, function(err, res) {
    should.not.exist(err);
    done();
  });
};