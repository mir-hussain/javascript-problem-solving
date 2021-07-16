const today = new Date();

const day = today.toLocaleDateString("default", {
  weekday: "long",
});

const time = today.getHours();
const dayTime = time < 12 ? "AM" : "PM";

let hour;

if (time === 0) {
  hour = 12;
} else {
  hour = time > 12 ? time - 12 : time;
}

const min = today.getMinutes();
const sec = today.getSeconds();

console.log(
  `Today is : ${day}. Current time is : ${hour} ${dayTime} : ${min} : ${sec}`
);
