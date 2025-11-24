/*
Write a function called processMixedTypes that takes three parameters: p1, p2, and p3.
The function should perform the following operations and return a text string in the specified format:
        ° If p1 is strictly null or undefined, the function must immediately return the string "Invalid first value".
        ° If p1 is a string, convert it to a number using Number().
        ° Otherwise, p1 must retain its original value.
        ° If p2 is a number, convert it to a string using String().
        ° Otherwise, p2 must retain its original value.
        ° p3 must always be evaluated in a Boolean context (implicit or explicit Boolean coercion).
    The function must return a string concatenating the processed values ​​of p1, p2, and p3, separated by a hyphen (-).
    Example: "${processed_value_p1}-${processed_value_p2}-${boolean_value_p3}"
*/

function processMixedTypes(p1, p2, p3) {
    // Your code Here
    // ...
    // ...
    // ...
}

// ******************* DONT MODIFY - START *******************
console.log(processMixedTypes("10", 5, true));         // Expected: "10-5-true"
console.log(processMixedTypes(20, "hello", 0));        // Expected: "20-hello-false"
console.log(processMixedTypes(null, 10, "yes"));       // Expected: "Invalid first value"
console.log(processMixedTypes("5", 0, ""));            // Expected: "5-0-false"
console.log(processMixedTypes(1, 2, "false"));         // Expected: "1-2-true"
console.log(processMixedTypes(undefined, "test", 1));  // Expected: "Invalid first value"
console.log(processMixedTypes("abc", 15, "0"));        // Expected: "NaN-15-true"
// ******************* DONT MODIFY - END *******************
