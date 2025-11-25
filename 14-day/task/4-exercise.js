/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.  
 */

function modifyString(input, index) {
    input = String(input).trim();
    if (!Number.isInteger(index)) return "The index has to be a valid integer."
    index = parseInt(index);
    if (index < 0 || index >= input.length) {
        return "Index out of bounds for the given string.";
    }
    return input.split('')
        .filter((_, i) => i !== index)
        .join('');
}

console.log(modifyString("Hola Mundo", 0))