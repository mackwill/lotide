const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (firstArray, secondArray) => {
  const boolFlag = firstArray.every((currentElem) => {
    return currentElem === secondArray[firstArray.indexOf(currentElem)];
  });
  return boolFlag;
};

// const pushToArray = (targetArray, arrayToCopy) => {
//   arrayToCopy.map((elem) => {
//     targetArray.push(elem);
//   });
// };

const flatten = (arrayToFlatten) => {
  const flattenedArr = [];

  arrayToFlatten.map((elem) => {
    Array.isArray(elem)
      ? flattenedArr.push(...flatten(elem))
      : flattenedArr.push(elem);
  });

  return flattenedArr;
};
