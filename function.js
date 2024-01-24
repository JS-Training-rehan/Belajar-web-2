let firstNumber = "";
let operasi = "";
let secondNumber = "";
const result = document.getElementById("output");

function add(value) {
  if (value === "clear") {
    result.value = "";
    firstNumber = "";
    operasi = "";
    secondNumber = "";
  } else {
    result.value += value;

    if (!operator) {
      firstNumber += value;
    } else {
      secondNumber += value;
    }
  }
}

function operator(value) {
  operasi = value;
  firstNumber = result.value;
  result.value = "";
}
