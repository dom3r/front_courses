const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}
// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput(); //parseInt(userInput.value)
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  //const calcDescription = `${currentResult} + ${enteredNumber}`
  // outputResult(currentResult, calcDescription);
  //    const logEntry = {
  //        operation: 'ADD',
  //        prevResult: initialResult,
  //        number: enteredNumber,
  //        result:currentResult
  //    };
  //    logEntries.push(logEntry);
  //    console.log(logEntries);
  writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput(); //parseInt(userInput.value)
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);

  //const calcDescription = `${currentResult} - ${enteredNumber}`
  //outputResult(currentResult, calcDescription);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}
function calculate(operation) {
    const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (operation === "ADD") {
    currentResult = currentResult + enteredNumber;
    operator='+';
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator='-';
  } else if (operation === "DIVIDE") {
    currentResult = currentResult / enteredNumber;
    operator='/';
  } else if (operation === "MULTIPLY") {
    currentResult = currentResult * enteredNumber;
    operator='*';
  }
  createAndWriteLog(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this,'ADD'));
subtractBtn.addEventListener("click", calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener("click", calculate.bind(this,'DIVIDE'));
