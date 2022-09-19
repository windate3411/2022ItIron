const displayBar = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

const operatorMapping = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "/": (a, b) => a / b,
};

let operatorClicked = false;
let previousResult = "";
let operator;

function handleBtnClick(e) {
  // 處理所有數字
  if (e.target.classList.contains("number")) {
    if (operatorClicked) {
      displayBar.value = "";
      operatorClicked = false;
    }
    if (displayBar.value === "0") {
      displayBar.value = e.target.textContent;
      return;
    }
    displayBar.value += e.target.textContent;
    currentResult = displayBar.value;
  }

  // 處理清除按鈕
  if (e.target.classList.contains("clear")) {
    displayBar.value = 0;
  }

  // 處理運算符
  if (e.target.classList.contains("operator")) {
    operator = operatorMapping[e.target.textContent];
    previousResult = displayBar.value;
    operatorClicked = true;
  }

  // 處理等號
  if (e.target.classList.contains("equal")) {
    displayBar.value = operator(
      Number(previousResult),
      Number(displayBar.value)
    );
    previousResult = "";
    operatorClicked = false;
  }
}

calculator.addEventListener("click", handleBtnClick);
