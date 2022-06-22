class AgedPerson{
    printAge(){
        console.log(this.age);
    }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
  }

  greet() {
    console.log(
    "Hi, I am " + this.name + " and I am " + this.age + " years old.");
  }
}

// function Person(){ // constructor function 
//    // this = {}; new do this behind scenes
//     this.age=30;
//     this.name='Max';
//     this.greet = function(){
//         console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
//     };
//     //return this; new do this behind scenes new!Person
// }
// Person.prototype = { // manually do what do extends with classes
//     printAge(){
//        console.log(this.age); 
//     }
// } // nadpisuje
// Person.prototype.printAge = function(){ // tylko dopisuje
//     console.log(this.age);
// }

// console.dir(Person);


// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.__proto__);
// console.log(person.toString());
// const p2 = new person.__proto__.constructor();
// console.log(p2);
// console.dir(Object);

// const p = new Person();
// console.log(p);
// const btn = document.querySelector('button');
// btn.addEventListener('click',p.greet.bind(p));


const course = {
    title: 'JavaScript - guide',
    rating: 5
};

//console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course,{
    ...Object.getPrototypeOf(course),
    printRating:function(){
        console.log(`${this.rating}/5`);
    }
});

const student = Object.create({printProgress: function(){console.log(this.progress)}},{
    name:{
        configurable:true,
        enumerable:true,
        value:'Max',
        writable:true
    }
});

// student.name='Max';

Object.defineProperty(student,'progress',{
    configurable:true,
    enumerable:true,
    value:0.8
});

student.printProgress();
console.log(student);
course.printRating();
