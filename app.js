class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    console.log("delete");
  }

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {
    console.log("choose operation");
  }

  calculate() {
    console.log("calculate");
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }
}

const display = document.querySelector("[data-display]");
const clearButton = document.querySelector("[data-clear]");
const equalButton = document.querySelector("[data-equals]");
const numberButton = document.querySelectorAll("[data-number]");
const operationButton = document.querySelectorAll("[data-operation]");

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
