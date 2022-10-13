
//Takes in a string and returns and object containing the position(s) of letters in the string
const letterPosition = function(string) {
  let stringObject = {};
  for (let letter in string) {
    if (string[letter] === " ") continue;
    if (stringObject[string[letter]]) {
      stringObject[string[letter]].push(parseInt(letter));
    } else {
      stringObject[string[letter]] = [parseInt(letter)];
    }
  }
  return stringObject;
};

module.exports = letterPosition;


// let example = letterPosition("Hello");

// assertArrayEqual(example["l"], [2,3]);
// assertArrayEqual(example["H"], [0]);
// assertArrayEqual(example['e'],[1]);
// assertArrayEqual(example['o'],[4]);
