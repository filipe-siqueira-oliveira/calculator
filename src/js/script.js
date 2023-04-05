function setNumber(number) {
  document.getElementById("display").value += number;
}

function setOperator(op) {
  document.getElementById("display").value += op;
}

function setAllClear() {
  document.getElementById("display").value = "";
}

function calculate() {
  let display = document.getElementById("display").value;
  let result = eval(display.toString());

  document.getElementById("display").value = result;
}
