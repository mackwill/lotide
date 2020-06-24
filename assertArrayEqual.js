const eqArrays = (firstArray, secondArray) => {
  let boolFlag = null;

  if (firstArray.length !== secondArray.length) {
    boolFlag = false;
  } else {
    boolFlag = firstArray.every((currentElem) => {
      return currentElem === secondArray[firstArray.indexOf(currentElem)];
    });
  }
  return boolFlag;
};

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) === true
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
