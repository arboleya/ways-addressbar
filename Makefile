MVERSION=node_modules/mversion/bin/version
VERSION=`$(MVERSION) | sed -E 's/\* package.json: //g'`

POLVO=node_modules/polvo/bin/polvo

SELENIUM=test/services/selenium.jar
SAUCE_CONNECT=test/services/Sauce-Connect.jar
CHROME_DRIVER=test/services/chromedriver

MOCHA=node_modules/mocha/bin/mocha
COVERALLS=node_modules/coveralls/bin/coveralls.js



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

setup: install_test_suite
	@npm install




test.fixture.watch:
	@$(POLVO) -wsx --base test/fixtures/general

test.fixture.watch.split:
	@$(POLVO) -wsxb test/fixtures/general




test.fixture.build.prod:
	@echo 'Building test/fixtures before testing..'
	@$(POLVO) -rb test/fixtures/general > /dev/null

test.fixture.build.split:
	@echo 'Compiling test/fixture before testing..'
	@$(POLVO) -cxb test/fixtures/general > /dev/null



# SELENIUM & SAUCE CONNECT
test.selenium.run:
	@java -jar $(SELENIUM) -Dwebdriver.chrome.driver=$(CHROME_DRIVER)

test.sauce.connect.run:
	@java -jar $(SAUCE_CONNECT) $(SAUCE_USERNAME) $(SAUCE_ACCESS_KEY)




test: test.fixture.build.prod
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='local'

test.cover: test.fixture.build.split
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='local' --coverage

test.cover.preview: test.cover
	@cd coverage/lcov-report && python -m SimpleHTTPServer 8080




test.sauce: test.fixture.build.prod
	@$(MOCHA) -ui bdd -reporter spec -timeout 600000 \
					test/tests/runner.js --env='sauce labs'

test.sauce.cover: test.fixture.build.split
	@$(MOCHA) --ui bdd --reporter spec --timeout 600000 \
						test/tests/runner.js --env='sauce labs' --coverage

test.sauce.cover.coveralls: test.sauce.cover
	@sed -i.bak \
		"s/^.*__split__\/lib/SF:lib/g" \
		coverage/lcov.info

	cat coverage/lcov.info | $(COVERALLS)


test.sauce.cover.preview: test.sauce.cover
	@cd coverage/lcov-report && python -m SimpleHTTPServer 8080



bump.minor:
	@$(MVERSION) minor

bump.major:
	@$(MVERSION) major

bump.patch:
	@$(MVERSION) patch



publish:
	git tag $(VERSION)
	git push origin $(VERSION)
	git push origin master
	npm publish

re-publish:
	git tag -d $(VERSION)
	git tag $(VERSION)
	git push origin :$(VERSION)
	git push origin $(VERSION)
	git push origin master -f
	npm publish -f