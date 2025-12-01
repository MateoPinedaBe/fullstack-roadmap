// 28. Check if Two Integers are in Range 50?99

// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
// Return true if either of them falls within the range.  

function checkIntegersRange(num1, num2) {

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid pair of Integers."

    return ((num1 >= 50) && (num1 <= 99) || (num2 >= 50) && (num2 <= 99)) ? true : false;

}

console.log(checkIntegersRange(1,99))
console.log(checkIntegersRange(50, 49))
console.log(checkIntegersRange(50, 99))
console.log(checkIntegersRange(1))