let prevValue = 0;
let op = '';
let isClear = false;

const display = document.querySelector('#display');
const btnList = document.querySelectorAll('.number');
const opList = document.querySelectorAll('.operator');
const ac = document.querySelector('#ac');
const equal = document.querySelector('.equal');

const onClickNumber = function() {
  if (isClear === false) {
    display.textContent = '';
    isClear = true;
  }

  display.textContent += this.textContent;
}

const onClickOperator = function() {
  if (op === '') {
    prevValue = parseInt(display.textContent);
  } else {
    compute();
  }
  op = this.textContent;
  isClear = false;
}

const compute = () => {
  const currValue = parseInt(display.textContent);

  switch (op) {
    case '+': prevValue += currValue; break;
    case '-': prevValue -= currValue; break;
    case '*': prevValue *= currValue; break;
    case '/': prevValue /= currValue; break;
  }

  display.textContent = prevValue; 
}

btnList.forEach(btn => btn.onclick = onClickNumber);
opList.forEach(op => op.onclick = onClickOperator);

equal.onclick = () => {
  if (op !== '') {
    compute()
    op = '';
  } else {
    prevValue = display.textContent;
  }
  isClear = false;
}

ac.onclick = () => {
  display.textContent = '0';
  op = '';
  isClear = false;
}