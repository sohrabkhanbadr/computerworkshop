const display = document.getElementById("display");
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

function appendNumber(number, displayId) {
  if (shouldResetDisplay) {
    display.value = "";
    shouldResetDisplay = false;
  }

  display.value += number;
}

function appendDecimal(displayId) {
  if (shouldResetDisplay) {
    display.value = "";
    shouldResetDisplay = false;
  }

  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function calculate(operator, displayId) {
  if (firstOperand === null) {
    firstOperand = parseFloat(display.value);
  } else {
    secondOperand = parseFloat(display.value);
  }

  if (operator === "=") {
    if (currentOperator === "+") {
      display.value = firstOperand + secondOperand;
    } else if (currentOperator === "-") {
      display.value = firstOperand - secondOperand;
    } else if (currentOperator === "*") {
      display.value = firstOperand * secondOperand;
    } else if (currentOperator === "/") {
      display.value = firstOperand / secondOperand;
    }

    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    shouldResetDisplay = true;
  } else {
    currentOperator = operator;
    shouldResetDisplay = true;
  }
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
  firstOperand = null;
  secondOperand = null;
  currentOperator = null;
  shouldResetDisplay = false;
}