var fs      = require('fs');
var fsu     = require('fs-util');
var path    = require('path');
var spawn   = (require('child_process')).spawn;
var should  = require('chai').should();
var request = require('request');


function unzip(output_dir, done) {
  unzip = spawn('unzip', ['coverage.zip'], {
    cwd: output_dir
  });
  return unzip.on('exit', function(code) {
    return done();
  });
};

exports.download = function(base_url, done) {
  var args, curl, output_dir;

  var output_dir = path.join(__dirname, '..', '..', '..', 'coverage');

  if (fs.existsSync(output_dir))
    fsu.rm_rf(output_dir);

  fsu.mkdir_p(output_dir);

  args = ['-o', 'coverage.zip', base_url + '/coverage/download'];
  curl = spawn('curl', args, {
    cwd: output_dir
  });

  curl.on('exit', function(code) {
    unzip(output_dir, done);
  });
};

exports.save = function(base_url, cover_data, done) {
  var opts = {
    method: 'POST',
    url: base_url + '/coverage/client',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cover_data)
  };

  request(opts, function(err, a, b){
    should.not.exist(err);
    done();
  });
};