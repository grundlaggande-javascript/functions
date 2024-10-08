// Basic function declaration
function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

// Local variables: These variables exist only inside the function. 
function greet(name) {
    let greeting = "Hello, " + name;
    console.log(greeting);
}
greet("Alice"); // Output: Hello, Alice
console.log(greeting) // Will give an error.

// Outer variables: Functions can access variables declared outside of them
let userName = "Bob";
function greetUser() {
    console.log("Hello, " + userName);
}
greetUser(); // Output: Hello, Bob

// Parameters: Functions can accept inputs called parameters
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5

// Default values: You can set default parameter values
function welcomeMessage(name = "Guest") {
    console.log("Welcome, " + name + "!");
}
welcomeMessage(); // Output: Welcome, Guest!
welcomeMessage("Charlie"); // Output: Welcome, Charlie!

// Returning a value: Functions can return results using the `return` statement
function multiply(x, y) {
    return x * y;
}
let result = multiply(4, 5);
console.log(result); // Output: 20

// Naming a function: Functions should have meaningful names
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

// Summary of key points:
// - Functions allow you to group code for reuse
// - Use local variables for temporary data inside functions
// - Outer variables can be accessed by functions
// - Parameters let functions take input values
// - Set default parameter values for flexibility
// - Use `return` to get a result from a function
// - Choose meaningful names for better readability
// - Well-named functions can serve the role of comments



/*
1. Basic function and execution (kg-to-pounds 2.205)
2. 

*/