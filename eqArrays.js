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

module.exports = eqArrays;
