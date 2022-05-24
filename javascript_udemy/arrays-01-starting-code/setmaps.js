// const ids = new Set(["Hi", "From", "Set"]);
// ids.add(2);
// if (ids.has("Hi")) {
//   ids.delete("Hi");
// }

// for (const entry of ids.entries()) {
//   console.log(entry);
// }
// for (const entry of ids.values()) {
//   console.log(entry);
// }
// //DONT USE SETS MUCH ONLY FOR UNIQUENESS DATA
// console.log(ids);

// // MAPS
// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personDataMap = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personDataMap.set(person2, [{ date: "two weeks ago", price: 100 }]);

// console.log(personDataMap);
// console.log(personDataMap.get(person1));
// // going through all entries
// for (const [key,value] of personDataMap.entries()){
//     console.log(key, value);
// }
// // only go through keys
// for(const key of personDataMap.keys()){
//     console.log(key);
// }
// // only go through values
// for(const value of personDataMap.values()){
//     console.log(value);
// }
// console.log(personDataMap.size);

//WEAK SET EXAMPLE uses = null not need to delete
let person = {name:"Max"};
const persons = new WeakSet();
persons.add(person);
//... some operations
//person=null;

console.log(persons);

// WEAK MAP EXAMPLE similar idea as above
const personData = new WeakMap();
personData.set(person, 'Extra info!')

person=null;
console.log(personData);