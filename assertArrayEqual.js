const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) === true
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;
