// let name = 'Max';
// function greet(){
//     let name = 'Manuel';
//     console.log(name);
// }   
// console.log(name);
// greet();
userName = 30; // without declaration it takes var
var userName = 'Max'; // ES6 use let and const 
var userName ='Manuel'; // avoid var 
console.log(userName);
//var uMndefined = 5 ; // it will go through
//let undefined = 3 ; // it wont go through more safe(dont take built in js types)
function getName(){
    return prompt("Your name:","");
}   

function greet(){
    const userName = getName();
    console.log('Hello' + userName);
}   
greet();
let person = {age: 30};
let anotherPerson = person;
anotherPerson.age =32;

console.log(person);
let yetAnotherperson = {...person};
person.age=42;
console.log(yetAnotherperson);