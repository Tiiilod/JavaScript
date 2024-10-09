// soal 1: Implementasi Inheritance
class Vehicle{
    constructor(brand) {
        this.brand = brand;
      }
    
      start() {
        return "Vehicle is starting";
      }
}

class Car extends Vehicle{
    constructor(brand, model){
           super(brand); 
            this.model = model;
    }
    start() {
        return "Car is starting"
    }
}

let myCar = new Car("Toyota", "Fortuner")

console.log(myCar.start());