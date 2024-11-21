'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// DOM manipulation
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    // This is the first approach for DOM manipulation, I put it in a function() to apply DRY principle...
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // If the guess is WRONG
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;

    document.querySelector('body').style.backgroundColor = '#d03213';
  }
});

// AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
