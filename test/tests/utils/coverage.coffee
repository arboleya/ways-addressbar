fs = require 'fs'
fsu = require 'fs-util'
path = require 'path'
spawn = (require 'child_process').spawn

should = require('chai').should()
request = require 'request'

exports.download = (base_url, done)->
  output_dir = path.join __dirname, '..', '..', '..', 'coverage'
  fsu.rm_rf output_dir if fs.existsSync output_dir
  fsu.mkdir_p output_dir

  args = ['-o', 'coverage.zip', base_url + '/coverage/download']
  curl = spawn 'curl', args, cwd: output_dir

  curl.on 'exit', (code)->
    unzip output_dir, done

exports.save = ( base_url, cover_data, done )->
  opts =
    method: 'POST'
    url: base_url + '/coverage/client'
    headers: 'Content-Type': 'application/json'
    body: JSON.stringify cover_data

  request opts, (err, a, b)->
    should.not.exist err
    done()

unzip = (output_dir, done)->
  unzip = spawn 'unzip', [ 'coverage.zip' ], cwd: output_dir
  unzip.on 'exit', (code)->
    done()