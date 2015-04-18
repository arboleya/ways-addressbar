# ★ Testing

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

#### + Tab 2 (still)

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

Open two terminal tabs:

### + Tab 1

Starting Sauce Connect:

````
make test.sauce.connect.run
````

### + Tab 2

Running tests:

````
make test.saucelabs
````

And etc.. all the same, like Selenium, but now against Sauce Labs.

For more info, the Makefile at the repo root dir.