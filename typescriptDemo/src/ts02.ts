const names:string[]=[];
names.push("obj1");
names.push("obj2");
console.log(names);

const countryNames:readonly string[]=["India","USA","Australia","Canada"] as const;
console.log(countryNames)
// countryNames.push("UK"); //gives error as it is readonly
// console.log(countryNames)

const numbers=[1,2,3,4];
numbers.push(5);
// numbers.push("x");  //gives error as only numbers can be pushed
// console.log(numbers)

let myTuple:[string, number, boolean];
myTuple=["x",1,true];
//myTuple=["x","y",1,2,true]; gives error 

const graph:[number,number]=[10.5,15.36];
console.log(graph);
const [val1,val2]=graph;
console.log(val1);
console.log(val2);

