//takes in two arrays and returns true or false, based on a perfect match
const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) return false;
  for (let num in array1) {
    if (array1[num] !== array2[num]) return false;
  }
  return true;
};


module.exports = eqArrays;
