const readline = require('readline-sync');
const MESSAGES = require('./calculator-messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function messages(lang, message) {
  return MESSAGES[lang][message];
}

// ========================================================

// Get language
let input;
do {
  prompt(MESSAGES.language);
  input = readline.question();
} while (!['1', '2'].includes(input));

let lang;
if (input === '1') lang = 'en';
else lang = 'es';

// Welcome message
prompt(messages(lang, 'welcome'));

// Loop while user wants to continue operations
while (true) {
  // Get first number
  prompt(messages(lang, 'getNumber1'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages(lang, 'invalidNumber'));
    number1 = readline.question();
  }

  // Get second number
  prompt(messages(lang, 'getNumber2'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages(lang, 'invalidNumber'));
    number2 = readline.question();
  }

  // Get operation to perform
  prompt(messages(lang, 'getOperation'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages(lang, 'invalidOperation'));
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
  prompt(`${messages(lang, 'result')} ${output}`);

  // Ask if user wants to do another calculation
  prompt(messages(lang, 'anotherCalculation'));
  let answer = readline.question();

  // Any answer that does not start with 'y' or 'Y' is a no:
  if (answer.trim() === '' || answer[0].toLowerCase() !== 'y') break;
}
