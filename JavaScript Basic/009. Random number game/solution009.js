let randomNumber = Math.ceil(Math.random() * 10);
const result = document.getElementById("result");

const handleSubmit = () => {
  const userInput = parseInt(document.getElementById("number").value);
  if (randomNumber === userInput) {
    result.innerText = "Matched";
  } else {
    result.innerText = `Did not match, the number was ${randomNumber}`;
  }
};

const handleClear = () => {
  document.getElementById("number").value = "";
  window.location.reload();
};

document.getElementById("number").value = "";
