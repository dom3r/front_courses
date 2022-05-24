const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
if (randomNumber > 0.7) {
  alert("its greater than 0.7");
}

let number = [1, 2, 3, 5];
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}
let i = 0;
while (i < number.length) {
  console.log(number[i]);
  i++;
}

for (let i = number.length - 1; i >= 0; i--) {
  console.log(number[i]);
}

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert("show second alert");
}
