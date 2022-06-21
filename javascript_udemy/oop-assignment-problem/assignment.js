//ex1 and ex2
class Course {
    #price; // to not use te same price to many things
    set price(value){
        if(value>0)
        {
        this.#price = value
        }
        else{
            throw "Invalid value!";
        }
    }
    get price(){
        return "$" + this.#price;
    }

    // title;
    // length;
    // price;

    constructor(title,length,price){
        this.title=title;
        this.length=length;
        this.price = price;
    }
   

    calculateValue(){
        return this.length/this.#price;
    }

    outputSummary(){
        return "The title of course is: " + this.title + " , the price is " + this.price + "$" + " ,the length of whole course is: " + this.length + " minutes";
    }

}

const course1 = new Course('JavaScript',120,15.99);
const course2 = new Course('CSS',60, 10.55);
console.log(course1,course2);

console.log(course1.calculateValue());
console.log(course1.outputSummary());

//ex3

class PracticalCourse extends Course{
    numOfExercises;
    constructor(title,length,price,numOfExercises){
        super(title,price,length); 
        this.numOfExercises=numOfExercises;

    }
}

class TheoreticalCourse extends Course{
    publish(){
        console.log('Print something');
    }

}
const course3 = new PracticalCourse('Practice',30,10,15);
console.log(course3);

const course4 = new TheoreticalCourse('Theoretical',20,5);
course4.publish();
console.log(course4.price);

