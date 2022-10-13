//takes in 2 agruments an array and a callback and returns a "slice of the array with elements taken from the beginning." It keeps going until the callback returns a truthy value
const takeUntil = function(array, callback) {
  const returnArray = [];
  for(element of array){
    
    if(callback(element))return returnArray;
    returnArray.push(element);
  };
}
module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArrayEqual(results1,[1,2,5,7,2])
// console.log('---');
// assertArrayEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])
