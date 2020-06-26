const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (firstArray, secondArray) => {
  let boolFlag = null;

  if (firstArray.length !== secondArray.length) {
    boolFlag = false;
  } else {
    boolFlag = firstArray.every((currentElem) => {
      if (Array.isArray(currentElem)) {
        return eqArrays(
          currentElem,
          secondArray[firstArray.indexOf(currentElem)]
        );
      } else {
        return currentElem === secondArray[firstArray.indexOf(currentElem)];
      }
    });
  }
  return boolFlag;
};

// Code Tests
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

// assertEqual(
//   eqArrays(
//     [[2, 3], [4]],
//     [
//       [2, 3],
//       [4, 5],
//     ]
//   ),
//   false
// ); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
