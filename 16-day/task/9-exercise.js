// 24. Add First Character to Front and Back of String

// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

let string = "Mateo"

function addFirstCharToFrontAndBack(input) {

    if (input == undefined) return "Please, give a valid String."

    input = String(input);

    let modInput = input.charAt(0) + input + input.charAt(0);

    return modInput
}

console.log(addFirstCharToFrontAndBack(string))