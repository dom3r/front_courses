let randomNumber = Math.floor(Math.random() * 100) + 1;
const guess = document.querySelector(".guess");
console.log(randomNumber);
const lastResult = document.querySelector(".lastResult");
const lowerOrHigher = document.querySelector(".lowerOrHigher");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

const checkGuess = () => {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guess.textContent = "Previous guesses: ";
  }
  guess.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congrats! You guess good number.";
    lastResult.style.backgroundColor = "green";
    lowerOrHigher.textContent = "";
  } else if (guessCount === 10) {
    lastResult.textContent = "You lost! U did 10 guesses";
    gameOver();
  } else {
    lastResult.textContent = "Wrong number! Try again";
    lastResult.style.backgroundColor = "red";
    if(userGuess>randomNumber){
        lowerOrHigher.textContent = 'Your guess was too high';
    }
    else{
        lowerOrHigher.textContent = "Your guess was too low";
    }
  }
  guessCount++;
  guessField.value='';
  guessField.focus();
};

const gameOver = ()=>{
  guessField.disabled=true;
  guessSubmit.disabled=true;
  resetButton=document.createElement('button');
    resetButton.textContent = 'Reset';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
  }
  const resetGame=()=>{
    guessCount=1;
    lastResult.style.backgroundColor='white';
    resetP = document.querySelectorAll('p');
    for(let i =0;i<resetP.length;i++){
      resetP[i].textContent='';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value='';
    guessField.focus();
    randomNumber = Math.floor(Math.random()*100)+1;
  }
  
  guessSubmit.addEventListener("click", checkGuess);
  