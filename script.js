const calculatorDispslay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextVlaue = false;

function sendNumberValue(number) {
  // Replace current display value if first value is entered
  if (awaitingNextVlaue) {
    calculatorDispslay.textContent = number;
    awaitingNextVlaue = false;
  } else {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDispslay.textContent;
    calculatorDispslay.textContent = displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  // If operator pressed, don't add decimal
  if (awaitingNextVlaue) return;
  // If no decimal, add one
  if (!calculatorDispslay.textContent.includes('.')) {
    calculatorDispslay.textContent = `${calculatorDispslay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDispslay.textContent);
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log('currentValue', currentValue);
  }
  // Ready for next value, store operator
  awaitingNextVlaue = true;
  operatorValue = operator;
  console.log('firstValue', firstValue);
  console.log('operator', operatorValue);
}

// Add Event Listeners for numbers, operators, and decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset all values, display
function resetAll() {
  calculatorDispslay.textContent = '0';
  firstValue = 0;
  operatorValue = '';
  awaitingNextVlaue = false;
}

// Event Listener
clearBtn.addEventListener('click', resetAll);