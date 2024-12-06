// Step 1: Declared global variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Step 2: Function and Block
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);

    // Step 3: Variable Decleration and Scope
    if(true) {
        const anotherNewBurger = 'Maple Bacon Burger';
        burgers.push(anotherNewBurger);
    }
}

function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}



