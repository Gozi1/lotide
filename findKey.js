const assertEqual = function(actual, expected) {
  let emoji;
  if (actual !== expected) {
    emoji = String.fromCodePoint(0x1FAE0);
    console.log(`AssertionError ${emoji} : ${actual} is not equal to ${expected}`);
  } else {
    emoji = String.fromCodePoint(0x1F973);
    console.log(`Assertion Passed ${emoji} : ${actual} is equal to ${expected}`);
  }
  
};
const findKey = (object,callback) => {
  const keys = Object.keys(object); 
  for(key of keys){
    if(callback(object[key])){
      return key;
    }
}
return undefined;
}
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
const result2 =findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
const result3 =findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 1 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 6 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(result,"noma")
assertEqual(result2,"Ora")
assertEqual(result3,undefined)