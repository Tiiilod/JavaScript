// Soal 3: Kombinasi Inheritance dan Polymorphism
class Person {
    constructor(name){
        this.name = name;
    }
    introduce() {
        return `Hi, my name is ${this.name}`    
    }
}

class Employee extends Person{
    constructor(name, position){
        super(name);
        this.position = position;
    }
    introduce() {
        return `Hi, my name is ${this.name},    i am an ${this.position}`
    }
}

class Manager extends Employee{
    constructor(name, position) {
        super(name, position);
    }
    introduce() {
        return `Hi, my name is ${this.name}, i am an ${this.position},   and i manage a team` 
    }
}

let person = new Person("person");
console.log(person.introduce());

let employee = new Employee("employee","Programmer");
console.log(employee.introduce());

let manager = new Manager("manager", "manager");
console.log(manager.introduce());