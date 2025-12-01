// 19. Check if Integer is Within 20 of 100 or 400

// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function checkInteger(number) {

    let num = number;

    num = parseInt(num);

    if (isNaN(num)) return "Please, give a valid number."

    let result = ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));

    return result;
}

console.log(checkInteger(420))