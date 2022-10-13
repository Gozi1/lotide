const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual');
//takes in two objects and returns true or false based on a perfect match.

const eqObjects = function(object1, object2) {
  const object1Keys= Object.keys(object1);
  const object2Keys= Object.keys(object2);
  
  if (object1Keys.length !== object2Keys.length) return false;
  for(keys in object1Keys){
    if(Array.isArray(object1[object1Keys[keys]])){
      if(!eqArrays(object1[object1Keys[keys]],object2[object1Keys[keys]])){
        return false;
      }
    }
    else if(object1[object1Keys[keys]] !== object2[object1Keys[keys]])return false
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); 

assertEqual(eqObjects(ab, abc),false);
assertEqual(eqObjects(ab, ba),true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);
assertEqual(eqObjects(cd, dc),true);

module.exports = eqObjects;