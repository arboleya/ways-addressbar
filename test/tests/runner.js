var wd   = require('wd');
var fsu  = require('fs-util');
var path = require('path');
var opt  = (require('optimist')).argv;

var env   = opt.env;
var cover = opt.coverage;

var browsers = require('./utils/browsers')[env]();
var hook     = require('./utils/hook');
var server   = require('./utils/server');
var coverage = require('./utils/coverage');

var base_url = 'http://localhost:8080';


if (env === 'local') {
  timeout = 50000;
  notify_sauce = false;
} else {
  timeout = 15000;
  notify_sauce = true;
}


var sauce_conf = {
  hostname: 'localhost',
  port: '4445',
  user: process.env.SAUCE_USERNAME,
  pwd: process.env.SAUCE_ACCESS_KEY
};

server.start(cover);

after(function(done) {
  if (!cover) return done();

  console.log('Assembling coverage..');

  coverage.download(base_url, function() {
    console.log('Done.');
    done();
  });
});


describe("[" + env + "]", function() {

  var caps, i, len, _results;
  var results = []
  
  for (var i = 0; i < browsers.length; i++) {
    
    var caps = browsers[i];

    caps.name = caps.tags[0] + ' / ' + caps.tags.slice(1).join(' - ');

    if (env === 'local') {
      caps.platform = null;
      caps.version = null;
    }

    describe("[" + caps.name + "]", function() {

      var browser;

      if (env === 'local' || caps.name === 'phantomjs'){
        browser = wd.promiseChainRemote();
      }
      else {
        browser = wd.promiseChainRemote(sauce_conf);
        if (process.env.TRAVIS_JOB_NUMBER != null)
          caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER;
      }

      var files = fsu.find(path.join(__dirname, 'functional'), /\.js$/m);

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var test = require(file).test;

        if('function' === typeof test)
          test(browser, caps, base_url, notify_sauce, cover, timeout);
      };
    });
  }
});