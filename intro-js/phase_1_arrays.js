console.log("YTOOOOOOOOOOO");

// Instructions
// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.
//
// Array#uniq - returns a new array containing only the unique elements of the original array
// the unique elements should be in the order in which they first appear
// should not mutate the original array

// Array#twoSum - returns an array of position pairs where the elements sum to zero

// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array

Array.prototype.uniq = function() {

  let return_arr = [];

  for (let i = 0; i < this.length; i ++) {
    if ( return_arr.includes(this[i]) === false ) {
      return_arr.push(this[i]);
    }
  }

  return return_arr;
};

Array.prototype.twoSum = function() {
  let twoSums = [];

  for (let i = 0; i < this.length; i++ ) {
    for (let j = i + 1 ; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) {
        twoSums.push([i, j]);
      }
    }
  }

  return twoSums;
};


Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this[0].length; i ++) {
    transposed.push([this[0][i]]);
  }

  for (let j = 1; j < this.length; j++ ) {
    for ( let k = 0; k < this[j].length; k++ ) {
      transposed[k].push(this[j][k]);
    }
  }

  return transposed;
};
