/**
 *  write a js function that sums 2 numbers
 */

function sumNumbers(a,b) {
    ((!Number.isFinite(a)) ||!Number.isFinite(b)) ? console.log("you should provide two numbers") : console.log("the sum is: " + (a + b))
}

// ******************* DONT MODIFY - START ******************* 
sumNumbers(1, 3); // should print "the sum is: 4"
sumNumbers(0, 3); // should print "the sum is: 3"
sumNumbers(0, 0); // should print "the sum is: 0"
sumNumbers(100, 1000); // should print "the sum is: 1100"
sumNumbers(2); // should print "you should provide two numbers"
// ******************* DONT MODIFY - END ******************* 