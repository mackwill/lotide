const letterPositions = (sentence) => {
  let posOfLetter = {};
  sentence = sentence.split(" ").join("").toLowerCase();

  for (let i = 0; i < sentence.length; i++) {
    if (posOfLetter.hasOwnProperty(sentence[i])) {
      posOfLetter[sentence[i]].push(i);
    } else {
      posOfLetter[sentence[i]] = [];
      posOfLetter[sentence[i]].push(i);
    }
  }
  return posOfLetter;
};

module.exports = letterPositions;
