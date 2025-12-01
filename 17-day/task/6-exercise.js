// 36. Check if Last Digit of Three Integers is Same

// Write a JavaScript program that checks whether the last digit of three positive integers is the same. 

function checkDigitsIntegers(num1, num2, num3) {

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) return "Please, give a valid set of integers."

    if (num1 < 0 || num2 < 0 || num3 < 0)  return "The Integers have to be positive."

    let lastDigitOne = num1 % 10;
    let lastDigitTwo = num2 % 10;
    let lastDigitThree = num3 % 10;

    return (lastDigitOne === lastDigitTwo && lastDigitTwo === lastDigitThree) ? true : false
}

console.log(2 % 10)
console.log(checkDigitsIntegers(100, 50, 10))
console.log(checkDigitsIntegers(1,1,2))