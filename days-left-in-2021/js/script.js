// Elements
const newYearDateDom = document.querySelector(".new-year-date");
const daysLeftHeader = document.querySelector(".days-left");
const daysCounter = document.querySelector(".count-days");
const hoursCounter = document.querySelector(".count-hours");
const minutesCounter = document.querySelector(".count-minutes");
const secondsCounter = document.querySelector(".count-seconds");

// countdown function
function countdown() {
  const newYearDate = new Date("1 Jan 2021");
  const currentDate = new Date();

  const diffNewCurr = newYearDate - currentDate;

  // days, hours, minutes, seconds
  const daysLeft = Math.floor(diffNewCurr / 1000 / (60 * 60 * 24));
  const hoursLeft = Math.floor((diffNewCurr / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((diffNewCurr / 1000 / 60) % 60);
  const secondsLeft = Math.floor((diffNewCurr / 1000) % 60);

  // update dom for header
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = newYearDate.getDate();
  const day = newYearDate.getDay();
  const month = newYearDate.getMonth();
  const year = newYearDate.getFullYear();
  daysLeftHeader.textContent = daysLeft;

  const dateToHeader = `${daysOfWeek[day]} ${monthsOfYear[month]} ${daySuffix(
    date
  )} ${year}`;
  newYearDateDom.textContent = dateToHeader;
  console.log(dateToHeader);

  // update dom for counter
  daysCounter.textContent = daysLeft;
  hoursCounter.textContent = hoursLeft;
  minutesCounter.textContent = minutesLeft;
  secondsCounter.textContent = secondsLeft;
  // console.log(ordinalSuffix(1111), daysOfWeek[day], monthsOfYear[month], year);
}

// day suffix
function daySuffix(day) {
  // last digit of a number
  const last = day % 10;
  // last two digit
  const lastTwo = day % 100;

  if (last === 1 && lastTwo !== 11) {
    return `${day}st`;
  } else if (last === 2 && lastTwo !== 12) {
    return `${day}nd`;
  } else if (last === 3 && lastTwo !== 13) {
    return `${day}rd`;
  } else {
    return `${day}th`;
  }
}

countdown();
setInterval(countdown, 1000);
