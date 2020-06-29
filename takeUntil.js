const takeUntil = function (array, callback) {
  let results = [];

  for (let elem of array) {
    if (callback(elem)) {
      return results;
    } else {
      results.push(elem);
    }
  }
  return results;
};

module.exports = takeUntil;
