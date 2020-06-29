const without = (sourceArray, itemsToRemove) => {
  let filteredArr = [];

  for (let i = 0; i < itemsToRemove.length; i++) {
    filteredArr = sourceArray.filter((filterElem) => {
      return filterElem !== itemsToRemove[i];
    });
  }
  return filteredArr;
};

module.exports = without;
