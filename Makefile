################################################################################
# executables
################################################################################

NPM_CHECK=node_modules/.bin/npm-check
MVERSION=node_modules/mversion/bin/version
POLVO=node_modules/polvo/bin/polvo
SELENIUM=test/services/selenium.jar
SAUCE_CONNECT=test/services/Sauce-Connect.jar
CHROME_DRIVER=test/services/chromedriver
MOCHA=node_modules/mocha/bin/mocha
COVERALLS=node_modules/coveralls/bin/coveralls.js
CODECLIMATE=node_modules/.bin/codeclimate
SPACEJAM=node_modules/.bin/spacejam

################################################################################
# variables
################################################################################

VERSION=`egrep -o '[0-9\.]{3,}' package.json -m 1`

################################################################################
# setup everything for development
################################################################################

setup: install_test_suite
	@npm install

install_test_suite:
	@mkdir -p test/services

	@echo '-----'
	@echo 'Downloading Selenium..'
	@curl -o test/services/selenium.jar \
		http://selenium-release.storage.googleapis.com/2.45/selenium-server-standalone-2.45.0.jar
	@echo 'Done.'

	@echo '-----'
	@echo 'Downloading Chrome Driver..'
	@curl -o test/services/chromedriver.zip \
		http://chromedriver.storage.googleapis.com/2.6/chromedriver_mac32.zip
	@echo 'Done.'
	
	@echo '-----'
	@echo 'Unzipping chromedriver..'
	@cd test/services/; unzip chromedriver.zip; \
		rm chromedriver.zip; cd -
	@echo 'Done.'

	@echo '-----'
	@echo 'Downloading Sauce Connect..'
	@curl -o test/services/sauceconnect.zip \
		http://saucelabs.com/downloads/Sauce-Connect-latest.zip
	
	@echo '-----'
	@echo 'Unzipping Sauce Connect..'
	@cd test/services/; unzip sauceconnect.zip; \
		rm NOTICE.txt license.html sauceconnect.zip; cd -
	@echo '-----'
	@echo 'Done.'
	@echo 

################################################################################
# run tests locally
################################################################################

test: test.fixture.build.prod
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='local'

test.coverage: test.fixture.build.split
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='local' --coverage

test.coverage.preview: test.coverage
	@cd coverage/lcov-report && python -m SimpleHTTPServer 8080

################################################################################
# meteor tests
################################################################################

# run tests and show output in browser
test.meteor:
	meteor test-packages ./

# run tests and show output in terminal
test.meteor.headless:
	@$(SPACEJAM) test-packages ./

################################################################################
# more tests
################################################################################

test.all: test test.meteor.headless

################################################################################
# debugging fixture manually
################################################################################

test.fixture.watch:
	@$(POLVO) -wsx --base test/fixtures/general

test.fixture.watch.split:
	@$(POLVO) -wsxb test/fixtures/general

################################################################################
# builds fixture
################################################################################

test.fixture.build.prod:
	@echo 'Building test/fixtures before testing..'
	@$(POLVO) -rb test/fixtures/general > /dev/null

test.fixture.build.split:
	@echo 'Compiling test/fixture before testing..'
	@$(POLVO) -cxb test/fixtures/general > /dev/null

################################################################################
# starts selenium or sauce connect
################################################################################

test.selenium.run:
	@java -jar $(SELENIUM) -Dwebdriver.chrome.driver=$(CHROME_DRIVER)

test.sauce.connect.run:
	@java -jar $(SAUCE_CONNECT) $(SAUCE_USERNAME) $(SAUCE_ACCESS_KEY)

################################################################################
# run tests in sauce labs
################################################################################

test.sauce: test.fixture.build.prod
	@$(MOCHA) -ui bdd -reporter spec -timeout 600000 \
					test/tests/runner.js --env='sauce labs'

test.sauce.coverage: test.fixture.build.split
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='sauce labs' --coverage

test.sauce.coverage.coveralls: test.sauce.coverage
	@sed -i.bak \
		"s/^.*__split__\/lib/SF:lib/g" \
		coverage/lcov.info

	@$(CODECLIMATE) < coverage/lcov.info
	@cat coverage/lcov.info | $(COVERALLS)

test.sauce.coverage.preview: test.sauce.coverage
	@cd coverage/lcov-report && python -m SimpleHTTPServer 8080

################################################################################
# manages version bumps
################################################################################

bump.minor:
	@$(MVERSION) minor

bump.major:
	@$(MVERSION) major

bump.patch:
	@$(MVERSION) patch

################################################################################
# checking / updating dependencies
################################################################################

deps.check:
	@$(NPM_CHECK)

deps.upgrade:
	@$(NPM_CHECK) -u

################################################################################
# sync & publish
################################################################################

sync.master:
	git pull origin master && git push origin master

publish:
	git tag -a $(VERSION) -m "Releasing $(VERSION)"
	git push origin master --tags
	npm publish
	meteor publish

################################################################################
# OTHERS
################################################################################

.PHONY: test