const assertArraysEqual = require("../assertArrayEqual");

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => True
assertArraysEqual([1, 2], [1, 2, 3]); // => False
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => False
assertArraysEqual([1, 2, "3"], [1, 2, 3]); // => False
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => True
assertArraysEqual([], []); // => True
