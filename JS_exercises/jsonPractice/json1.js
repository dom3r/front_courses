const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
const cats = JSON.parse(catString);
for(let i = 0; i<cats.length;i++){
for(const kitten of cats[i].kittens){
total++;
if(kitten.gender==='m'){
male++;
}
}
if(i<(cats.length-1)){
motherInfo += `${cats[i].name}, `;
}else{
motherInfo += `and ${cats[i].name}`;
}
}
kittenInfo = `There are ${total} cats, ${male} of them are males and ${total-male} are females.`;


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
