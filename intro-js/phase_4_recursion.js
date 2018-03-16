// recursive range

function range(start, end) {
  if (start === end) {
    return [];
  }

  if (end < start) {
    return null;
  }

  let return_arr = [end - 1];
  let rec = range(start, end - 1);
  return rec.concat(return_arr);
}

// recursive sum

function recSum(array) {
  if (array.length === 0) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return array[0] + recSum(array.splice(1));
}

// exponent

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp - 1);
}

// even and odd exponent

function exponent_2(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp === base) {
    return base;
  }
  if (exp % 2 == 0) {
    return Math.pow(exponent_2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent(base, (exp - 1) / 2), 2);
  }
}

// fibo

function fib(n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return 1;
  }

  let base = [0, 1]

  while (base.length < n) {
    fib(n - 1)
  }
}

// bsearch

function b_search(array, target) {
  if ( array.length === 0 ) {
    return -1;
  }

  let mid = Math.floor(array.length / 2);

  if ( target === array[mid] ) {
    return mid;
  } else if ( target < array[mid]) {
    return b_search(array.slice(0, mid), target);
  } else {

    let subAnswer = b_search(array.slice(mid + 1), target);

    if (subAnswer === -1) {
      return -1;
    } else {
      return subAnswer + 1 + mid;
    }
  }
}
