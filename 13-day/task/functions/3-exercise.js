// Write a function that calculates the area of a right triangle.

function rightTriangleArea(a,b) {
    (!Number.isFinite(a) || !Number.isFinite(b)) ? console.log("can't operate") :
    (b === 0) ? console.log("triangle height can't be 0") : 
    (a === 0 ) ? console.log("triangle length can't be 0") : 
    console.log((a*b)/2);
}

rightTriangleArea(1,0)
rightTriangleArea("Corazón", 1)
rightTriangleArea(4, "Casa")
rightTriangleArea("Atún", "Perro")
rightTriangleArea(null, 2)
rightTriangleArea("1", 2)

// ******************* DONT MODIFY - START ******************* 
rightTriangleArea(4, 5); // should print 10
rightTriangleArea(2, 2); // should print 2
rightTriangleArea(0, 5); // should print "triangle length can't be 0"
rightTriangleArea(10, 32); // should print 160
// ******************* DONT MODIFY - END ******************* 
