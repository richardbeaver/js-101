const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if ((userChoice === 'rock' && computerChoice === 'scissors')
      || (userChoice === 'paper' && computerChoice === 'rock')
      || (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((userChoice === 'rock' && computerChoice === 'paper')
      || (userChoice === 'paper' && computerChoice === 'scissors')
      || (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie");
  }
}

// ============================================================

while (true) {
  // User choice
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  // Computer choice
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // Display winner
  displayWinner(choice, computerChoice);

  // Ask if user wants to play again
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
