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

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  eqObjects(actual, expected) === true
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};

// // Test Code
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false
