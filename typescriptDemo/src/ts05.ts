//classes

class Person{
    name:string="";
}

const john=new Person();
john.name="John";
console.log(john);

class Student{
private name:string;

public constructor(name:string){
    this.name=name;
}
public getName():string{
    return this.name;
}
}
const Student1=new Student("Alex");
console.log(Student1.getName());
