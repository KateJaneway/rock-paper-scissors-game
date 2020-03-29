let humanScore = 0
let computerScore = 0

let status = document.querySelector('#status')
let winLose = document.querySelector('#win-lose')
let humanScoreDisplay = document.querySelector('#human-score')
let computerScoreDisplay = document.querySelector('#computer-score');

let tieMessage = '<p>You tied. :|</p>'
let loseMessage = '<p>You lose.</p>'
let winMessage = '<p>You win!</p>'

document.querySelector('#rock').onclick = playRock
document.querySelector('#paper').onclick = playPaper
document.querySelector('#scissors').onclick = playScissors

function playRock() {
  play('rock')
}
function playPaper() {
  play('paper')
}
function playScissors() {
  play('scissors')
}

function play(humanPlay) {
  let computerPlay = getComputerPlay()

  status.innerHTML = 'You played ' + humanPlay + '. The bot played ' + computerPlay + '.'
     // es6 string interpolation version
     // status.innerHTML = `You played <strong>${humanPlay}</strong>. The bot played <strong>${computerPlay}</strong>.`

  if (humanPlay == computerPlay) {
    return (winLose.innerHTML = tieMessage)
  } else if (humanPlay == 'rock') {
    if (computerPlay == 'paper') {
      winLose.innerHTML = loseMessage
      computerScore++;
    } else if (computerPlay == 'scissors') {
      winLose.innerHTML = winMessage
      humanScore++
    }
  } else if (humanPlay == 'paper') {
    if (computerPlay == 'rock') {
      winLose.innerHTML = winMessage;
      humanScore++
    } else if (computerPlay == 'scissors') {
      winLose.innerHTML = loseMessage;
      computerScore++
    }
  } else if (humanPlay == 'scissors') {
    if (computerPlay == 'rock') {
      winLose.innerHTML = '<p>You lose.</p>';
      computerScore++
    } else if (computerPlay == 'paper') {
      winLose.innerHTML = winMessage;
      humanScore++
    }
  }

  humanScoreDisplay.innerHTML = humanScore
  computerScoreDisplay.innerHTML = computerScore
}

function getComputerPlay() {
  let plays = ['rock', 'paper', 'scissors']
  let play = plays[Math.floor(Math.random() * plays.length)]

  return play
}