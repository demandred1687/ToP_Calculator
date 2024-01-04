let num1 = '';
let num2 = '';
let op = '';

const add = function(...args) {
    let sum = 0;
      for (let i = 0; i<args.length; i++) {
    sum+=args[i];
    }
    return sum;
  };
  
const subtract = function(x,y) {
      x-=y;
    return x;
  };
  
const sum = function(arr) {
    let sum = 0;
      for (let i = 0; i<arr.length; i++) {
    sum+=arr[i];
    }
    return sum;
  };
  
const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; ++i) {
   total *= arr[i];
  }
  return total;
  };
  
const power = function(x,y) {
      let total = x;
    for (let i = y; i > 1; i--) {
      total*=x;
    }
    return total;
  };
  
const factorial = function(x) {
  let total = x;
  for (let i = x; i > 1; i--) {
  total *= (i-1);
  }
  return total == 0 ? 1 : total;
  };