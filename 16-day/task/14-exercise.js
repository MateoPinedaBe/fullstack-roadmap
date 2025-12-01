// 29. Check if Three Integers are in Range 50?99

// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the specified range.  

function checkSetIntegersRange(num1, num2, num3) {

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) return "Please, give a valid set of Integers."

    return ((num1 >= 50) && (num1 <= 99) || (num2 >= 50) && (num2 <= 99) || (num3 >= 50) && (num3 <= 99)) ? true : false;
}

console.log(checkSetIntegersRange(1,99,3))
console.log(checkSetIntegersRange(50,11,71))