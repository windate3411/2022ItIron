const shakeBtn = document.getElementById("shake");
const ballImage = document.querySelector(".ball-image");
const result = document.querySelector(".result");

const possibleAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

function getRandomAnswer() {
  return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
}

function handleBtnClick() {
  ballImage.classList.add("shake");
  shakeBtn.disabled = true;
  setTimeout(() => {
    ballImage.classList.remove("shake");
    result.textContent = getRandomAnswer();
    shakeBtn.disabled = false;
  }, 1000);
}

shakeBtn.addEventListener("click", handleBtnClick);
