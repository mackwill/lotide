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

const middle = (inputArray) => {
  if (inputArray.length % 2 === 0) {
    return [
      inputArray[inputArray.length / 2 - 1],
      inputArray[inputArray.length / 2],
    ];
  } else {
    return [inputArray[Math.floor(inputArray.length / 2)]];
  }
};

// Test code
// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], false);
