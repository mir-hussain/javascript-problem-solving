const reverseOne = (str) => {
  const splitted = str.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");

  return joined;
};

const reversedStr1 = reverseOne("javascript");
console.log(reversedStr1);

//* If you want, you can chain the methods. This is the cleaner version.

const reverseTwo = (str) =>
  str.split("").reverse().join("");

const reversedStr2 = reverseTwo("javascript");
console.log(reversedStr2);
