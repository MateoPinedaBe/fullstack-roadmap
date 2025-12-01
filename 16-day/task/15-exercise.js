// 30. Remove 'Script' from String at 5th Position

// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string.
// If "Script" appears in the string, return the string without "Script" otherwise return the original one.  

function checkStringForScript(input) {

    if (input == undefined) return "Please, give a valid String."

    input = String(input);

    const TARGET = "Script";
    const CHECK_INDEX = 4;

    if (input.length < CHECK_INDEX + TARGET.length) return "The String is not large enough to contain the target Word."

    if (input.startsWith(TARGET, CHECK_INDEX)) {
        let firstPartString = input.slice(0, CHECK_INDEX);
        let lastPartString = input.slice(CHECK_INDEX + TARGET.length);

        return firstPartString + lastPartString
    } else {
        return input;
    }
}

console.log(checkStringForScript("JavaScript"))
console.log(checkStringForScript("HolaScript Mundo"))