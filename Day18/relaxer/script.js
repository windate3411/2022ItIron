const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const holdTime = totalTime / 5;
const breatheTime = holdTime * 2;

function breatheAnimation() {
  text.innerText = "Breathe in!";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold it!";
    setTimeout(() => {
      text.innerText = "Breathe out!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}
breatheAnimation();
setInterval(breatheAnimation, totalTime);
