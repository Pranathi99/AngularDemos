"use strict";
//classes
class Person {
    constructor() {
        this.name = "";
    }
}
const john = new Person();
john.name = "John";
console.log(john);
class Student {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const Student1 = new Student("Alex");
console.log(Student1.getName());
