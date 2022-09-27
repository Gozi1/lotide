const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};
const countOnly = function(allItems,itemsTocount) {
  let returnObject = {};
  for (let num in allItems) {
    if (itemsTocount[allItems[num]]) {
      if (returnObject[allItems[num]]) {
        returnObject[allItems[num]] += 1;
      } else {
        returnObject[allItems[num]] = 1;
      }
    }
  }
  return returnObject;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);