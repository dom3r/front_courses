const startGameBtn = document.getElementById('start-game-btn');
//function declaration
function startGame(){
    console.log('starting game');
}
// function expression
const start = function startGame2(){
    console.log('starting game expression');
};
// anonymous function (like this or inside listener)
const start2= function(){
    console.log('starting game anonymous');
} 
// object with method and attribute
// const person = {
//     greet:function(){
//         console.log('Hello there');
//     },
//     name: 'Max'
// };
// console.log(person.name);
// person.greet();

//console.dir(startGame);

startGameBtn.addEventListener('click', function(){
    console.log('Game start anonymously in listener');
}); //startGame,start,start2