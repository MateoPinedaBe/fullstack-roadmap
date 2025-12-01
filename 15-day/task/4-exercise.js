// 4. Calculate Area of Triangle (Sides: 5, 6, 7)
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

function calculateAreaTriangle() {
    let sA = 5;
    let sB = 6;
    let sC = 7;
    let semiPer = (sA + sB + sC)/2
    let area = Math.sqrt(semiPer*(semiPer-sA)*(semiPer-sB)*(semiPer-sC))
    return area
}

console.log(calculateAreaTriangle())