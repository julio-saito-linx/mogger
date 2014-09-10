#Mogger
[![Build Status](https://travis-ci.org/saitodisse/mogger.svg?branch=0.1)](https://travis-ci.org/saitodisse/mogger) [![Coverage Status](https://coveralls.io/repos/saitodisse/mogger/badge.png?branch=0.1)](https://coveralls.io/r/saitodisse/mogger?branch=0.1)

Mogger it is a way to log your app without change him. Uses AOP (Aspect-oriented programming) library named [meld.js](https://github.com/cujojs/meld) and other library that facilitates the print of colorful outputs in browser, the [colorful-logger](https://github.com/saitodisse/colorful-logger).

The goal of this library is to be easy to configure and to help the programmer to understand the inner of some javascript codes.

##Instalation
###bower
```
bower install mogger --save
```
###npm
```
npm install mogger --save
```

##Configuring Mogger
###browser globals
```html
<script src="bower_components/colorful-logger/src/colorful-logger.js"></script>
<script src="bower_components/lodash/dist/lodash.min.js"></script>
<script src="bower_components/meld/aspect/trace.js"></script>
<script src="bower_components/meld/meld.js"></script>
...
```

###AMD (require.js)
```javascript
define(['Mogger'], function (Mogger) {
});
```

###CommonJS (node.js)
```javascript
var Mogger = require('Mogger');
```

##Usage
```javascript
// get the tracer
var tracer = new Mogger({
    surrogateTargets: [{
        title: 'simpleObj',
        target: simpleObj
    }]
});

// start watching some targets
tracer.traceObj({
  before: { message: 'SimpleObj -> ', css: 'color: #A42' },
  targetTitle: 'simpleObj', targetConfig: {  css: 'color: #E42' }
});
```


##Testing and debugging
```javascript
//instal tools
sudo npm install -g mocha
sudo npm install -g node-inspector

// test + watch
npm test

// debug + watch
node-debug _mocha --watch
```


## Improving coverage
```shell
# tab 1: start tests + watch
gulp

# tab 2: start coverage + watch
gulp coverage

# tab 3: open "Code coverage report"
#     : open Sublime (or VIM)
google-chrome coverage/lcov-report/src/index.html
subl .
```


##Examples
  - [simple example](http://saitodisse.github.io/mogger/examples/simple-browser-global-example/index.html)
  - [todo mvc example](http://saitodisse.github.io/mogger/examples/todo-mvc-backbone-require/index.html)

by: [saitodisse](http://saitodisse.github.io/)
