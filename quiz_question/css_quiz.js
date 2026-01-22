const questions = [
  {
    q: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    answer: 2
  },
  {
    q: "Which CSS property is used to change text color?",
    options: [
      "background-color",
      "font-color",
      "color",
      "text-color"
    ],
    answer: 2
  },
  {
    q: "Which CSS property controls the text size?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "size"
    ],
    answer: 2
  },
  {
    q: "Which symbol is used to select a class in CSS?",
    options: [
      "#",
      ".",
      "*",
      "@"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used to select an id in CSS?",
    options: [
      ".",
      "*",
      "#",
      "@"
    ],
    answer: 2
  },
  {
    q: "Which CSS property is used to change the background color?",
    options: [
      "color",
      "bgcolor",
      "background-color",
      "background"
    ],
    answer: 2
  },
  {
    q: "Which property is used to make text bold in CSS?",
    options: [
      "font-style",
      "text-weight",
      "font-weight",
      "bold"
    ],
    answer: 2
  },
  {
    q: "Which CSS property is used to center text?",
    options: [
      "align",
      "text-align",
      "center",
      "float"
    ],
    answer: 1
  },
  {
    q: "Which property adds space inside an element?",
    options: [
      "margin",
      "border",
      "padding",
      "spacing"
    ],
    answer: 2
  },
  {
    q: "Which CSS property is used to hide an element?",
    options: [
      "visibility: hidden",
      "display: none",
      "opacity: 0",
      "All of the above"
    ],
    answer: 3
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
    <h2>Quiz Finished</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// start
load();
