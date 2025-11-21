/**
 *  write a js function that receives an object and a string as parameters
 *  the function should remove the property that has the name of the string parameter
 *  from the object and return it.
 */

let shoppingList = {
    milk: 2,
    bread: 1,
    eggs: 12,
    butter: 1
};

console.log("Shopping list before deletion: ", shoppingList);
let deletedElementInput = prompt("Please enter the property name to delete from the shopping list:", "Milk");
let deletedElement = deletedElementInput ? deletedElementInput.toLowerCase() : '';

console.log("Shopping list after deletion: ", removePropertyFromObject(shoppingList, deletedElement));

function removePropertyFromObject(obj, propName) {

    if (!propName || typeof propName !== 'string') {
        console.log("Invalid or empty property name provided.");
        return obj;
    }

    if (!obj.hasOwnProperty(propName)) {
        console.log(`'${propName}' is not in the list.`);
        return obj;
    }

    let displayName = propName.charAt(0).toUpperCase() + propName.slice(1);

    console.log(`Deleted element: ${displayName}`);

    delete obj[propName];

    return obj;
}