should = require('chai').should()
request = require 'request'
config = require '../config'

user = config.SAUCE_USERNAME or process.env.SAUCE_USERNAME
key = config.SAUCE_ACCESS_KEY or process.env.SAUCE_ACCESS_KEY
build_id = process.env.TRAVIS_BUILD_NUMBER or (new Date().getTime())

exports.notify = ( job_id, status, done) ->
  opts =
    url: "http://#{user}:#{key}@saucelabs.com/rest/v1/#{user}/jobs/#{job_id}"
    method: 'PUT'
    headers: 'Content-Type': 'text/json'
    body: JSON.stringify
      passed: status
      public: true
      build: build_id

  request opts, (err, res)->
    should.not.exist err
    do done