document.getElementById('rock').onclick = rockPlays;
document.getElementById('paper').onclick = paperPlays;
document.getElementById('scissors').onclick = scissorsPlays;

var userScore = 0;
var botScore = 0;

function rockPlays() {
  play('rock');
}

function paperPlays() {
  play('paper');
}

function scissorsPlays() {
  play('scissors');
}

//this botChoice function throws a random option for the bot
 function botChoice() {
  var choices = ['rock', 'paper', 'scissors'];
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

//the play function have different options of the game that will set up scenarios with if statements if the user or the computer wins
function play(userTurn) {
  var botTurn = botChoice();

//Rock different choices
  if (userTurn == 'rock') {
    if(botTurn == 'rock') {
      console.log('its a tie');
    }
    else if(botTurn == 'paper') {
      botScore++;
    }
    else if(botTurn == 'scissors') {
      userScore++;
    }
  }
  //Paper different choices
  else if (userTurn == 'paper') {
    if (botTurn == 'paper') {
      console.log('its a tie');
    }
    else if(botTurn == 'scissors') {
      botScore++;
    }
    else if(botTurn == 'rock') {
      userScore++;
    }
  }
  //Scissors different choices
  else if (userTurn == 'scissors') {
    if(botTurn == 'scissors') {
      console.log('its a tie');
    }
    else if(botTurn == 'rock') {
      botScore++;
    }
    else if(botTurn == 'paper') {
      userScore++;
    }
  }
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('botScore').innerHTML = botScore;

};

document.getElementById('reset').onclick=reset;

//this is the function for the reset button to have the scores back to zeros
function reset() {
 userScore = 0;
 botScore = 0;
 document.getElementById('userScore').innerHTML = userScore;
 document.getElementById('botScore').innerHTML = botScore;
};
