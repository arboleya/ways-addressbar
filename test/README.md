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
make test.cover
````

For previwing `LCOV-HTML` report right away, run with `preview`:


````
make test.cover.preview
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
