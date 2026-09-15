const left = document.querySelector(".left");
const right = document.querySelector(".right");
const glow = document.querySelector(".glow");

// 3.5 sec → eyes open
setTimeout(() => {
  left.classList.add("open");
  right.classList.add("open");
  glow.classList.add("light");
}, 3500);

// Finish at 7 sec
setTimeout(() => {
  console.log("7 second animation completed");
}, 7000);
