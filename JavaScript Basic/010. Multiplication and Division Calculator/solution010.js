const handleMultiply = () => {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = firstNumber * secondNumber;
  document.getElementById("result").innerText = "Result: " + result;
};

const handleDivide = () => {
  const firstNumber = parseInt(document.getElementById("first-number").value);
  const secondNumber = parseInt(document.getElementById("second-number").value);
  const result = (firstNumber / secondNumber).toFixed(2);
  document.getElementById("result").innerText = "Result: " + result;
};

const handleClear = () => {
  document.getElementById("first-number").value = "";
  document.getElementById("second-number").value = "";
  window.location.reload();
};
