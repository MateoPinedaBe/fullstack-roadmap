// 20. Check if One Integer is Positive and One is Negative

// Write a JavaScript program to check two given integers whether one is positive and another one is negative.  

function checkIntegersPosOrNeg(number1, number2) {

    let num1 = number1;
    let num2 = number2;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid set of integers.";

    let result = ((num1 < 0 && num2 >= 0) || (num2 < 0 && num1 >= 0)) ? true : false;

    return result;
}

console.log(checkIntegersPosOrNeg(1,-1))
console.log(checkIntegersPosOrNeg(1,1))
console.log(checkIntegersPosOrNeg(0,-1))
console.log(checkIntegersPosOrNeg(-0, 1))
console.log(checkIntegersPosOrNeg(-Infinity, Infinity))
console.log(checkIntegersPosOrNeg(-99999, 99999))