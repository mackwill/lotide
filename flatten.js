const flatten = (arrayToFlatten) => {
  const flattenedArr = [];

  arrayToFlatten.map((elem) => {
    Array.isArray(elem)
      ? flattenedArr.push(...flatten(elem))
      : flattenedArr.push(elem);
  });

  return flattenedArr;
};

module.exports = flatten;
