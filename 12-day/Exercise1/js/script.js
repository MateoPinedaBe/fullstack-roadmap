// write a js function that returns all the properties names of an Object

let farmAnimal = {
    name: "Cow",
    color: "Brown",
    age: 5,
    sound: "Moo"
};

function getObjectProperties(Object) {

    for (let Key in Object) {
        console.log(Key);
    }
};

getObjectProperties(farmAnimal);