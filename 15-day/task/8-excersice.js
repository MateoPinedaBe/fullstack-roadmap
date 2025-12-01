// 8. Random Integer Guess Game

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

function guessNumberGame() {
    let numberGoal = Math.round((Math.random(0,10) * 10))

    console.log(numberGoal)

    userInput = prompt("Please, guess a number between 1 and 10.")

    if (!Number.isInteger(userInput)) "Please, give a valid number."

    userInput = parseInt(userInput)

    return (userInput === numberGoal) ? alert("Good Work") : alert("Not matched");
}

guessNumberGame()

