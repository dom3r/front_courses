function pureFunction(num1, num2) {
  return num1 + num2;
}

console.log(pureFunction(5, 12));

function impureFunction(num1) {
  return num1 + Math.random();
}
console.log(impureFunction(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // also impure changing something outside function side effect
  return sum;
}
addMoreNumbers(1, 9);
console.log(previousResult);

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("New hobby");
  console.log(h);
}
printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    //factory function
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.35);
multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

// function calculateTax(amount, tax){
//     amount*tax;
// }
// const vatAmount = calculateTax(100,0.19);
// const incomeTax = calculateTax(100,0.25);

let userName = "Max";

function greetUser() {
  //let name = 'Anna';
  console.log("Hi " + name);
}
let name = "Maximilian";

userName = "Dave";

greetUser();

// function powerOf(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

//recursion example below
function powerOf(x, n) {
  //     if(n==1){
  //         return x;
  //     }
  //    return x * powerOf(x, n-1);
  //shorter version
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

const myself = {
  name: "Jakub",
  friends: [
    {
      name: "Dawid",
      friends: [
        {
          name: "Tomek",
          friends:[
            {
                name: "Jacek",
            }
          ]     
        }
      ]
    },
    {
      name: "Julia",
    }
  ],
};

function printFriendNames(person) {
  const collectedNames = [];
  if(!person.friends){
    return[];
  }
  for (const friend of person.friends) {
    //collectedNames.push(friend.name);
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
}

console.log(printFriendNames(myself));
