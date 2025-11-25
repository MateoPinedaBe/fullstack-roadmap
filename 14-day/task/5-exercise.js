/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.  
 */

function reverseFirstAndLastCharacters(input) {
    return (input == undefined)
        ? "Please give a valid String."
        : (input =>
            (input.length <= 1)
                ? "The String needs to be at least 2 characters long."
                : (
                    input.charAt(input.length - 1) +
                    input.slice(1, input.length - 1) +
                    input.charAt(0)
                ))
            (String(input).trim());
}

console.log(reverseFirstAndLastCharacters("Perro"))
console.log(reverseFirstAndLastCharacters(""))
console.log(reverseFirstAndLastCharacters(1001))