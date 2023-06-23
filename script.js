let secondsHand = document.querySelector(`.second-hand`),
 minutesHand = document.querySelector(`.min-hand`),
 hoursHand = document.querySelector(`.hour-hand`);

function update() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours(),
    secondToDegree = (seconds / 60) * 360 + 90,
    minuteToDegree = (minutes / 60) * 360 + 90,
    hourToDegree = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondToDegree}deg)`;
  minutesHand.style.transform = `rotate(${minuteToDegree}deg)`;
  hoursHand.style.transform = `rotate(${hourToDegree}deg)`;
}

setInterval(update, 1000);
