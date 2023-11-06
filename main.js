//Write a JavaScript program to create a class called "Person" with properties for name, age and country. 
//Include a method to display the person's details. 
//Create two instances of the 'Person' class and display their details.


class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country
    }
    display(){
        console.log(`I am ${this.name}  From ${this.country} My age is ${this.age}`)
    }
}

let person1=new Person("John",24,"India");

let person2=new Person("Bella",21,"France");

person1.display()
person2.display()