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

function handleBtnClick(e) {}

calculator.addEventListener("click", handleBtnClick);
