let num1 = '';
let num2 = '';
let op = '';
let numBtn = [...document.querySelectorAll('.buttons button')];
let operBtn = [...document.querySelectorAll('.oper button')];
let domDisplay = document.querySelector('.text');

//display number in display box
numBtn.forEach(function (i) {
  i.addEventListener('click', function() {
    num1 = i.textContent;
    console.log(num1);
    return domDisplay.textContent += i.textContent;
  });
});

operBtn.forEach(function (i) {
  i.addEventListener('click', function() {
    if (i.textContent != 'A/C') {
    return domDisplay.textContent = i.textContent
    } else {
      domDisplay.textContent = '';
    }
  });
});

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

  const operate = function(op, num1, num2) {
    switch (op) {
    case 'plus':
      return add(num1, num2);
    case 'minus':
      return subtract(num1, num2)
    }
  };
