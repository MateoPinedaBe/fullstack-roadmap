// write a js function that returns all the properties names of an Object

let farmAnimal = {
    name: "Cow",
    color: "Brown",
    age: 5,
    sound: "Moo"
};

function getObjectProperties(object) {
    return Object.keys(object)
};

console.log(getObjectProperties(farmAnimal));