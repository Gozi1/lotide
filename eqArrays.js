const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};
const eqArrays = function(array1,array2){
  if(array1.length !== array2.length)return false;
  for(let num in array1){
    if(array1[num] !== array2[num])return false;
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) ,true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);
