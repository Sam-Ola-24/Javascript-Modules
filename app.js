// app.js

//import statements
import multiply, { add, subtract, addAndLogUpper } from "./mathModule.js";
import { toUpperCase, toLowerCase } from "./stringModule/stringModule.js";
import { findMax, reverseArray } from "./arrayModule/arrayModule.js";

// Call the functions and log results (your choice of arguments)
console.log("Add: add(5, 3) = ", add(5, 3)); // Test your add function
console.log("Subtract: subtract(5, 3) = ", subtract(5, 3)); // Test your subtract function
console.log("Uppercase: toUpperCase('hello') = ", toUpperCase("hello")); // Test string manipulation
console.log("Lowercase: toLowerCase('HELLO') = ", toLowerCase("HELLO")); // Test string manipulation

console.log("Multiply: multiply(4, 5) = ", multiply(4, 5)); // Test multiply function

console.log("Max: findMax([1, 2, 3, 4, 5]) = ", findMax([1, 2, 3, 4, 5])); // Test findMax
console.log("Reversed: reverseArray([1, 2, 3]) = ", reverseArray([1, 2, 3])); // Test reverseArray

//new function imported from './mathModule.js';
addAndLogUpper("addAndLogUpper(10, 20) = " + 10, 20); // Test the new function

//Final task
function combinedModule() {
  let x = findMax([1, 2, 3, 4, 5, 6, 7]);
  let multiplyResult = multiply(x, 5);
  let finalResult = toUpperCase(multiplyResult.toString());
  console.log(
    "Result from the final task of combining modules = " + finalResult
  );
}

combinedModule();
