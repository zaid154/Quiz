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

// ===== VARIABLES =====
let qno = 0;
let score = 0;
let time = 30;
let timer;

const box = document.getElementById("question-box");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const timerText = document.getElementById("timer");

// load question
function load() {
  clearInterval(timer);
  time = 30;
  timerText.innerText = "Time: " + time;
  box.innerHTML = "";

  // question
  box.innerHTML += `<h3>${qno + 1}. ${questions[qno].q}</h3>`;

  // options
  questions[qno].options.forEach((op, i) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "opt";
    radio.value = i;

    label.appendChild(radio);
    label.append(" " + op);

    box.appendChild(label);
  });

  startTimer();
}

// timer
function startTimer() {
  timer = setInterval(() => {
    time--;
    timerText.innerText = "Time: " + time;

    if (time === 0) {
      next.click(); // auto go next
    }
  }, 1000);
}

// ans check
function check() {
  const selected = document.querySelector("input[name='opt']:checked");
  if (selected && Number(selected.value) === questions[qno].answer) {
    score++;
  }
}

// next question
next.onclick = function () {
  clearInterval(timer);
  check();
  qno++;

  if (qno < questions.length) {
    load();
  } else {
    result();
  }
};

// sub btn
submit.onclick = function () {
  clearInterval(timer);
  check();
  result();
};

// result
function result() {
  box.innerHTML = `
    <h2>Quiz Finished 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// start
load();
