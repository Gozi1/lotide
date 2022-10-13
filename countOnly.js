//takes in an array and an item to count returns the amount of occurence of itemsToCount
const countOnly = function(allItems,itemsToCount) {
  let returnObject = {};
  for (let num in allItems) {
    if (itemsToCount[allItems[num]]) {
      if (returnObject[allItems[num]]) {
        returnObject[allItems[num]] += 1;
      } else {
        returnObject[allItems[num]] = 1;
      }
    }
  }
  return returnObject;
};
module.exports = countOnly;
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);