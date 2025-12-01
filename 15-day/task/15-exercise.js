// 15. Difference Between Number and 13
// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference.  

function differenceNumberAnd13(number) {
    let num = number;

    let diff = Math.abs(num - 13)

    let result = (num > 13) ? diff * 2 : diff

    return result
}

console.log(differenceNumberAnd13(14))
console.log(differenceNumberAnd13(12))