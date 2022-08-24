const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

// Don't edit the code below here!

function random(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
function chooseName(arr){
    return arr[random(0,arr.length)];
}
para.textContent = chooseName(names);

section.innerHTML = ' ';

section.appendChild(para);