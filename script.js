// This let statement grabs a random number from 0-6 and sets it to x
let answer = Math.floor(Math.random() * 6)

// These eventlistners allow the buttons to call the functions
document.getElementById('btn').addEventListener('click', checker)
document.getElementById('reset').addEventListener('click', newnumber)

// This functions checks the user's guess
function checker () {
  // The line below grab the user's guess and stores it into the y variable
  let guess = document.getElementById('guess').value
  guess = parseInt(guess)
  // The lines below check if the number is too high or too low
  if (guess > answer) {
    alert('Sorry! Guess was too high!')
  } else if (guess < answer) {
    alert('Sorry! Your guess was too low!')
  } else if (guess === answer) {
    alert('Guess was right!')
  } else {
    alert('invalid')
  }
}

// This function allows the user to reset the number and play the game again
function newnumber () {
  answer = Math.floor(Math.random() * 6)
}
