'use strict';
// all about javscript

console.log(0 / 0);
console.log(1 / 0);
console.log(Infinity / 0);
console.log(typeof NaN);

let score = 0;
score += 10;
score;
score *= 2;
score;


// string A string is simply a sequence of textual characters.

const text = "The ' character is called an apostrophe.";
text;

console.log("hello this is log method in console object");

// swapping a numbers

let a = 20;
let b = 22;
let c;
c = a;
a = b;
b = c;
a;
b;

var x = '-50.6';
x = Number(x);
console.log(typeof x);
console.log(Number(x), typeof x);
// program takes two integer and output their sum

let num1 = Number(prompt());
let num2 = Number(prompt());
document.write(num1 + num2);
// why not use , instead use var on every

// hoisting

str = 'Hoisting';
console.log(str);

var str;

// question

function abc() {
    console.log(a);
    var a = 10;
}
abc();
// autoboxing

var str = 'Autoboxing';
var strBoxed = new String(str);
console.log(strBoxed.length);
strBoxed = undefined;
