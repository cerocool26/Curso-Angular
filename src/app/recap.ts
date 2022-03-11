const  username:String = 'Andres Romero';

const  sum = (a: number, b:number) => {
    return a + b ;
}

sum (1,3);


class Person {
    age : number;
    lastName: String;

    constructor (age: number , lastName:String){
        this.age = age;
        this.lastName = lastName;
    }
}

const persona =  new Person(25,"Romero");
