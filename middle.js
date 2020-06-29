const middle = (inputArray) => {
  if (inputArray.length % 2 === 0) {
    return [
      inputArray[inputArray.length / 2 - 1],
      inputArray[inputArray.length / 2],
    ];
  } else {
    return [inputArray[Math.floor(inputArray.length / 2)]];
  }
};

module.exports = middle;
