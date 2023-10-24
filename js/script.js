const game = () => {

  let playerScore = 0;
  let computerScore = 0;

  function introGame() {
    const btn = document.querySelector('.btn');
    const introScreen = document.querySelector('.intro');
    const gameScreen = document.querySelector('.container');
    btn.addEventListener('click', function(){
      introScreen.classList.add('hidden');
      gameScreen.classList.remove('hidden');
      gameScreen.classList.add('visible');
    })
  }

  // Shake Hands
  function handsOptions() {
    const buttonOptions = document.querySelectorAll('#buttons button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = "";
      })
    });
    // Computer Option
    const compOptions = ['rock', 'paper', 'scissors'];

    buttonOptions.forEach(button => {
      button.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = compOptions[randomNumber];

        setTimeout(() => {
          displayResult(this.textContent, computerChoice);

          //Update Imgs
          playerHand.src = `./images/${this.textContent}.png`
          computerHand.src = `./images/${computerChoice}.png`
        }, 1500);

        //animations
        playerHand.style.animation = 'shakeHands 1.5s ease-in-out';
        computerHand.style.animation = 'shakeHands 1.5s ease-in-out';
      });
    });
  }

  // Score
  function getScores() {
    const playerScoreBoard = document.querySelector('.playerScore p');
    const computerScoreBoard = document.querySelector('.computerScore p');
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
  }

  // Wynik
  function displayResult(argPlayerMove, argComputerMove) {
    const message = document.querySelector('#messages');

    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      playerScore++;
      getScores();
    } else if (argComputerMove == argPlayerMove) {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' Draw!';
    } else {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You lose!';
      computerScore++;
      getScores();
    }
  }

  introGame();
  handsOptions();
}

game();