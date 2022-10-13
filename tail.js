
// returns the tail of an array (everything except for the first item of the provided array).

const tail = function(array) {
  let newArray = [];
  for (let num in array) {
    newArray.push(array[num]);
  }
  newArray.shift();
  return newArray;
};


module.exports = tail;