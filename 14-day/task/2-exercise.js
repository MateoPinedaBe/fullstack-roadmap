/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.  
 */

function checkingNumbers(a , b) {
    a = parseFloat(a)
    b = parseFloat(b)
    if (isNaN(a) || isNaN(b)) return "Please, give a pair of valid Numbers for the Operation." 
    return (a === 50 || b === 50 || (a + b) === 50) ? true : undefined;
}

// Test

console.log(checkingNumbers("1" , "50"))
console.log(checkingNumbers(50 , 24.5))
console.log(checkingNumbers(1, 2.1))