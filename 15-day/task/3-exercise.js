// 3. Get Current Date in Various Formats
// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function datesInFormats() {
    let today = new Date()

    let dd = today.getDate()
    let mm = today.getMonth()
    let yyyy = today.getFullYear()

    let formatOne = `${mm}-${dd}-${yyyy}`
    let formatTwo = `${mm}/${dd}/${yyyy}`
    let formatThree = `${dd}-${mm}-${yyyy}`
    let formatFour = `${dd}/${mm}/${yyyy}`
    return `${formatOne}, ${formatTwo}, ${formatThree}, ${formatFour}`
}

console.log(datesInFormats())