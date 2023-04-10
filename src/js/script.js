document.getElementById("toggle").addEventListener("click", () => {
  document.getElementById("theme").classList.toggle("dark");
  document.getElementById("theme").classList.toggle("light");
  document.getElementById("display").classList.toggle("displayDark");
  document.getElementById("display").classList.toggle("displayLight");
  document.getElementById("switcher").classList.toggle("sliderLight");
  document.getElementById("switcher").classList.toggle("sliderDark");
});

console.log(document.getElementById("theme").classList.value);

let result = "";
let display = "";

function setNumber(number) {
  if (result == document.getElementById("display").value) {
    document.getElementById("display").value = "";
    result = "";
  }
  document.getElementById("display").value += number;
}

function setOperator(op) {
  display = document.getElementById("display").value;
  if (display == "") {
    document.getElementById("display").value = "";
  } else {
    document.getElementById("display").value += op;
  }
}

function setAllClear() {
  document.getElementById("display").value = "";
}

function calculate() {
  display = document.getElementById("display").value;
  result = eval(display.toString());

  document.getElementById("display").value = result;
}

function setPercentage() {
  display = document.getElementById("display").value;
  result = eval(display.toString()) / 100;

  if (display == "") {
    document.getElementById("display").value = "";
  } else {
    document.getElementById("display").value = result
  }
  ;
}

function setPoint(number) {
  display = document.getElementById("display").value;
  if (result == document.getElementById("display").value) {
    if (display.length == "") {
      document.getElementById("display").value = "";
      result = "";
      document.getElementById("display").value += 0 + number;
    } else {
      document.getElementById("display").value = "";
      result = "";
      document.getElementById("display").value += 0 + number;
    }
  } else {
    document.getElementById("display").value += number;
  }
}
