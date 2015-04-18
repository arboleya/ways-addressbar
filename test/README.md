# Testing

This tests are run in two environments:

1. Local Machine
1. Sauce LAbs Virtual Machines

## 1. Testing locally

Open two terminal tabs:

### + Tab 1

Starting Selenium:

````
make test.selenium.run
````

### + Tab 2

Running tests:

````
make test
````

### + Tab 2 (still)

To get coverage, instead of `make test` simply run:

````
make test.coverage
````

For previewing `LCOV-HTML` report right away, run with `preview`:


````
make test.coverage.preview
````

Then go to [http://localhost:8080](http://localhost:8080).


## 2. Testing on sauce labs

First register a new account on [Open Sauce](https://saucelabs.com/opensauce/)
in case you don't have one.

Than exports two variables into your shell:

````
SAUCE_USERNAME=<your-user-name>
SAUCE_ACCESS_KEY=<your-access-key>
````

Then move on with the tests, open two terminal tabs:

### + Tab 1

Starting Sauce Connect:

````
make test.sauce.connect.run
````

### + Tab 2

Running tests:

````
make test.sauce
````

### + Tab 2 (still)

To get coverage, instead of `make test.sauce` simply run:

````
make test.sauce.coverage
````

For previewing `LCOV-HTML` report right away, run with `preview`:


````
make test.sauce.coverage.preview
````

# Final Notes

Don't forget to check the
[Makefile](https://github.com/arboleya/ways-addressbar/blob/master/Makefile),
which has many targets for doing about
everything in this repo.