// select DOM elements
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("text");
const scroeEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const finalScoreEL = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// list words
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

// init word
let randomWord;

// init score and time
let score = 0;
let time = 10;

// start counting down
const timeInterval = setInterval(updateTime, 1000);

// genrate the first word
addWord();

// get random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to the DOM
function addWord() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

// update score
function updateScore() {
  score++;
  scroeEl.innerHTML = score;
}

// update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

function gameOver() {
  endgameEl.classList.add("show");
  finalScoreEL.textContent = score;
}

// check if typing match
inputEl.addEventListener("input", (e) => {
  const insertText = e.target.value;
  if (insertText === randomWord) {
    time += 5;
    addWord();
    updateScore();
    updateTime();
    e.target.value = "";
  }
});

// reload the page
restartBtn.addEventListener("click", () => window.location.reload());
