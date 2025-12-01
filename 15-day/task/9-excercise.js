// 9. Days Left Before Christmas

// Write a JavaScript program to calculate the days left before Christmas.  

function daysBeforeChristmas() {

    let today = new Date();

    console.log("Current Date: " + today.toDateString());

    let christmas = new Date(2025, 11, 25);

    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
        console.log("Christmas Next Year:" + christmas.toDateString());
    } else {
        console.log("Christmas Now: " + christmas.toDateString());
    }

    const MILLISECOND_IN_DAY = 1000 * 60 * 60 * 24;

    let diffMilliseconds = christmas.getTime() - today.getTime();
    let diffDays = diffMilliseconds / MILLISECOND_IN_DAY;

    let daysLeft = Math.ceil(diffDays);

    (daysLeft === 0) ? console.log("Christmas is Today!") : console.log(daysLeft + " days left until Christmas!")
    
}

daysBeforeChristmas();