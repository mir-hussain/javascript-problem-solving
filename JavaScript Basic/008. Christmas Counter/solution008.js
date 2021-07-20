const nextChristmas = () => {
  const today = new Date();
  const year = today.getFullYear();
  const nextXmas = new Date(year, 11, 25);

  const time = nextXmas.getTime() - today.getTime();

  const days = time / (1000 * 60 * 60 * 24);

  return Math.ceil(days);
};

const daysRemain = nextChristmas();

console.log(daysRemain);
