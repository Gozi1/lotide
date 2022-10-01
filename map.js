
const map = function(array,callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};
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

assertArrayEqual(map([1,2,4,3],num =>num * 2),[2,4,8,6]);
assertArrayEqual(map(["canada","aaron","george"],word =>word.charAt(0).toUpperCase() + word.slice(1)),["Canada","Aaron","George"]);
assertArrayEqual(map([1,2,4,3],num =>num + 10),[11,12,14,13]);

