// 27. Check if String Starts with 'Java'

// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

function checkStringJava(input) {

    if (input == undefined) return "Please, give a valid String."

    input = String(input);

    input = input.trimStart()

    return (input.substring(0,4) === "Java") ? true : false
}

console.log(checkStringJava("Java Hola Mundo"))
console.log(checkStringJava("Hola Mundo"))