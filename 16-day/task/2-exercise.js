// 17. Difference Between Number and 19 (Triple if >19)

// Write a JavaScript program to compute the absolute difference between a specified number and 19.
// Returns triple the absolute difference if the specified number is greater than 19.  

function differenceBetweenNumberAnd19(number){

    let num = number;

    let difference = Math.abs(num - 19);

    let result = (num > 19) ? difference * 3 : difference;

    return result;

}

console.log(differenceBetweenNumberAnd19(20))
console.log(differenceBetweenNumberAnd19(18))