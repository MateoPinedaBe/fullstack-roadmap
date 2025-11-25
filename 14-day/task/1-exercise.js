/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.  
 */

// I wasn't entirely sure about this, so I strictly followed the instructions in the exercise.
// If any of the given values aren't Integers, then it's automatically incorrect and an error message is displayed.

function sumIntegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "Please, give a set of valid Integers for the Operation."
    return (a === b) ? ((a + b) * 3) : (a + b);
}

// Test

console.log(sumIntegers(2));
console.log(sumIntegers("House", 3));
console.log(sumIntegers("1","2"))
console.log(sumIntegers(10, 20))
console.log(sumIntegers(1,1))
console.log(sumIntegers(2,2))
console.log(sumIntegers(2,3))
console.log(sumIntegers(3,2))
console.log(sumIntegers(3,3))
console.log(sumIntegers(3,4))
console.log(sumIntegers(2.1,2.1))
console.log(sumIntegers({}, {}))
console.log(sumIntegers(true, false))
console.log(sumIntegers([], false))