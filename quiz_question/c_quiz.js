const questions = [
  {
    q: "Who is the father of C programming language?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Bjarne Stroustrup",
      "Guido van Rossum"
    ],
    answer: 0
  },
  {
    q: "Which symbol is used to end a statement in C?",
    options: [
      ".",
      ":",
      ";",
      ","
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to declare a variable in C?",
    options: [
      "var",
      "int",
      "define",
      "declare"
    ],
    answer: 1
  },
  {
    q: "Which function is used to print output in C?",
    options: [
      "print()",
      "cout",
      "printf()",
      "output()"
    ],
    answer: 2
  },
  {
    q: "Which header file is required for printf()?",
    options: [
      "<conio.h>",
      "<stdlib.h>",
      "<stdio.h>",
      "<string.h>"
    ],
    answer: 2
  },
  {
    q: "Which operator is used for logical AND in C?",
    options: [
      "&",
      "&&",
      "|",
      "||"
    ],
    answer: 1
  },
  {
    q: "Which data type is used to store decimal values in C?",
    options: [
      "int",
      "char",
      "float",
      "void"
    ],
    answer: 2
  },
  {
    q: "Which loop is guaranteed to execute at least once?",
    options: [
      "for",
      "while",
      "do-while",
      "if"
    ],
    answer: 2
  },
  {
    q: "Which symbol is used to access value at an address?",
    options: [
      "&",
      "*",
      "#",
      "%"
    ],
    answer: 1
  },
  {
    q: "What is the correct extension of a C program?",
    options: [
      ".cpp",
      ".java",
      ".py",
      ".c"
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
    <h2>Quiz Finished 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// start
load();
