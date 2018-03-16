Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {

      if (this[i + 1] < this[i]) {
        sorted = false;
        let temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
      }
    }
  }

  return this;
};

String.prototype.substrings = function () {
  let substrings = [];

  for (let i = 0; i < this.length; i ++) {
    for (let j = i + 1; j <= this.length; j++ ) {
      let substring = this.slice(i, j);

      if (substrings.includes(substring) === false ) {
        substrings.push(this.slice(i, j));
      }
    }
  }

  return substrings;
};
