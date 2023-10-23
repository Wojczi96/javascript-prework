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

  // function printMessage(msg){
  //   var div = document.createElement('div');
  //   div.innerHTML = msg;
  //   document.getElementById('messages').appendChild(div);
  // }

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  // Funkcja wybrania ruchu
  var computerMove, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "rock".');
      return 'rock';
    }
  }

  // Shake Hands
  function handsOptions() {
    const buttonOptions = document.querySelectorAll("#buttons button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
      hand.addEventListener("animationed", function() {
        this.style.animation = "";
      })
    });
  // Computer Option
  const compOptions = ["rock", "paper", "scissors"];

  buttonOptions.forEach(button => {
    button.addEventListener("click", function() {
      const randomNumber = Math.floor(Math.random() * 3);
      const computerChoice = compOptions[randomNumber];

      console.log(computerChoice);

      setTimeout(() => {
        displayResult(this.textContent, computerChoice);

        //Update Imgs
        playerHand.src = `./images/${this.textContent}.png`
        computerHand.src = `./images/${computerChoice}.png`
      }, 2000);

      //animations
      playerHand.style.animation = "shakeHands 2s ease";
      computerHand.style.animation = "shakeHands 2s ease";
    });
  });
  clearMessages();
  }



  // Score
  function getScores() {
    const playerScoreBoard = document.querySelector(".playerScore p");
    const computerScoreBoard = document.querySelector(".computerScore p");
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
  }


  // Wynik
  function displayResult(argPlayerMove, argComputerMove) {
    const message = document.querySelector("#messages");

    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      // printMessage
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      // printMessage('You win!');
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' You win!';
      // printMessage('You win!');
      playerScore++;
      getScores();
    } else if (argComputerMove == argPlayerMove) {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + ' Draw!';
      // printMessage('Draw!');
    } else {
      message.textContent = 'I played ' + argComputerMove + ', and you ' + argPlayerMove + 'You lose!';
      // printMessage('You loose :(');
      computerScore++;
      getScores();
    }
    // printMessage('I played ' + argComputerMove + ', and you ' + argPlayerMove);
  }

  // Buttony
  var buttonPaper, buttonRock, buttonScissors;

  // function buttonClicked(argButtonName) {
  //     clearMessages();
  //     console.log(argButtonName + ' został kliknięty');
  //     playerMove = argButtonName;
  //     randomNumber = Math.floor(Math.random() * 3 + 1);
  //     console.log('wylosowana liczba to: ' + randomNumber);
  //     computerMove = getMoveName(randomNumber);
  //     console.log('ruch komputera to: ' + computerMove);
  //     displayResult(playerMove, computerMove);

  // }

  // buttonRock = document.getElementById('button-rock');
  // buttonRock.addEventListener('click', function(){ buttonClicked('rock') });
  // buttonPaper = document.getElementById('button-paper');
  // buttonPaper.addEventListener('click', function(){ buttonClicked('paper') });
  // buttonScissors = document.getElementById('button-scissors');
  // buttonScissors.addEventListener('click', function(){ buttonClicked('scissors') });

  introGame();
  handsOptions();
}

game();