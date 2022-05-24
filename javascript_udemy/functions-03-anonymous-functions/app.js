const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE}  for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS ||
//       cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   }
//   else{
//     return RESULT_COMPUTER_WINS;
//   }
// };
// ARROW FUNCTION SHORTER 
const getWinner = (cChoice,pChoice) =>
cChoice === pChoice ? 
RESULT_DRAW : 
    (cChoice === ROCK && pChoice === PAPER) ||
     (cChoice === PAPER && pChoice === SCISSORS) ||
     (cChoice === SCISSORS && pChoice === ROCK) ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;


startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const winner = getWinner(computerChoice,playerChoice);
  console.log(winner);
  let message= `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW){
    message = message + ` had a draw.`
  }
  else if (winner=== RESULT_PLAYER_WINS){
    message = message + ` won.`;
  }
  else{
    message = message + ` lost.`;
  }
  alert(message);
  gameIsRunning = false;
});

//NOT RELATED TO GAME 

const sumUp = (numbers) =>{
  let sum =0;
  for(const num of numbers){
    sum+=num;
  }
  return sum;
}
console.log(sumUp([1,5,10,-3,6,10]));

// ... rest operator 
const combine = (resultHandler,operation, ...numbers) =>{
  const validateNumber =(number) =>{
    return isNaN(number) ? 0 : number;
  }
  let sum =0;
  for(const num of numbers){
    if(operation ==='ADD'){
      sum+=validateNumber(num);
    }
    else {
      sum-=validateNumber(num);
    }
    
  }
  resultHandler(sum);
  //return sum;
};
//CALLBACK FUNCTION instead return sum above
const showResult = (messageText,result) =>{
  alert(messageText+ ' ' +result);
};
combine(showResult.bind(this,'The result after adding all numbers is:'), 'ADD',1,5,2,3);
combine(showResult.bind(this,'The result after subtracting all numbers is:'), 'SUBTRACT',1,5,2,3);

// const subtractUp = function(resultHandler,...numbers){
//   let sum =0;
//   for(const num of numbers){
//     sum-=num;
//   }
//   resultHandler(sum);
// }
// subtractUp(showResult,3,2,1);