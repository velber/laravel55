webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */
//
// require('./bootstrap');
//
// window.Vue = require('vue');
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
//
// Vue.component('example', require('./components/Example.vue'));
//
// const app = new Vue({
//     el: '#app'
// });


// classes
var User = function () {
    function User(name) {
        _classCallCheck(this, User);

        this.name = name;
    }

    _createClass(User, [{
        key: 'fire',
        value: function fire() {
            return this.name;
        }
    }]);

    return User;
}();

// let
// const
// var - very top.

// console.log(new User('Igor').fire());

// arrows


var names = ['Igog', 'Vasil', 'Pavlo'];

// names.forEach(name => console.log(name));
names.forEach(function (name) {
    return 'My name is ' + name;
}); // return not needed

// default parameters
function defaultParameters() {
    // console.log(n);

    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
}

defaultParameters();

//-----------------
// rest
function sum() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    // numbers is array
    return numbers.reduce(function (next, current) {
        return next + current;
    });
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);