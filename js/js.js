let userInput;
let computersAnswer;


function runTheGame() {

  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  userInput = prompt('Do you choose rock, paper, or scissors?');
  if (userInput === null) {
    return;
  }

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    alert(`You have chose ${userInput}.`)
  } else {
    alert('Please try again using rock, paper, or scissors.');
    return;
  }

  switch (randomNumber) {
    case 0:
      computersAnswer = 'rock';
    break;
    case 1:
      computersAnswer = 'paper';
    break;
    case 2:
      computersAnswer = 'scissors';
    break;
  }

  alert(`The computer chose ${computersAnswer}!`);

  if (userInput === computersAnswer) {
    alert('Its a tie, try again');
    return;
  } else if (userInput === 'rock') {
    if (computersAnswer === 'paper') {
      alert('You lose!');
      return;
    } else {
      alert('You win!');
      return;
    }
  } else if (userInput === 'paper') {
    if (computersAnswer === 'rock') {
      alert('You lose!');
      return;
    } else {
      alert('You win!');
      return;
    }
  } else if (userInput === 'scissors') {
    if (computersAnswer === 'rock') {
      alert('You lose!');
      return;
    } else {
      alert('You win!');
      return;
    }
  }

  console.log(userInput);
  console.log(computersAnswer);
}
