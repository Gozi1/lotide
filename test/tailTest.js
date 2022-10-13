
//Exports
const assertEqual = require('../assertEqual');
const tail = require('../tail');

//Test Code
const result = tail(["Hello", "Lighthouse", "Labs"]);
let assertArray = ["Lighthouse", "Labs"];
let length = Math.max(result.length);
for (let i = 0; i < length; i++) {
  assertEqual(result[i],assertArray[i]);
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3);