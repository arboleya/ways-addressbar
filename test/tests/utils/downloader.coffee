fs = require 'fs'
fsu = require 'fs-util'
path = require 'path'
spawn = (require 'child_process').spawn

module.exports = (base_url, done)->
  output_dir = path.join __dirname, '..', '..', '..', 'coverage'
  fsu.rm_rf output_dir if fs.existsSync output_dir
  fsu.mkdir_p output_dir

  args = ['-o', 'coverage.zip', base_url + 'coverage/download']
  curl = spawn 'curl', args, cwd: output_dir

  curl.on 'exit', (code)->
    unzip_coverage output_dir, done

unzip_coverage = (output_dir, done)->
  unzip = spawn 'unzip', [ 'coverage.zip' ], cwd: output_dir
  unzip.on 'exit', (code)->
    do done