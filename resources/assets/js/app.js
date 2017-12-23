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
class User {
    constructor (name) {
        this.name = name;
    }

    fire() {
        return this.name;
    }
}

// let
// const
// var - very top.

// console.log(new User('Igor').fire());

// arrows
let names = ['Igog', 'Vasil', 'Pavlo'];

// names.forEach(name => console.log(name));
names.forEach((name) => `My name is ${name}`); // return not needed

// default parameters
function defaultParameters(n = 4) {
    // console.log(n);
}

defaultParameters();

//-----------------
// rest
function sum(...numbers) {
    // numbers is array
    return numbers.reduce((next, current) => next + current);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));