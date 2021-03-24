document.getElementById('button').addEventListener('click', randomizer)
let ran = 0
let user = 0
function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)

  randomNumber = (Math.random() * 6) + 5
  randomNumber = parseInt(randomNumber)
  if (userGuess === randomNumber) {
    alert('Congratulation You Win !!!')
  }
}
