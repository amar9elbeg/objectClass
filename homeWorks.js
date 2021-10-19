/* OBJECTS PRACTICE */

// Task 1
/* 
Create a new object called restaurant that includes:
name
cuisine_type
city
rating
*/
const restaurant = {
    name: "Cheesecake Factory",
    cuisine_type: "New York style",
    city: "Chantilly",
    rating: 4,
};

// Task 2

/* 
Create a function called 'getName' that accepts an object as a parameter 
and returns the name of the restaurant
*/

function getName(restaurant) {
    return restaurant.name
};


/* Uncomment the console.log() to check your work */
// console.log(getName(restaurant))

// Task 3

/* 
Look at the bestRestaurant variable below. And complete the following tasks
Add an owner property with the value of 'Gordon Ramsey'
Change the name to 'Zest Kitchen'
Change the cuisine_type to 'American'
*/

let bestRestaurant = {
    name: "Mr. Shabu",
    cuisine_type: "Asian",
    rating: 5,
    city: "Salt Lake City",
};
bestRestaurant.name = "Zest Kitchen"
bestRestaurant.cuisine_type = "American"
bestRestaurant.owner = "Gordon Ramsey"

/* Uncomment the console.log() to check your work */
// console.log(bestResturant.owner) // 'Gordon Ramsey'
// console.log(bestRestaurant.cuisine_type) // 'American'
// console.log(bestRestaurant.city) // 'American'

// Task 4

/* 
Create a function 'whereToEat' that takes in two arguments
1. a restaurant object
2. a cuisine type
If the restaurant's cuisine type is the same as the cuisine type passed in 
return the string `Just made reservations at ${name}`
If it doesn't return the string `Looks like I'll be cooking tonight`
*/

let shabu = {
    name: "Mr. Shabu",
    cuisine_type: "Asian",
    rating: 5,
    city: "Salt Lake City",
};

let alberto = {
    name: "Casa de Alberto",
    cuisine_type: "Mexican",
    rating: 3,
    city: "Los Angeles",
};

let curryHouse = {
    name: "Bombay House",
    cuisine_type: "Indian",
    rating: 5,
    city: "Phoenix",
};

function whereToEat() {

}

/* Uncomment the console.log() to check your work */
// console.log(whereToEat(shabu, 'Mexican')) // `Looks like I'll be cooking tonight`
// console.log(whereToEat(curryHouse, 'Indian')) // `Just made reservations at Bombay House`
// console.log(whereToEat(alberto, 'Mexican')) // Just made reservations at Casa de Alberto`



// Task 5

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    gender: "male",
    interests: ["music", "skiing"],
    bio: function() {
        alert(
            this.name[0] +
            " " +
            this.name[1] +
            " is " +
            this.age +
            " years old. He likes " +
            this.interests[0] +
            " and " +
            this.interests[1] +
            "."
        );
    },
    greeting: function() {
        alert("Hi! I'm " + this.name[0] + ".");
    },
};
// write the function return My name is Bob and my last name is Smith
// console.log bob age and gender
// write the function that returns My name is Bob Smith and my hobbies are music and skiing