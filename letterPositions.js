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

const letterPositions = (sentence) => {
  let posOfLetter = {};
  sentence = sentence.split(" ").join("").toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (posOfLetter.hasOwnProperty(sentence[i])) {
      posOfLetter[sentence[i]].push(i);
    } else {
      posOfLetter[sentence[i]] = [];
      posOfLetter[sentence[i]].push(i);
    }
  }
  return posOfLetter;
};

// Test Code
// const results1 = letterPositions("hello hello");
// console.log(results1.h);
// assertArraysEqual(results1.e, [1, 6], true);
