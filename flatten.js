
//takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(roughArray) {
  let flatArray = [];
  //recursion baby
  const pusher = function(array) {
    for (let num in array) {
      if (Array.isArray(array[num])) {
        pusher(array[num]);
      } else flatArray.push(array[num]);
    }
  };
  pusher(roughArray);
  return flatArray;
};
module.exports = flatten;

//test code
// assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
