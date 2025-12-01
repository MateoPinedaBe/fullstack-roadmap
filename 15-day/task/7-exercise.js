// 7. Find Years When Jan 1 is Sunday (2014?2050)
// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

function findFirstJanuary2014To2050() {
    for (year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        if (date.getDay() == 1) {
            let day = weekDays[date.getDay()]
            console.log(`January 1st is a ${day} in the year ${year}`)
        }
    }
}

findFirstJanuary2014To2050()