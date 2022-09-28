const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};


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

let word = countLetters("LHL"),word_2 = countLetters("lighthouse in the house");
assertEqual(word["L"], 2);
assertEqual(word["H"], 1);
assertEqual(word_2["h"], 4);
assertEqual(word_2[" "], undefined);
