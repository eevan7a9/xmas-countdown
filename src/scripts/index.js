import "../style/main.scss";

const dayFirstDig = document.querySelector("#dayFirstDig");
const daySecondDig = document.querySelector("#daySecondDig");
const hourFirstDig = document.querySelector("#hourFirstDig");
const hourSecondDig = document.querySelector("#hourSecondDig");
const minuteFirstDig = document.querySelector("#minuteFirstDig");
const minuteSecondDig = document.querySelector("#minuteSecondDig");
const secondFirstDig = document.querySelector("#secondFirstDig");
const secondSecondDig = document.querySelector("#secondSecondDig");
const dateTarget = new Date("2021/04/03").getTime();

const splitNumber = function (params) {
  const num = params.toString().split("");
  return num.length > 1 ? num : ["0", num[0]];
};
// Update the count down every 1 second
const set = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();
  // Find the distance between now and the count down date
  const distance = dateTarget - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  dayFirstDig.innerHTML = splitNumber(days)[0];
  daySecondDig.innerHTML = splitNumber(days)[1];

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hourFirstDig.innerHTML = splitNumber(hours)[0];
  hourSecondDig.innerHTML = splitNumber(hours)[1];

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  minuteFirstDig.innerHTML = splitNumber(minutes)[0];
  minuteSecondDig.innerHTML = splitNumber(minutes)[1];

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  secondFirstDig.innerHTML = splitNumber(seconds)[0];
  secondSecondDig.innerHTML = splitNumber(seconds)[1];

  // If the count down is finished, clear
  if (distance < 0) {
    clearInterval(set);
  }
}, 1000);
