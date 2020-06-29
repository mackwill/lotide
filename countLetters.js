const countLetters = (strToSearch) => {
  let foundLetters = {};

  for (let char of strToSearch.split(" ").join("").toLowerCase()) {
    if (foundLetters.hasOwnProperty(char)) {
      foundLetters[char]++;
    } else {
      foundLetters[char] = 1;
    }
  }

  return foundLetters;
};

module.exports = countLetters;
