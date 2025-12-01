// 32. Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.  

function findClosestTo100(num1, num2) {

    num1 = Number(num1)
    num2 = Number(num2)
    const OBJECTIVE = 100;

    if (isNaN(num1) || isNaN(num2)) return "Please, give a valid Pair of Numbers."

    if (num1 === num2) return `Both numbers are to equal distance from ${OBJECTIVE}`

    return (Math.abs(num1 - OBJECTIVE) <= (Math.abs(num2 - OBJECTIVE))) ? `The First number '${num1}' is closer to ${OBJECTIVE}` : `The Second number '${num2}' is closer to ${OBJECTIVE}`
}

console.log(findClosestTo100(1, 10))