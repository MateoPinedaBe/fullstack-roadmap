// 18. Check if Number or Sum is 50

// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 

function checkPairOfNumbers(number1, number2) {

    let num1 = number1;
    let num2 = number2;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid pair of numbers."

    let result = ((num1 === 50 || num2 === 50) || (num1 + num2) === 50) ? true : false;

    return result;
}

console.log(checkPairOfNumbers("Perro"))
console.log(checkPairOfNumbers(25,25))
console.log(checkPairOfNumbers(50,20))
console.log(checkPairOfNumbers(50, "Perro"))
console.log(checkPairOfNumbers(24.5,24.5))
console.log(checkPairOfNumbers(50,100))