function add(value) {
  document.getElementById("output").textContent += value;
}
function operator(value) {
  document.getElementById("output").textContent += value;
}
function clearOutput() {
  document.getElementById("output").textContent = "";
}
function calculate() {
  var output = document.getElementById("output");
  var result = eval(output.textContent);
  output.textContent = result;
}
function persen() {
  var output = document.getElementById("output");
  var currentValue = parseFloat(output.textContent);
  var result = currentValue / 100;
  output.textContent = result;
}
