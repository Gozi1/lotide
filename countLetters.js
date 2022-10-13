

// takes in a sentence (as a string) and then return a count of each of the letters in that sentence
const countLetters = function(word) {
  let lettersCounted = {};
  for (letter in word) {
    if (word[letter] === " ") continue;

    if (lettersCounted[word[letter]]) {
      lettersCounted[word[letter]] += 1;
    } else {
      lettersCounted[word[letter]] = 1;
    }
  }
  return lettersCounted;
};
module.exports = countLetters;

// let word = countLetters("LHL"),word_2 = countLetters("lighthouse in the house");
// assertEqual(word["L"], 2);
// assertEqual(word["H"], 1);
// assertEqual(word_2["h"], 4);
// assertEqual(word_2[" "], undefined);
