
const eqObjects = require('./eqObjects')
//take in two objects and console.log out a fun message depending on whether its passed or failed
const assertObjectsEqual = function(actual, expected) {
  const result = eqObjects(actual,expected);
  const inspect = require('util').inspect;
  let emoji;
  if (!result) {
    emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${inspect(actual)} is not equal to $${inspect(expected)}`);

  } else {
    emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${inspect(actual)} is not equal to $${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;
//test
// const sample1 = {1:21,2:"20",3:"bad"};
// const sample2 = {1:21,2:"20",3:"bad"};
// const sample3 = {1:21,2:"20",3:[1213]};
// assertObjectsEqual(sample1,sample2);
// assertObjectsEqual(sample1,sample3);