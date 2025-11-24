// write a function named printParameters that receives 3 params and print them.

function printParameters(a,b,c) {
    typeof a === 'string' ? a = `"${a}"` : a
    typeof b === 'string' ? b = `"${b}"` : b
    typeof c === 'string' ? c = `"${c}"` : c
    return console.log(a + ",",b + ",",c)
}

// ******************* DONT MODIFY - START ******************* 
printParameters(1, 2, "hola") // should print 1, 2, "hola"
// ******************* DONT MODIFY - END ******************* 