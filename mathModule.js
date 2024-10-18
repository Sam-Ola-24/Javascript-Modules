// mathModule.js
import { toUpperCase } from "./stringModule/stringModule.js";

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// mathModule.js

export function addAndLogUpper(a, b) {
  const result = add(a, b);
  console.log("addAndLogUpper: " + toUpperCase(result.toString()));
}
