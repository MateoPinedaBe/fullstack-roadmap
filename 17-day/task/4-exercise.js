// 34. Find Larger Number in Range 40?60

// Write a JavaScript program to find the largest number from the two given positive integers.
// The two numbers are in the range 40..60 inclusive.  

function findLargerNumberInRange(num1, num2) {

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid pair of Integers."

    if ((!((num1 >= 40) && (num1 <= 60))) && (!((num2 >= 40) && (num2 <= 60)))) return "Both numbers are outside the required Range."

    if (!((num1 >= 40) && (num1 <= 60))) return "The First number is not within the required Range."

    if (!((num2 >= 40) && (num2 <= 60))) return "The Second number is not within the required Range."

    if (num1 === num2) return "Both numbers are the same."

    let largestNum = (num1 > num2) ? num1 : num2

    return `The largest number is ${largestNum}`;
}

console.log(findLargerNumberInRange(40, 60))
console.log(findLargerNumberInRange(41, 40))
console.log(findLargerNumberInRange(60, 60))
console.log(findLargerNumberInRange(39, 61))
console.log(findLargerNumberInRange(40, 61))
console.log(findLargerNumberInRange(39, 60))
console.log(findLargerNumberInRange("Perro"))
