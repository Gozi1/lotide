const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) return false;
  for (let num in array1) {
    if (array1[num] !== array2[num]) return false;
  }
  return true;
};


const assertArrayEqual = function(actual, expected) {
  let result = eqArrays(actual,expected);
  if (!result) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);

  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
};

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



let example = letterPosition("Hello");

assertArrayEqual(example["l"], [2,3]);
assertArrayEqual(example["H"], [0]);
assertArrayEqual(example['e'],[1]);
assertArrayEqual(example['o'],[4]);
