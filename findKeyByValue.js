const findKeyByValue = (inputObject, valueToFind) => {
  for (let key in inputObject) {
    if (inputObject[key] === valueToFind) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;
