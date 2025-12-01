// 26. Add Last 3 Characters to Front and Back of String

// Write a JavaScript program to create a string from a given string.
// This is done by taking the last 3 characters and adding them at both the front and back.
// The string length must be 3 or more.  

let string = "Mateo"

function addLastCharToFrontAndBack(input) {

    if (input == undefined) return "Please, give a valid input."

    input = String(input);

    if (input.length < 3) return "The String has to be at least 3 characters long."

    return input.slice(-3) + input + input.slice(-3)
}

console.log(addLastCharToFrontAndBack("Hol"))
console.log(addLastCharToFrontAndBack("H"))
console.log(addLastCharToFrontAndBack(string))