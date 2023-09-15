let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let counter = setInterval(() => {
  let countDate = new Date("2025-12-31 11:59:59").getTime();
  let dateNow = new Date().getTime();
  let dateDiff = countDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  console.log(seconds);
  day.innerHTML = days < 10 ? `0${days}` : days;
  hour.innerHTML = hours < 10 ? `0${hours}` : hours;
  minute.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  second.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);
