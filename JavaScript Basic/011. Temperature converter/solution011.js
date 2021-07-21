const tempConverter = (temp) => {
  const scale = temp.charAt(temp.length - 1).toLowerCase();
  const number = temp.slice(0, -1);

  if (scale === "c") {
    const result = (number / 5) * 9 + 32;
    return `${number}° C is ${result.toFixed(2)}° F`;
  } else {
    const result = ((number - 32) / 9) * 5;
    return `${number}° F is ${result.toFixed(2)}° C;`;
  }
};

const temperature = tempConverter("60C");

console.log(temperature);
