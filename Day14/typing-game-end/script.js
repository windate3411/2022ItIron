// select DOM elements
const wordEl = document.getElementById("word");
const inputEl = document.getElementById("text");
const scroeEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const finalScoreEL = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");
const settingBtn = document.getElementById("setting-btn");
const setting = document.getElementById("setting");
const difficultySelect = document.getElementById("difficulty");

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

// init difficulty
let difficulty =
  localStorage.getItem("difficulty") === null
    ? "medium"
    : localStorage.getItem("difficulty");

// set diffculty value
difficultySelect.value = difficulty;

// focus text on start
inputEl.focus();

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
    addWord();
    updateScore();
    switch (difficulty) {
      case "easy":
        time += 5;
        break;
      case "medium":
        time += 3;
        break;
      case "hard":
        time += 1;
        break;
    }
    updateTime();
    e.target.value = "";
  }
});

// Setting btn click
settingBtn.addEventListener("click", () => {
  setting.classList.toggle("hide");
});

// difficulty setting
difficultySelect.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});

// reload the page
restartBtn.addEventListener("click", () => window.location.reload());
