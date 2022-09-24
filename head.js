const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};

const head = function(array) {
  return array[0];
};
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");