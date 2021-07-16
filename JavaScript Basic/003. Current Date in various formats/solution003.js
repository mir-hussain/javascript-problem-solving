const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

//* dd/mm/yyyy ~ dd-mm-yyyy

console.log(`${day}\/${month}\/${year}`);
console.log(`${day}-${month}-${year}`);

//* mm/dd/yyyy ~ mm-dd-yyyy

console.log(`${month}\/${day}\/${year}`);
console.log(`${month}-${day}-${year}`);
