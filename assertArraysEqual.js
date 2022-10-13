//requires eqArrays
const eqArrays = require('./eqArrays');

// This take in two arrays and console.log out a fun message depending on whether its passed or failed
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

module.exports = assertArrayEqual;
