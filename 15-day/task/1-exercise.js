// 1. Display Current Day and Time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function displayCurrentDayAndTime(){
    let today = new Date();
    let thisDayNow = today.getDay();
    let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let thisDay = dayList[thisDayNow];
    let rightNowHour = today.getHours()
    let rightNowMinutes = today.getMinutes();
    let rightNowSeconds = today.getSeconds();
    let timeSet = '';
    (rightNowHour >= 12) ? timeSet = 'PM' : timeSet = 'AM';
    (rightNowHour > 12) ? rightNowHour -= 12 : 0;
    return `\tToday is: ${thisDay}.
    Current Time is: ${rightNowHour} ${timeSet} : ${rightNowMinutes} : ${rightNowSeconds}`
}
console.log(displayCurrentDayAndTime())
