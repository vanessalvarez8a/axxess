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

var minutes = 0;
var secs = 0;
var startchr = 0;       // used to control when to read data from form

function countdownTimer() {
  // http://coursesweb.net/javascript/
  // if $startchr is 0, and form fields exists, gets data for minutes and seconds, and sets $startchr to 1
  if(startchr == 0 && document.getElementById('mins') && document.getElementById('secs')) {
    // makes sure the script uses integer numbers
    minutes = parseInt(document.getElementById('mins').value) + 0;
    secs = parseInt(document.getElementById('secs').value) * 1;

    // if data not a number, sets the value to 0
    // if(isNaN(ctmnts)) ctmnts = 0;
    // if(isNaN(secs)) secs = 0;

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('mins').value = minutes;
    document.getElementById('secs').value = secs;
    startchr = 1;
    document.getElementById('btnct').setAttribute('disabled', 'disabled');     // disable the button
  }

  // if minutes and seconds are 0, sets $startchr to 0, and return false
  if(minutes==0 && secs==0) {
    startchr = 0;
    document.getElementById('btnct').removeAttribute('disabled');     // remove "disabled" to enable the button

    /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */

    return false;
  }
  else {
    // decrease seconds, and decrease minutes if seconds reach to 0
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

  // display the time in page, and auto-calls this function after 1 seccond
  document.getElementById('showmns').innerHTML = minutes;
  document.getElementById('showscs').innerHTML = secs;
  setTimeout('countdownTimer()', 1000);
}
