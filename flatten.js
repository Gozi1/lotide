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

const flatten = function(roughArray) {
  let flatArray = [];
  //recursion baby
  const pusher = function(array) {
    for (let num in array) {
      if (Array.isArray(array[num])) {
        pusher(roughArray[num]);
      } else flatArray.push(array[num]);
    }
  };
  pusher(roughArray);
  return flatArray;
};

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
