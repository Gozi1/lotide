//takes in an object and a callback. It scans the object and return the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
const findKey = (object,callback) => {
  const keys = Object.keys(object); 
  for(key of keys){
    if(callback(object[key])){
      return key;
    }
}
return undefined;
}

module.exports = findKey;
// const result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);
// const result2 =findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 1 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);
// const result3 =findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 1 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 6 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2);

// assertEqual(result,"noma")
// assertEqual(result2,"Ora")
// assertEqual(result3,undefined)

