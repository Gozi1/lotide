const eqArrays = function(array1,array2){
  if(array1.length !== array2.length)return false;
  for(let num in array1){
    if(array1[num] !== array2[num])return false;
  }
  return true
}


const assertArrayEqual = function(actual, expected) {
  result =eqArrays(actual,expected)
  if(!result){
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);

  }
  else{
  let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);