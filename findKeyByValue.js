const findKeyByValue = (inputObject, valueToFind) => {
  for (let key in inputObject) {
    if (inputObject[key] === valueToFind) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;

// Test Code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
