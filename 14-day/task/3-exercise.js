/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.  
 */

// I really enjoy playing with ternaries.

function addingPytoString(input) {
    input = String(input).trim();
    return (input.length >= 2 &&
            input.at(0).toLowerCase() === "p" &&
            input.at(1).toLowerCase() === "y")
           ? input.slice(2).trim()
           : `Py ${input}`;
}

// Test

console.log(addingPytoString("Hola Mundo"))
console.log(addingPytoString("Py Hola Mundo"))
console.log(addingPytoString("   Py Hola Mundo"))
console.log(addingPytoString(""))