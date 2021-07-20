const sundayFinder = (start, end) => {
  for (let year = start; year <= end; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      console.log(`The 1st January of the year ${year} is being sunday`);
    }
  }
};

sundayFinder(2020, 2120);
