wd = require 'wd'
fsu = require 'fs-util'
path = require 'path'

opt = (require 'optimist').argv
env = opt.env
cover = opt.coverage

browsers = do (require './utils/browsers')[env]
hook = require './utils/hook'
server = require './utils/server'

# compute timeout notify_sauce flag based on env
if env is 'local'
  timeout = 50000
  notify_sauce = false
else
  timeout = 15000
  notify_sauce = true

# base url to test
base_url = 'http://localhost:8080'

# sauce connect config
sauce_conf = 
  hostname: 'localhost'
  port: '4445'
  user: process.env.SAUCE_USERNAME
  pwd: process.env.SAUCE_ACCESS_KEY


# starts server
server.start cover


# downloading coverage
coverage = require './utils/coverage'
after (done)->
  return done() unless cover
  console.log 'Assembling coverage..'
  coverage.download base_url, ->
    console.log 'Done.'
    done()


# mounting suites
# ------------------------------------------------------------------------------

# 1st root test suite - based on env
describe "[#{env}]", ->

  # loop through all browser configs
  for caps in browsers

    # computes session name based on the last two tags
    caps.name = (caps.tags.slice 1 ).join '_'

    # when testing local
    if env is 'local'

      # ignores platform and browser version
      caps.platform = null
      caps.version = null

    # 2nd root suite - based on browser
    describe "[#{caps.name}]", ->

      # INIT WD
      if env is 'local' or caps.name is 'phantomjs'
        # browser = do wd.remote
        browser = wd.promiseChainRemote()
      else
        # browser = wd.remote sauce_conf
        browser = wd.promiseChainRemote sauce_conf

        if process.env.TRAVIS_JOB_NUMBER?
          caps['tunnel-identifier'] = process.env.TRAVIS_JOB_NUMBER

      # SET MOCHA HOOKS
      # pass = hook @, browser, caps, base_url, notify_sauce, cover

      # list of test files
      files = fsu.find (path.join __dirname, 'functional'), /\.coffee$/m

      for file in files
        {test} = require file
        test?(browser, caps, base_url, notify_sauce, cover, timeout)