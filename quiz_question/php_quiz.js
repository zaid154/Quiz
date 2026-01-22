const questions = [
  {
    q: "What does PHP stand for?",
    options: [
      "Personal Home Page",
      "Private Home Page",
      "PHP: Hypertext Preprocessor",
      "Pre Hypertext Processor"
    ],
    answer: 2
  },
  {
    q: "PHP is a ______ language.",
    options: [
      "Client-side scripting",
      "Server-side scripting",
      "Markup",
      "Styling"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used to declare a variable in PHP?",
    options: [
      "#",
      "@",
      "$",
      "%"
    ],
    answer: 2
  },
  {
    q: "Which function is used to output text in PHP?",
    options: [
      "print()",
      "echo",
      "console.log()",
      "write()"
    ],
    answer: 1
  },
  {
    q: "Which file extension is used for PHP files?",
    options: [
      ".html",
      ".js",
      ".php",
      ".css"
    ],
    answer: 2
  },
  {
    q: "Which superglobal variable is used to collect form data?",
    options: [
      "$_FORM",
      "$_POST",
      "$_GETDATA",
      "$_DATA"
    ],
    answer: 1
  },
  {
    q: "Which statement is used to stop script execution in PHP?",
    options: [
      "stop",
      "exit",
      "break",
      "return"
    ],
    answer: 1
  },
  {
    q: "Which operator is used to concatenate strings in PHP?",
    options: [
      "+",
      "&",
      ".",
      ","
    ],
    answer: 2
  },
  {
    q: "Which function is used to find the length of a string in PHP?",
    options: [
      "count()",
      "length()",
      "strlen()",
      "size()"
    ],
    answer: 2
  },
  {
    q: "Which tag is used to start PHP code?",
    options: [
      "<php>",
      "<?php>",
      "<?",
      "<script>"
    ],
    answer: 1
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
