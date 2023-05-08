"use strict";
const names = [];
names.push("obj1");
names.push("obj2");
console.log(names);
const countryNames = ["India", "USA", "Australia", "Canada"];
console.log(countryNames);
// countryNames.push("UK"); //gives error as it is readonly
// console.log(countryNames)
const numbers = [1, 2, 3, 4];
numbers.push(5);
// numbers.push("x");  //gives error as only numbers can be pushed
// console.log(numbers)
let myTuple;
myTuple = ["x", 1, true];
//myTuple=["x","y",1,2,true]; gives error 
const graph = [10.5, 15.36];
console.log(graph);
const [val1, val2] = graph;
console.log(val1);
console.log(val2);
