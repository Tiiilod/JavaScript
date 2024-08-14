// soal 1 Object Literial
const person = {
    name: "turky",
    age: 15,
    addres: {
        city: "jakarta",
        country: "indonesia",
    },
};

console.log(person.addres.city);

console.log(person['name'])
console.log(person.name)


person.age = person.age+5;
console.log(person.age)


delete person.addres.city;
console.log(person.addres.city);


// soal 2 Destructuring object

//Destructuring dengan Nama Variable yang Sama
const { name, age, } = person;
console.log(name, age,);

// Destructuring dengan Nama Variabe yang Berbeda
const { name:userName, age:userAge} = person;
console.log(userName, userAge)


// soal 3 Class
class book{
    constructor(tittle, author) {
        this.tittle = tittle;
        this.author = author;
    }
    getDetails() {
        return `This is ${this.tittle}, a ${this.author}.`;
    }   
}

class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  
    getDetails() {
      return `${this.title} by ${this.author}`;
    }
  }
  
  let myBook = new Book("JavaScript Essentials", "Jane Doe");
  

  console.log(myBook.getDetails()); // Output: JavaScript Essentials by Jane Doe