//EX1
const numbers = [1, 2, 6, 8];
for(const num of numbers){
    console.log(num);
}
console.log(
  numbers.filter((value) => {
    return value > 5;
  })
);

const mappedNumbers = numbers.map((num) => {
  const numberObj = { number: num };
  return numberObj;
});

console.log(mappedNumbers);

const reduceNumbers = numbers.reduce((prevValue, curValue) => {
  return prevValue * curValue;
}, 1);

console.log(reduceNumbers);

//EX2
function findMax(...nums) {
  let max = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax(...numbers));

//EX3
function findMinMax(...nums) {
  let max = nums[0];
  let min = nums[0];
  for (const num of nums) {
    if (num > max) {
      max = num;
    }
    if (num < min) {
      min = num;
    }
  }
  return [min,max];
}
const [min,max]= findMinMax(...numbers);
console.log(min);
console.log(max);

//EX4
const userID = new Set();
userID.add(10);
userID.add(10);
userID.add(8);
console.log(userID);

