// 16. Sum Two Integers (Triple if Equal)

// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.  

function sumIntegers(number1,number2) {
    let num1 = number1;
    let num2 = number2;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid set of numbers";

    let result = (num1 === num2) ? (num1 + num2) * 3 : num1 + num2

    return result
}

console.log(sumIntegers(1,1))
console.log(sumIntegers(1,2))
console.log(sumIntegers("Perro"))
console.log(sumIntegers(1))