let buttons = document.querySelectorAll("button");
let timeOfWatch = document.querySelector(".time");

let hour = 0;
let minutes = 0;
let seconds = 0;
let miliSecond = 0;
// console.log(seconds+1);

let myInterval = "";
buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerText == "Start") {
      myInterval = setInterval(myTimer, 10);
    } else if (e.target.innerText == "Stop") {
      clearInterval(myInterval);
    } else {
      clearInterval(myInterval);
      timeOfWatch.innerText = "00 : 00 : 00";
    }
  });
  // console.log(item);
});

function myTimer() {
  miliSecond++;
  if (miliSecond == 100) {
    seconds++;
    miliSecond = 0;
  }
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes >= 60) {
    hour++;
    minutes = 0;
  }

  let h = hour < 10 ? "0" + hour : hour;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let milis = miliSecond < 10 ? "0" + miliSecond : miliSecond;

  timeOfWatch.innerText = `${h} : ${m} : ${s}.${milis}`;
}
