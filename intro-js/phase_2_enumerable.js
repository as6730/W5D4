Array.prototype.myEach = function(eachFunc) {
  for (let i = 0; i < this.length; i++) {
    eachFunc(this[i]);
  }

};

Array.prototype.myMap = function(mapFunc) {
  let results = [];

  function eachFunc(num) {
    results.push(mapFunc(num));
  }

  this.myEach(eachFunc);

  return results;
};

Array.prototype.myReduce = function(callback, accumulator) {
  let i = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    i++;
  }

  for (let j = i; j < this.length; j++ ) {
    accumulator = callback(this[i], accumulator);
  }

  return accumulator;
};
