// Nothing here yet...
// Make sure to link your JS in index.html!
class frog {
    constructor (toad, country, color) {
        this.country = country;
        this.toad = toad;
        this.color = color;
  
    }

    //method that returns a piece of information
    describe () {
        return `${this.toad} toad is native to ${this.country} and is a ${this.color} color.`;
}
}

//four new variables
const frog1 = new frog ('American Spadefoot','North America', 'dusty bown');
const frog2 = new frog (' Pacman ', 'South America', 'speckled Green');
const frog3 = new frog ('Surinam Horned','Guyana', 'dusty orange');
const frog4 = new frog ('Fire Belly', 'Korea', 'green and orange');

//new array for all froggos
const allFrog = [frog3, frog2, frog1, frog4];

// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.
// Inside the function's code block, simply return car.describe; so the function returns the describe phrase for the car in the parameters.

// Declare the function using function {{ functionName }} (car) {};
function read (frog) {
    console.log(frog.describe());
};

//loop through frogs with allFrogs and a for loop with .length. Call the function with the function name and parenthesis around parameters.

for (var i = 0; i < allFrog.length ; i++) {
 
    read(allFrog[i]);
}

// append frog to dom and create a new div for each frogbox. 
function appendFrogToDOM(frog) {
    var container = document.getElementById('container');
    var newDiv = document.createElement('div');
    newDiv.className = 'frogContainer'; 
    var describeText = document.createTextNode(`${frog.describe()}`);
    newDiv.appendChild(describeText);
    container.appendChild(newDiv);
}

for (var i = 0; i < allFrog.length; i++) {
    appendFrogToDOM(allFrog[i]);
}