// const numbers = [1,2,3];
// console.log(numbers);

// const moreNumbers= new Array(3,2); //[]
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers);

// convert array like to array below example
// const listItems= document.querySelectorAll("li");
// console.log(listItems);
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const personalData = [30,"Max",{moreDetail:[]}];
// console.log(personalData[1]);

// // arrays in array getting data
// const analyticsData = [[1,2.3],[-5.4,2.1]];
// for(const data of analyticsData){
//     for(const dataPoints of data){
//         console.log(dataPoints);
//     }
// }

// const hobbies = ["Cooking","Sports"];
// hobbies.push("Reading");
// hobbies.unshift("Learning");
// const poppedValue= hobbies.pop(); // delete last item
// hobbies.shift(); //delete first item
// console.log(hobbies);

// hobbies[1] = "Coding";
// hobbies[5] = "Reading";

// console.log(hobbies, hobbies[4]);
// hobbies.splice(1,0,'Good food'); // 1arg where start 2arg how much delet 3arg what insert instead
// console.log(hobbies);
// const removedElements = hobbies.splice(0,1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.92, -5, 10];
// //cut 2 first items and copy u can select range 0,2 1,4
// //const storedResults = testResults.slice(0,2);
// const storedResults = testResults.concat([3.99, 2]);
// //returns new array copy
// //console.log(testResults.slice());
// testResults.push(5.92);
// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));
// console.log(testResults.includes(5.92));
// //testResults.lastIndexOf

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// //dont work for objects
// console.log(personData.indexOf({ name: "Max" }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === "Manuel";
// });
// //personData.findIndex
// //find dont make copy so u can manipulate whole object
// manuel.name = "Jack";
// console.log(manuel);

// // const prices = [10.99,5.99,3.99,6.59];
// // const tax = 0.19;
// // const taxAdjustedPrices = [];
// // // for (const price of prices){
// // //     taxAdjustedPrices.push(price *(1+tax));
// // // }
// // // same as above but with index
// // prices.forEach((price,idx,prices)=>{
// //     const priceObj={index:idx, taxAdjPrice:price *(1+tax)}
// //     taxAdjustedPrices.push(priceObj);
// // });
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// //const taxAdjustedPrices = [];

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   //taxAdjustedPrices.push(priceObj);
//   return priceObj;
// });

// //console.log(taxAdjustedPrices);
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });
// console.log(filteredArray);

// //summing prices foreach
// // let sum = 0;
// // prices.forEach((price)=>{
// //     sum+=price;
// // });
// // console.log(sum);
// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//   return prevValue + curValue;
// }, 0);
// console.log(sum);

// const data = "new york;10.99;2000";
// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);
// // spread operator making new array something like rest operator in functions
// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];
// const copiedPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// persons.push({ name: "ANNA", age: 29 });
// persons[0].age = 31; // also changes copy bcs takes addres NOT CHANGE COPY IF USE MAP

// console.log(persons, copiedPersons);
const nameData = ["Max", "Schwarz","Mr",30];
// const firstName =nameData[0];
// const lastName = nameData[1];
const [firstName,lastName, ...otherInformation] = nameData;
console.log(firstName,lastName,otherInformation);
