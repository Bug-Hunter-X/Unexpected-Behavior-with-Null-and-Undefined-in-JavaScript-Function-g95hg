function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause unexpected behavior if a or b is undefined
  } else {
    return a + b;
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(undefined, 2)); // Output: null (unexpected)
console.log(foo(1, undefined)); // Output: null (unexpected)