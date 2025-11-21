/**
 *  write a js function that receives an object and two strings as parameters
 *  the function should add a property named as the second parameter and 
 *  the value of that property should be the third parameter.
 */

let toyList = {
    car: 1,
    doll: 2,
    puzzle: 3
};

console.log("Toy list before addition: ", toyList);

let newToyNameInput = prompt("Please enter the name of the toy to add to the toy list:", "Robot");

let newToyQuantityInput = prompt("Please enter the quantity of the toy to add to the toy list:", "5");

let newToyName = newToyNameInput ? newToyNameInput.toLowerCase() : '';

let newToyQuantity = parseInt(newToyQuantityInput, 10);

console.log("Toy list after addition: ", addPropertyToObject(toyList, newToyName, newToyQuantity));

function addPropertyToObject(obj, propName, propValue) {
    if (!propName || typeof propName !== 'string') {
        console.log("Invalid or empty property name provided.");
        return obj
    }
    if (isNaN(propValue) || propValue <= 0) {
        console.log("Invalid quantity provided. It should be a positive number.");
        return obj;
    }
    let displayName = propName.charAt(0).toUpperCase() + propName.slice(1);
    obj[propName] = propValue;
    console.log(`Added element: ${displayName} with quantity: ${propValue}`);
    return obj;
}