// Elements
const newYearDate = document.querySelector(".new-year-date");
const daysLeft = document.querySelector(".days-left");
const daysCounter = document.querySelector(".days");
const hoursCounter = document.querySelector(".hours");
const minutesCounter = document.querySelector(".minutes");
const secondsCounter = document.querySelector(".seconds");

// countdown function
function countdown() {
  const newYearDate = new Date("1 Jan 2021");
  const currentDate = new Date();
  console.log(newYearDate, currentDate);
}

countdown();
setTimeout(countdown, 100);
