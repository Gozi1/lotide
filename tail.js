const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    let emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    let emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};

const tail = function(array) {
  let newArray = [];
  for(let num in array){
      newArray.push(array[num]);
  }
  newArray.shift();
  return newArray;
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
let assertArray = ["Lighthouse", "Labs"]
length =Math.max(result.length)
for (let i = 0; i <length ;i++){
  assertEqual(result[i],assertArray[i])
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);