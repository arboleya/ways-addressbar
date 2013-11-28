CS=node_modules/coffee-script/bin/coffee

MVERSION=node_modules/mversion/bin/version
VERSION=`$(MVERSION) | sed -E 's/\* package.json: //g'`

# POLVO=node_modules/polvo/bin/polvo
POLVO=polvo

SELENIUM=test/services/selenium-server-standalone-2.37.0.jar
SAUCE_CONNECT=test/services/Sauce-Connect.jar
CHROME_DRIVER=test/services/chromedriver

MOCHA=node_modules/mocha/bin/mocha
COVERALLS=node_modules/coveralls/bin/coveralls.js

# uncomment these lines and put your user/pass for sauce labs
# for testing locally though sauce connect
# SAUCE_USERNAME=yourusername
# SAUCE_ACCESS_KEY=youraccesskey



install_test_suite:
	@mkdir -p test/services

	@echo '-----'
	@echo 'Downloading Selenium..'
	@curl -o test/services/selenium-server-standalone-2.37.0.jar \
		https://selenium.googlecode.com/files/selenium-server-standalone-2.37.0.jar
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



build:
	@$(CS) -bco lib src

watch:
	@$(CS) -wbco lib src



test.watch:
	@$(POLVO) -ws --base test/fixtures/general

test.watch.split:
	@$(POLVO) -wsxb test/fixtures/general




test.build.prod:
	@echo 'Building app before testing..'
	@$(POLVO) -rb test/fixtures/general > /dev/null

test.build.split:
	@echo 'Compiling app before testing..'
	@$(POLVO) -cxb test/fixtures/general > /dev/null



# SELENIUM & SAUCE CONNECT
test.selenium.run:
	@java -jar $(SELENIUM) -Dwebdriver.chrome.driver=$(CHROME_DRIVER)

test.sauce.connect.run:
	@java -jar $(SAUCE_CONNECT) $(SAUCE_USERNAME) $(SAUCE_ACCESS_KEY)




test: test.build.prod
	@$(MOCHA) --compilers coffee:coffee-script \
	--ui bdd \
	--reporter spec \
	--timeout 600000 \
	test/tests/runner.coffee --env='local'

test.cover: test.build.split
	@$(MOCHA) --compilers coffee:coffee-script \
	--ui bdd \
	--reporter spec \
	--timeout 600000 \
	test/tests/runner.coffee --env='local' --coverage

test.cover.preview: test.cover
	@cd coverage/lcov-report && python -m SimpleHTTPServer 8080

test.cover.coveralls: test.cover
	@sed -i.bak \
		"s/^.*__split__\/src/SF:src/g" \
		coverage/lcov.info

	cat coverage/lcov.info  #| $(COVERALLS)




test.sauce: test.build.prod
	@$(MOCHA) --compilers coffee:coffee-script \
	--ui bdd \
	--reporter spec \
	--timeout 600000 \
	test/tests/runner.coffee --env='sauce labs'

test.sauce.cover: test.build.split
	@$(MOCHA) --compilers coffee:coffee-script \
	--ui bdd \
	--reporter spec \
	--timeout 600000 \
	test/tests/runner.coffee --env='sauce labs' --coverage

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