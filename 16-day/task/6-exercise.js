// 21. Add 'Py' to Start of String if Not Present

// Write a JavaScript program to create another string by adding "Py" in front of a given string.
// If the given string begins with "Py" return the original string.  

function pyStrings(string){

    let string1 = string;

    string1 = String(string1);

    let result = ((string1.trim().at(0).toLowerCase() === 'p') && (string1.trim().at(1).toLowerCase() === 'y')) ? string1 : 'Py' + string1;

    return result;
}

console.log(pyStrings(" Pedro"))
console.log(pyStrings("Py Pedro"))
console.log(pyStrings(null))
console.log(pyStrings())
console.log(pyStrings(Infinity))
console.log(pyStrings(NaN))