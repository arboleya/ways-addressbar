request = require 'request'

exports.notify = ( job_id, status, done) ->
  opts =
    url: "http://#{user}:#{key}@saucelabs.com/rest/v1/#{user}/jobs/#{job_id}"
    method: 'PUT'
    headers: 'Content-Type': 'text/json'
    body: JSON.stringify
      passed: status
      public: true
      build: build_id
    jar: false # disable cookies: avoids CSRF issues

  request opts, (err, res)->
    should.not.exist err
    do done