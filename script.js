'use strict';
// all about javscript

//

// string A string is simply a sequence of textual characters.

// const text = "The ' character is called an apostrophe.";
// text;

// console.log("hello this is log method in console object");

// swapping a numbers

// let a = 20;
// let b = 22;
// let c;
// c = a;
// a = b;
// b = c;
// a;
// b;

// var x = '-50.6';
// x = Number(x);
// console.log(typeof x);
// console.log(Number(x), typeof x);
// program takes two integer and output their sum

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// document.write(num1 + num2);
// why not use , instead use var on every

// hoisting

// str = 'Hoisting';
// console.log(str);

// var str;

// question

// function abc() {
//     console.log(a);
//     var a = 10;
// }
// abc();
// autoboxing

// var str = 'Autoboxing';
// var strBoxed = new String(str);
// console.log(strBoxed.length);
// strBoxed = undefined;


// ascending order

// let number1 = Number(prompt());
// let number2 = Number(prompt());
// let number3 = Number(prompt());

// let arr = [number1, number2, number3];
// console.log(arr.sort(function (number1, number2) { return number1 - number2; }));

// control flow
//iteration
// let i = 0;
// for (i; i <= 20; i++) {
//     console.log(i);
// }

// while loop repeats until until some condition becomes false

//function to find given value in array

// const arrGiven = [22, 33, 44, 55];
// const value = Number(prompt("enter value to check"));
// function findValue(valueGiven) {
//     console.log('function ran');
//     for (let i of arrGiven) {
//         if (i === value) {
//             console.log('value found');
//             return true;
//         }
//     }
//     console.log('value not found');
//     return false;
// };
// findValue(value);

// function to compute the factorial of given number

// function factorial(number) {
//     let fact = 1;
//     for (let i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(4));


// function factorial(numbers) {
//     let fact = 1;
//     for (let i = 1; i <= numbers; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5));

//Create a program that allows the user to choose from a given range of arithmetic operations, and then performs that operation on two input numbers.

// let number1 = Number(prompt("Enter number one"));
// let number2 = Number(prompt("Enter number two"));
// let expression = prompt("Enter operator");
// switch (expression) {
//     case ("+"):
//         console.log(number1 + number2);
//         break;
//     case ("-"):
//         console.log(number1 - number2);
//         break;
//     case ("*"):
//         console.log(number1 * number2);
//         break;
//     case ("/"):
//         console.log(number1 / number2);
//         break;
//     default:
//         console.log("invalid operator");
//         break;
// }

//check for pallindrome

function pallindrome(letter) {
    let newStr = '';
    for (let i = letter.length - 1; i >= 0; i--) {
        newStr += letter[i];
    }
    console.log(newStr);
    if (newStr === letter) {
        return true;
    }
    else {
        return false;
    }
}
console.log(pallindrome('ada'));
