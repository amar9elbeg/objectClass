console.log("here Test");

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
const recipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cumin", "cinnamon", "cocoa"],
};
// console.log title of the recipe
// console.log 'Servings: recipe servings'
//console.log the ingredients one by one

//Task2

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Write the command to add the language "Go" to the end of the languages array.
// Change the difficulty to the value of 7.
// Using the delete keyword, write the command to remove the jokes key from the programming object.
// Write the command to add a new key called isFun and a value of true to the programming object.
// Using a loop, iterate through the languages array and console.log all of the languages.
// Using a loop, console.log all of the keys in the programming object.
// Using a loop, console.log all of the values in the programming object.

// Task3

// 19. Pick a penguin from Wikipedia's List of Fictional Penguins and create an object named myPenguin with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

var myPenguin = {
  character: "Tootsie the Penguin",
  origin: "Donald Duck",
  notes: 'A baby penguin in the classic 1939 cartoon "Donald\'s Penguin".',
};

// 20. Use console.log() to print the penguin's name to the console as part of a welcome message, like "Hello, I'm a penguin and my name is [NAME HERE]!"

// 21. Write another line of code that adds a new property to your penguin called canFly and set it to false. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

// 22. Add a method to your penguin called chirp that prints to the console: "CHIRP CHIRP! Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

// TO TEST IT, RUN THIS CODE: myPenguin.chirp();

// 23. Add another method to your penguin called sayHello that prints to the console the same message from step 20 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way if you change its name later, your method will still work!

// 24. Next, call your penguin's sayHello() method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at console.log() -- that's how you call the log() method of the console object!)

// 25. Without modifying any of your previous code, change the penguin's name to "Penguin McPenguinFace" and then call your penguin's sayHello() function one more time to make sure it still works.

// 26. Write another method called fly, and inside that method, use an if / else statement to print "I can fly!" to the console if your penguin's canFly property is true, or "No flying for me!" if its canFly property is false.

// 27. Call your penguin's fly() method and make sure it works!

// 28. Change the canFly property to true -- again, without modifying any of your previous code!

// 29. Now call your penguin's fly() method again and make sure it works as expected!

// 30. Write a for ... in loop to print each key to the console. (Hint: See this page for an example of this special type of loop.)

// 31. Write another for ... in loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

// Task 4

const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const burger = { name: "Burger", price: 18, category: "Lunch" };
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};

//  write a function to return more menu items with the same format as the items above. */

/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 
Your method should accept: 
(1) A string (teacher, student, or public)
and should return a number. 
For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
