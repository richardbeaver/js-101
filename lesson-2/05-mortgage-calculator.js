const readline = require('readline-sync');
const MESSAGES = require('./05-mortgage-calculator-messages.json');

function displayPrompt(message) {
  console.log(`=> ${message}`);
}

function numberInvalid(number) {
  return number.trimStart() === ''
    || Number(number) < 0
    || Number.isNaN(Number(number));
}

function getInput(promptMessage, errorMessage, inputInvalidFunc) {
  displayPrompt(promptMessage);
  let input = readline.question();

  while (inputInvalidFunc(input)) {
    displayPrompt(errorMessage);
    input = readline.question();
  }

  return input;
}

// ========================================================

// Welcome message
displayPrompt(MESSAGES.welcome);

while (true) {
  // Get loan amount
  let loanAmount =
    getInput(MESSAGES.loanAmount, MESSAGES.invalidNumber, numberInvalid);
  loanAmount = Number(loanAmount);

  // Get APR
  let aprPercentage =
    getInput(MESSAGES.apr, MESSAGES.invalidNumber, numberInvalid);
  aprPercentage = Number(aprPercentage);

  // Get loan duration
  let durationYears =
    getInput(MESSAGES.duration, MESSAGES.invalidNumber, numberInvalid);
  durationYears = Number(durationYears);

  // Monthly interest rate
  let monthlyRate = (aprPercentage / 100) / 12;

  // Loan duration in months
  let durationMonths = durationYears * 12;

  // Calculate monthly payment amount
  let monthlyPayment =
    loanAmount * (monthlyRate /
                 (1 - Math.pow((1 + monthlyRate), (-durationMonths))));

  // Print output
  displayPrompt(`${MESSAGES.result} $${monthlyPayment.toFixed(2)}`);

  // Another calculation
  let answer =
    getInput(MESSAGES.anotherCalculation, MESSAGES.invalidAnswer,
      (answer) => !answer || !['y', 'n'].includes(answer[0].toLowerCase()));

  if (answer[0].toLowerCase() === 'n') break;
}
