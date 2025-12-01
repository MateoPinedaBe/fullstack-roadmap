// 6. Check Leap Year (Gregorian Calendar)
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  

function checkLeapYear(year) {
    let yearInt = parseInt(year);
    if (isNaN(yearInt)) return "Please, give a valid Year."
    let check = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
    return (check) ? "It is a Leap Year" : "Is not a Leap Year."
}

console.log(checkLeapYear(2025))
console.log(checkLeapYear(2024))