// ================= QUESTIONS =================
const questions = [
  {
    q: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    q: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    q: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<src>", "<picture>"],
    answer: 1
  },
  {
    q: "Which tag is used for the largest heading in HTML?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    answer: 2
  },
  {
    q: "Which attribute provides alternative text for an image?",
    options: ["title", "src", "alt", "href"],
    answer: 2
  },
  {
    q: "Which tag is used to create an ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: 1
  },
  {
    q: "Which HTML tag is used to insert a line break?",
    options: ["<break>", "<lb>", "<br>", "<hr>"],
    answer: 2
  },
  {
    q: "Which tag is used to create a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    answer: 2
  },
  {
    q: "Which tag is used to make text bold?",
    options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
    answer: 3
  },
  {
    q: "Which tag contains all visible content of a webpage?",
    options: ["<html>", "<head>", "<body>", "<title>"],
    answer: 2
  }
];

// ================= VARIABLES =================
let index = 0;     // current question number
let score = 0;     // total correct answers
let time = 30;     // timer seconds
let timer;         // timer reference

// get HTML elements
const box = document.getElementById("question-box");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

// ================= SHOW QUESTION =================
function showQuestion() {
  clearInterval(timer);        // stop old timer
  time = 30;                   // reset time
  timerEl.textContent = "Time: " + time;

  box.innerHTML = "";          // clear old question

  // show question text
  const h3 = document.createElement("h3");
  h3.textContent = (index + 1) + ". " + questions[index].q;
  box.appendChild(h3);

  // show options
  questions[index].options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = i;

    label.appendChild(input);
    label.append(" " + opt);   // text only (safe for <a>, <img>)
    box.appendChild(label);
  });

  startTimer();                // start timer
}

// ================= TIMER =================
function startTimer() {
  timer = setInterval(() => {
    time--;
    timerEl.textContent = "Time: " + time;

    // if time over, move to next question
    if (time === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// ================= CHECK ANSWER =================
function checkCurrentAnswer() {
  const selected = document.querySelector("input[name='option']:checked");

  // if answer is correct, increase score
  if (selected && Number(selected.value) === questions[index].answer) {
    score++;
  }
}

// ================= NEXT QUESTION =================
function nextQuestion() {
  clearInterval(timer);

  checkCurrentAnswer();   // check current answer
  index++;                // go to next question

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ================= SUBMIT QUIZ =================
submitBtn.onclick = function () {
  clearInterval(timer);
  checkCurrentAnswer();   // check last answer
  showResult();
};

// ================= SHOW RESULT =================
function showResult() {
  box.innerHTML = `
    <h2>Quiz Finished</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// ================= BUTTON =================
nextBtn.onclick = nextQuestion;

// ================= START QUIZ =================
showQuestion();
