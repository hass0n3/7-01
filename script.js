document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer () {
userGuess= document.getElementById('input').value
  userGuess= parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 5
  randomNumber = parseInt(randomNumber)

  if (userGuess == randomNumber) {
alert('Congragulation You Win !!!')
  }
}