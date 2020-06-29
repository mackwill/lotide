const middle = require("../middle");
const assertArraysEqual = require("../assertArrayEqual");

// Test code
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
