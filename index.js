function add(value) {
  document.getElementById("output").textContent += value;
  if (output.textContent.length > 10) {
    output.textContent = "error, kepanjangan";
  }
  output.textContent = result;
}
function add(value) {
  document.getElementById("output").textContent += value;
  if (output.textContent.length > 10) {
    output.textContent = "error, kepanjangan";
  }
  output.textContent = result;
}
function clearOutput() {
  document.getElementById("output").textContent = "";
}
function calculate() {
  var output = document.getElementById("output");
  var calcu = eval(output.textContent);
  // if (result.toString().length > 10) {
  //   result = "error, kepanjangan";
  // } else {
  //   result = parseFloat(result.toFixed(2));
  // }
  var result = parseFloat(calcu.toFixed(2));
  output.textContent = result;
}
function persen() {
  var output = document.getElementById("output");
  var currentValue = parseFloat(output.textContent);
  var result = currentValue / 100;
  output.textContent = result;
}
