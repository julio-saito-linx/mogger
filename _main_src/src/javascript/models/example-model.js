'use strict';
var Model = require('ampersand-model');

/*

file:     example-model.js
class:    ExampleModel
instance: exampleModel

*/

module.exports = Model.extend({

    props: {
        id: 'string',
        title: 'string',
        subTitle: 'string',
        description: 'string',
        script: 'function'
    },

    derived: {
        exampleTitle: {
            deps: ['id', 'title'],
            fn: function () {
                return this.id + ' : : ' + this.title;
            }
        },
        sourceExampleUrl: {
            deps: ['id'],
            fn: function () {
                return 'https://github.com/saitodisse/mogger/tree/gh-pages/_main_src/src/javascript/data/examples/' + this.id + '-src.js';
            }
        },
        hashUrl: {
            deps: ['id'],
            fn: function () {
                return '#' + this.id;
            }
        },
    }
});