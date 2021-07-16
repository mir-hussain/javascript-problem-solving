const today = new Date();

const day = today.toLocaleDateString("default", {
  weekday: "long",
});

const time = today.getHours();
const dayTime = time > 12 ? "PM" : "AM";
const hour = time > 12 ? time - 12 : time;
const min = today.getMinutes();
const sec = today.getSeconds();

console.log(
  `Today is : ${day}. Current time is : ${hour} ${dayTime} : ${min} : ${sec}`
);
