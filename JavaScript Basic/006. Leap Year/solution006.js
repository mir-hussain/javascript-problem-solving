const isLeapYear = (year) => {
  const result =
    year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

  return result ? "Leap Year" : "Not a leap year";
};

const result = isLeapYear(2005);

console.log(result);
