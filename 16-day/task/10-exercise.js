// 25. Check if Number is Multiple of 3 or 7

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function checkMultiple3Or7(num) {
    num = Number(num)
    if (isNaN(num)) return "Please, give a valid number."
    return ((num % 3 === 0) || (num % 7 === 0)) ? true : false;
}

console.log(checkMultiple3Or7(3))
console.log(checkMultiple3Or7(7))
console.log(checkMultiple3Or7(1))
console.log(checkMultiple3Or7("Perro"))