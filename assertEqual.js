const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log("AssertionError " + emoji + " :" + actual + " is not equal to " + expected);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log("Assertion Passed " + emoji + " :" + actual + " is equal to " + expected);
  }
  
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);