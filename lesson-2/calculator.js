const readline = require('readline-sync');
const MESSAGES = require('./calculator-messages.json');


// TODO: step 3 of calculator bonus features: Internationalization
//  Step 16 of Lesson 2


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// ========================================================

let lang;
do {
  prompt(MESSAGES.language);
  lang = readline.question();
} while (!['1', '2'].includes(lang));

console.log(lang);

prompt(MESSAGES[lang].welcome);

while (true) {
  // Get first number
  prompt(MESSAGES.getNumber1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidNumber);
    number1 = readline.question();
  }

  // Get second number
  prompt(MESSAGES.getNumber2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNumber);
    number2 = readline.question();
  }

  // Get operation to perform
  prompt(MESSAGES.getOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOperation);
    operation = readline.question();
  }

  // Perform operation
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print result
  prompt(`${MESSAGES.result} ${output}`);

  // Ask if user wants to do another calculation
  prompt(MESSAGES.anotherCalculation);
  let answer = readline.question();

  // Any answer that does not start with 'y' or 'Y' is a no:
  if (answer[0].toLowerCase() !== 'y') break;
}
