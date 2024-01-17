//Get time hands
let hourHand = document.querySelector("#hour");
let minHand = document.querySelector("#minute");
let secHand = document.querySelector("#second");

setInterval(() => {
  const now = new Date();

  seconds = now.getSeconds();
  minutes = now.getMinutes();
  hour = now.getHours();
  /* change minutes to degrees, 1 second is 6 degrees*/
  secDegree = seconds * 6;

  /* change minutes to degrees, 1 minute is 6 degrees*/
  minDegree = minutes * 6;

  /* change hour to degrees, 1 hour is 30 degrees*/
  hourDegree = hour * 30;

  secHand.style.transform = `rotate(${secDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}, 1000);
