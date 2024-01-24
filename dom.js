const value = document.getElementById("output");

// clear button
document.getElementById("clear").addEventListener("click", "");

function clear() {
  document.getElementById("output").textContent = "";
}

document.getElementById("add").addEventListener("click", value);

function add(value) {
  document.getElementById("output").textContent += value;
}
