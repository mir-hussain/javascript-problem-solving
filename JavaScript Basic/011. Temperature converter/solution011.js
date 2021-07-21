const tempConverter = (temp) => {
  const scale = temp.charAt(temp.length - 1).toLowerCase();
  const number = temp.slice(0, -1);

  if (scale === "c") {
    const result = (number / 5) * 9 + 32;
    return `  ${result.toFixed(2)} F`;
  } else {
    const result = ((number - 32) / 9) * 5;
    return `${result.toFixed(2)};`;
  }
};

const temperature = tempConverter("45F");

console.log(temperature);
