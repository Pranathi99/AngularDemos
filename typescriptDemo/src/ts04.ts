function getTime():number{
    return new Date().getTime();
}

console.log(getTime());

function greet():void{
    console.log("Hello");
}
greet();

function multiply(a:number,b:number):number{
    return a*b;
}
console.log(multiply(10,10));

function add(a:number,b:number,c?:number):number{
    return a+b+(c||0);
}
console.log(add(1,2));
console.log(add(1,2,3));

function expo(a:number,b:number=2):number{
    return a**b;
}
console.log(expo(2,5));
console.log(expo(3));