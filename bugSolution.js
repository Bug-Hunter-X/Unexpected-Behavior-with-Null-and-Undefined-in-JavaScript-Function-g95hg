function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null; // Correctly handles null and undefined values
  } else {
    return a + b;
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(undefined, 2)); // Output: null
console.log(foo(1, undefined)); // Output: null
console.log(foo(1,2)); // Output: 3