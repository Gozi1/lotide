
//returns a subset of a given array, removing unwanted elements
const without = function(source,itemsToRemove) {
  let returnArray = [];
  for (let num in source) {
    if (!itemsToRemove.includes(source[num])) returnArray.push(source[num]);
  }
  return returnArray;
};
module.exports = without;
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);