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

  function printMessage(msg){
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  }

  function clearMessages(){
    document.getElementById('messages').innerHTML = '';
  }

  // Funkcja wybrania ruchu
  var computerMove, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
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
    // console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerScore++;
      getScores();
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerScore++;
      getScores();
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerScore++;
      getScores();
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  // Buttony
  var buttonPaper, buttonRock, buttonScissors;

  function buttonClicked(argButtonName) {
      clearMessages();
      console.log(argButtonName + ' został kliknięty');
      playerMove = argButtonName;
      randomNumber = Math.floor(Math.random() * 3 + 1);
      console.log('wylosowana liczba to: ' + randomNumber);
      computerMove = getMoveName(randomNumber);
      console.log('ruch komputera to: ' + computerMove);
      displayResult(playerMove, computerMove);

  }

  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('kamień') });
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function(){ buttonClicked('papier') });
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce') });

  introGame();
}

game();