// Let's create a an object called car; Object contains property and method().
const car = {
  mark: "Camry",
  color: "White",
  manufacturer: "Toyota",
};

const oldCar = {
    mark: "Camry",
    color: "White",
    manufacturer: "Toyota",
  };

// This command will pront the value of the property of object called car.
console.log(car.mark);
// Let's try to print object car's manufacturer.
console.log(car.manufacturer);
// Let's try to print object car's color.
console.log(car.color);

const name = "Tofu"; // variable



const Nicholas = {
    name : "Nicholas Khishigbat",
    age: 14,
    hobby : "gaming",

    sayYourHobby : function() {
        console.log(this.hobby)
    },
    morning : function() {
        console.log("I open my eyes")
    }
};


