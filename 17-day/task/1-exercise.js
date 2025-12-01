// 31. Find Largest of Three Integers

// Write a JavaScript program to find the largest of three given integers.  

function findLargestInteger(num1, num2, num3) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) return "Please, give a valid set of Integers."

    if ((num1 >= num2) && (num1 >= num3)) return num1;

    if ((num2 >= num1) && (num2 >= num3)) return num2;

    return num3;
}

console.log(findLargestInteger(1,2,3))
console.log(findLargestInteger(3,2,1))