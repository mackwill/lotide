const countOnly = (allItems, itemsToCount) => {
  let foundItems = {};
  for (let item in itemsToCount) {
    let count = 0;
    allItems.map((elem) => {
      if (elem === item) {
        count++;
        foundItems[item] = count;
      }
    });
  }
  return foundItems;
};

module.exports = countOnly;
