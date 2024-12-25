# Unexpected Behavior with Null and Undefined in JavaScript Function

This repository demonstrates a common JavaScript bug related to handling `null` and `undefined` values in a function.  The original code uses loose equality (`==`) which does not correctly differentiate between `null` and `undefined`.  The corrected version uses strict equality (`===`) and explicitly checks for `undefined`, preventing the unexpected behavior.

## Bug Description
The function `foo` intends to return `null` if either input is `null`. However, it also returns `null` if either input is `undefined`.  This behavior is unexpected and can lead to subtle errors in larger programs.  This is because `null == undefined` is true in JavaScript, but `null === undefined` is false. The solution clarifies this and improves the logic. 

## Solution
The solution incorporates strict equality (`===`) to improve the accuracy and predictability of the function.