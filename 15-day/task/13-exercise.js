// 13. Create Variable with User-Defined Name

// Write a JavaScript exercise to create a variable using a user-defined name.  

function userDefinedNameVariable(name){

    const variable = '';
    const NAME = name;

    this[variable] = NAME;

    console.log(this[variable]);
}

userDefinedNameVariable("Pedro")
userDefinedNameVariable("2");