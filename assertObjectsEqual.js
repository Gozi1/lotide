const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) return false;
  for (let num in array1) {
    if (array1[num] !== array2[num]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const object1Keys= Object.keys(object1);
  const object2Keys= Object.keys(object2);
  
  if (object1Keys.length !== object2Keys.length) return false;
  for(keys in object1Keys){
    if(Array.isArray(object1[object1Keys[keys]])){
      if(!eqArrays(object1[object1Keys[keys]],object2[object1Keys[keys]])){
        return false;
      }
    }
    else if(object1[object1Keys[keys]] !== object2[object1Keys[keys]])return false
  }
  return true;
};


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

const sample1 = {1:21,2:"20",3:"bad"};
const sample2 = {1:21,2:"20",3:"bad"};
const sample3 = {1:21,2:"20",3:[1213]};
assertObjectsEqual(sample1,sample2);
assertObjectsEqual(sample1,sample3);