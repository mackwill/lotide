const eqArrays = (firstArray, secondArray) => {
  const boolFlag = firstArray.every((currentElem) => {
    return currentElem === secondArray[firstArray.indexOf(currentElem)];
  });
  return boolFlag;
};

const assertArraysEqual = (firstArray, secondArray, expected) => {
  let actual = eqArrays(firstArray, secondArray);
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Test code
// assertArraysEqual([1, 2, 3], [1, 2, 3], true);
// assertArraysEqual([1, 2, 3], [3, 2, 1], false);
// assertArraysEqual([1, 2, "3"], [1, 2, 3], false);
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], true);
