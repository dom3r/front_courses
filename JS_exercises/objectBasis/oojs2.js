class Shape {

    name;
    sides;
    sideLength;
  
  constructor(name,sides,sideLength){
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  }
  
  calcPerimeter(){
  console.log(`${this.sides * this.sideLength}`);
  }
  }
  
  class Square extends Shape{
  
  constructor(sideLength){
  super('square',4,sideLength);
  }
  
  calcArea(){
  console.log(`The area of ${this.name} is equal to ${this.sideLength * this.sideLength}`);
  }
  
  }
  const square = new Square(4);
  square.calcArea();