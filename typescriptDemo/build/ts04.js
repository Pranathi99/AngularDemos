"use strict";
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
function greet() {
    console.log("Hello");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 10));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
function expo(a, b = 2) {
    return a ** b;
}
console.log(expo(2, 5));
console.log(expo(3));
