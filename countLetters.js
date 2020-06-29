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

// Test Code
// let results = countLetters("LHL");
// assertEqual(results["l"], 2);
// assertEqual(results["h"], 1);

// let results = countLetters("lighthouse in the house");
// assertEqual(results["l"], 1);
// assertEqual(results["i"], 2);
// assertEqual(results["g"], 1);
// assertEqual(results["h"], 4);
// assertEqual(results["t"], 2);
// assertEqual(results["o"], 2);
// assertEqual(results["u"], 2);
// assertEqual(results["s"], 2);
// assertEqual(results["e"], 3);
// assertEqual(results["n"], 1);
