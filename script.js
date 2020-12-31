const calculatorDispslay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

function sendNumberValue(number) {
  // If current display value is 0, replace it, if not add number
  const displayValue = calculatorDispslay.textContent;
  calculatorDispslay.textContent = displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
  // If no decimal, add one
  if (!calculatorDispslay.textContent.includes('.')) {
    calculatorDispslay.textContent = `${calculatorDispslay.textContent}.`;
  }
}

// Add Event Listeners for numbers, operators, and decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Reset display
function resetAll() {
  calculatorDispslay.textContent = '0';
}

// Event Listener
clearBtn.addEventListener('click', resetAll);