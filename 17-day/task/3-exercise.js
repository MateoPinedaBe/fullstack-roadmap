// 33. Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.  

function checkRangeNumbers(num1, num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid set of Numbers."

    return ((((num1 >= 40) && (num1 <= 60)) || ((num1 >= 70) && (num1 <= 100))) && (((num2 >= 40) && (num2 <= 60)) || ((num2 >= 70) && (num2 <= 100)))) ? true : false
}

console.log(checkRangeNumbers(40,70))