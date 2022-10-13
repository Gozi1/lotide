//takes in 2 agruments an array and a callback function and returns a new array based on the results of the callback function.
const map = function(array,callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

module.exports = map;

// assertArrayEqual(map([1,2,4,3],num =>num * 2),[2,4,8,6]);
// assertArrayEqual(map(["canada","aaron","george"],word =>word.charAt(0).toUpperCase() + word.slice(1)),["Canada","Aaron","George"]);
// assertArrayEqual(map([1,2,4,3],num =>num + 10),[11,12,14,13]);

