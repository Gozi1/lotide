const takeUntil = function(array, callback) {
  const returnArray = [];
  for(element of array){
    
    if(callback(element))return returnArray;
    returnArray.push(element);
  };
}
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArrayEqual(results1,[1,2,5,7,2])
console.log('---');
assertArrayEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])
