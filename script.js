let num1 = '';
let num2 = '';
let op = '';
let Btn = [...document.querySelectorAll('button')];
//let operBtn = [...document.querySelectorAll('.oper button')];
let domDisplay = document.querySelector('.text');

//display number in display box
function displayer(val) {
  return domDisplay.textContent += val;
}

//event listener for buttons
Btn.forEach(function (i) {
  i.addEventListener('click', function() {
    switch (true) {
    case i.textContent == 'A/C':
      domDisplay.textContent = '';
      num1 = '';
      num2 = '';
      op = '';
      break;
    case i.textContent == '=':
      num2 = Number(domDisplay.textContent);
      console.log(operate(op, num1, num2));
      operate(op,num1,num2);
      break;
    case /[-+x/]/.test(i.textContent):
      op = i.textContent;
      num1 = Number(domDisplay.textContent);
      console.log(op);
      if (num2 != '') {
        operate(op,num1,num2);
      }
      break;
    default:
      if (op == '') {
        num1 += i.textContent;
        console.log(num1);
        displayer(i.textContent);
      } else {
        domDisplay.textContent = '';
        num2 += i.textContent;
        displayer(i.textContent);
      }
  }});
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

const divide = function(x,y) {
  y == 0 ? 'no' : x/=y
  return x;
}
console.log(divide(6,2));
  const operate = function(op, num1, num2) {
    switch (op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2)
    case '/':
      return divide(num1, num2)
    case 'x':
      return multiply(num1, num2)
    }
  };
