const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const SCORE_TO_WIN = 3;

/*
 <this> - <beats these>:
 rock - scissors, lizard
 paper - rock, spock
 scissors - paper, lizard
 lizard - spock, paper
 spock - scissors, rock
*/

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(playerChoice, opponentChoice) {
  switch (playerChoice) {
    case 'rock': return ['scissors', 'lizard'].includes(opponentChoice);
    case 'paper': return ['rock','spock'].includes(opponentChoice);
    case 'scissors': return ['paper', 'lizard'].includes(opponentChoice);
    case 'lizard': return ['spock', 'paper'].includes(opponentChoice);
    case 'spock': return ['scissors', 'rock'].includes(opponentChoice);
    default: throw new Error('Invalid input');
  }
}

function displayRoundWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (userChoice === computerChoice) {
    prompt("It's a tie");
  } else if (playerWins(userChoice, computerChoice)) {
    prompt('You win!');
  } else {
    prompt('Computer wins!');
  }
}

// ============================================================

// Session
while (true) {
  // Set scores to 0
  let userScore = 0;
  let computerScore = 0;

  // One 'best-of' game
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

    // Update scores
    if (playerWins(choice, computerChoice)) userScore += 1;
    if (playerWins(computerChoice, choice)) computerScore += 1;

    // Display winner of the round and updated scores
    displayRoundWinner(choice, computerChoice);
    prompt(`Your score: ${userScore}, Computer score: ${computerScore}`);

    // End if someone wins
    if (userScore === SCORE_TO_WIN) {
      prompt('You win the game! Congrats!');
      break;
    }
    if (computerScore === SCORE_TO_WIN) {
      prompt('Computer wins the game! Better luck next time.');
      break;
    }
  }

  // Ask if user wants to play again
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
