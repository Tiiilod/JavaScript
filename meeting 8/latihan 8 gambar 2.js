// Soal 2: Implementasi Polymorphism
class Shape {
    draw() {
        return "Drawing rectangle";
    }
}


class Rectangle extends Shape {
  draw() {
    return "Drawing rectangle";
  }
}

let rectangle = new Rectangle("kotak");
console.log(rectangle.draw());
