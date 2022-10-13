
// checks if 2 values are equal
const assertEqual = function(actual, expected) {
  let emoji;
  if (actual !== expected) {
    emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};

//exports function
module.exports = assertEqual;