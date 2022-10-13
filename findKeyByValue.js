
// takes in an object and a value. scans the object and return the first key which contains the given value. If no key with that given value is found, then it returns undefined.
const findKeyByValue = function(object,value) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);