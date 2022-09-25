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

const middle = function(array) {
  if (array.length < 3) return [];
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1],array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1,2]), []);
assertArrayEqual(middle([1, 2, 3, 4, 5]) , [3]);
assertArrayEqual(middle([1, 2, 3, 4])  , [2,3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6])  , [3,4]);