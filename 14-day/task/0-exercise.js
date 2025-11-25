/**
 * Write a JavaScript program to get the difference between a given number and 13, 
 * if the number is broader than 13 return double the absolute difference.  
 */

function differenciateNumbers(number) {
    let num = parseFloat(number);
    if (isNaN(num) || (Number(number) !== num && number.trim() !== '')) return "Please, give a valid number to operate.";
    let absDifference = Math.abs(number - 13);
    return num > 13 ? (2 * absDifference) : absDifference;
}

// Test

console.log(differenciateNumbers(10));
console.log(differenciateNumbers(20));
console.log(differenciateNumbers(13));
console.log(differenciateNumbers(5.5));
console.log(differenciateNumbers(15.5));
console.log(differenciateNumbers("hello"));
console.log(differenciateNumbers("100"));
console.log(differenciateNumbers(Infinity))
console.log(differenciateNumbers("4 1 2"))