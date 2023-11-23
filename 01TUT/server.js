/*
//How NodeJS differs from vanilla JS
// 1. NodeJS is not a programming language, it is a runtime environment for JS
// 2. NodeJS is not a browser, it does not have a DOM
// 3. NodeJS is not single-threaded, it is multi-threaded
// 4. NodeJS is not asynchronous, it is synchronous
// 5. NodeJS is not a framework, it is a runtime environment for JS

console.log("Hello World");

// ** goble object instead of window object **
console.log(global); //global object

//has common core modules that we will explore later
//commonJs modules instead of ES6 modules

const os = require("os"); //os module
const path = require("path"); //path module

console.log(os.platform(), os.homedir()); //os platform, home directory
console.log(os.version()); //os version

console.log(__dirname);     //directory name
console.log(__filename);    //absolute path

console.log(path.dirname(__filename)); //directory name
console.log(path.basename(__filename)); //file name
console.log(path.extname(__filename)); //file extension
console.log(path.parse(__filename)); //parse file path

*/

/*
//math.js
// import {add} from "./math";
const {add, subtract, multiply, divide} = require("./math"); //importing modules
console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
*/

//missing apis in js as fetch, dom, localstorage, etc
