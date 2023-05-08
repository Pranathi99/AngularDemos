const car:{make:string,model:string,year:number}={
    make:"Toyota",
    model:"Innova",
    year:2023
};

console.log(car);

const car1:{make:string,model:string,year?:number}={
    make:"Toyota",
    model:"Innova"
};
console.log(car1);

const house={
    type:"duplex"
};
//house.type=2; error

console.log(house);

interface Icar{
    make:string,
    model:string,
    year:number,
    color:string
};

const newCar:Icar={
    make:"Toyota",
    model:"Innova",
    year:2023,
    color:"Red"
};

console.log(newCar);

interface ISafeCar extends Icar{
    airbags:number
};

const mySafeCar: ISafeCar={
    make:"Toyota",
    model:"Innova",
    year:2023,
    color:"Black",
    airbags:4
};

console.log(mySafeCar);

type myNumber=number;

const x1:myNumber=12;
console.log(x1);


