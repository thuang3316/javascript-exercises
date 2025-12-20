const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y
};

const sum = function(arr) {
	return arr.reduce((ans, item) => ans + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((ans, item) => ans * item, 1);
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
	let ans = 1;
  for (let i=num; i>1; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
