// I start by creating an onclick action from the user it would trigger the rockPlays paperPlays scissorsPlays functions
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

//this botChoice function throws a random option of paper, rock and scissors for the bot
 function botChoice() {
  var choices = ['rock', 'paper', 'scissors'];
  var randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

//the play function have different options of the game that will set up scenarios with if statements if the user or the computer wins
function play(userTurn) {
  var botTurn = botChoice();


// with the manipulation of the element id playerResult and botResult it would show the the results of the user and the bot
  document.getElementById('playerResult').innerHTML = 'You played ' + userTurn;
  document.getElementById('botResult').innerHTML = 'Bot played ' + botTurn;

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
  //This is the scoreboard that is adding points either to the user or to the bot
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

var minutes = 0;
var secs = 0;
var startchr = 0;

function countdownTimer() {
  if(startchr == 0 && document.getElementById('mins') && document.getElementById('secs')) {
    // is important to grab the value the user inputs into the form and read it as an integer number which is why it needs to be parseInt
    minutes = parseInt(document.getElementById('mins').value) + 0;
    secs = parseInt(document.getElementById('secs').value) * 1;
    document.getElementById('mins').value = minutes;
    document.getElementById('secs').value = secs;
    startchr = 1;
    //once the user clicks the start button, the button would be disabled until its back to be 00:00
    document.getElementById('btnct').setAttribute('disabled', 'disabled');
  }

  // once the clock is back to be 00:00 the disabled setAttribute needs to be removed
  if(minutes==0 && secs==0) {
    startchr = 0;
    document.getElementById('btnct').removeAttribute('disabled');
    return false;
  }
  else {
    secs--;
    if(secs < 0) {
      if(minutes > 0) {
        secs = 59;
        minutes--;
      }
      else {
        secs = 0;
        minutes = 0;
      }
    }
  }
  document.getElementById('showmns').innerHTML = minutes;
  document.getElementById('showscs').innerHTML = secs;
  setTimeout('countdownTimer()', 1000);
}
