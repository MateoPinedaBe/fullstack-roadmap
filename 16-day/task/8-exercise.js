// 23. Swap First and Last Characters in String

// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
//  The string length must be broader than or equal to 1.  

let string = "Mateo"

function swapCharactersInString(input) {
    if (input == undefined) return "Please, input a valid String."
    input = String(input)
    if (input.length === 1) return input
    return input.charAt(input.length - 1) + input.slice(1, input.length - 1) +  input.charAt(0)
}

string.length
console.log(swapCharactersInString(string))