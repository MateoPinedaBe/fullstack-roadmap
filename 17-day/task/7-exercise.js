// 37. Modify String Based on Length (First 3 Lowercase/Uppercase)

// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string.
// If the string length is less than 3 convert all the characters to upper case.  

function modifyStringByLength(input) {

    if (input == undefined) return "Please, give a valid string."

    input = String(input);

    if (input.length <= 3) return input.toUpperCase()

    return input.slice(0,3).toLowerCase() + input.slice(3)
}

console.log(modifyStringByLength("HOLA MUNDO"))
console.log(modifyStringByLength("gol"))