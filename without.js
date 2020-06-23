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

const without = (sourceArray, itemsToRemove) => {
  let filteredArr = [];

  for (let i = 0; i < itemsToRemove.length; i++) {
    filteredArr = sourceArray.filter((filterElem) => {
      return filterElem !== itemsToRemove[i];
    });
  }
  return filteredArr;
};
