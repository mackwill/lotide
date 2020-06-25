// const eqArrays = (firstArray, secondArray) => {
//   let boolFlag = null;

//   if (firstArray.length !== secondArray.length) {
//     boolFlag = false;
//   } else {
//     boolFlag = firstArray.every((currentElem) => {
//       return currentElem === secondArray[firstArray.indexOf(currentElem)];
//     });
//   }
//   return boolFlag;
// };

// const assertArraysEqual = (actual, expected) => {
//   eqArrays(actual, expected) === true
//     ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, (word) => word[0]);
// console.log(results1);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
