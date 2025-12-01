// 35. Check Character Between 2nd and 4th Positions in String

// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  

function checkCharInPos(input, char) {

    if (input == undefined) return "Please, give a valid String."
    if (char == undefined) return "Please, give a valid Character to find."

    input = String(input)
    char = String(char)

    if (char === "") return "The character cant be an empty string."
    if (char.length !== 1) return "The character has to be a single one."

    for (i = 1; i <= 3; i++) {
        if (input.startsWith(char, i))
            return true;
    }
    return false
}

console.log(checkCharInPos("Hola Mundo", "a"))