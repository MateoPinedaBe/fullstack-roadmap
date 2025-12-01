// 22. Remove Character at Specified Position in String

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeCharString(string, indx) {

    let string1 = string;
    let index = indx;

    string1 = String(string1);
    index = parseInt(index);

    if (isNaN(index)) return "Invalid numeric input for the Index, please give a valid Integer."

    if (index < 0 || index >= string1.lenght) return "Error: Index out of bounds."

    return string1.slice(0, index) + string1.slice(index + 1);
}

console.log(removeCharString("Hola Mundo", 1))