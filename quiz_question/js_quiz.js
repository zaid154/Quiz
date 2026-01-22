const questions = [
  {
    q: "JavaScript is a ______ language.",
    options: [
      "Compiled",
      "Interpreted",
      "Markup",
      "Assembly"
    ],
    answer: 1
  },
  {
    q: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      "int",
      "var",
      "string",
      "define"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      "<!-- -->",
      "/* */",
      "//",
      "#"
    ],
    answer: 2
  },
  {
    q: "Which function is used to print output in JavaScript?",
    options: [
      "print()",
      "echo()",
      "console.log()",
      "document.write()"
    ],
    answer: 2
  },
  {
    q: "Which data type is NOT supported in JavaScript?",
    options: [
      "Number",
      "Boolean",
      "String",
      "Character"
    ],
    answer: 3
  },
  {
    q: "Which operator is used for strict equality in JavaScript?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to define a constant in JavaScript?",
    options: [
      "var",
      "let",
      "const",
      "static"
    ],
    answer: 2
  },
  {
    q: "Which method is used to select an element by id?",
    options: [
      "getElement()",
      "querySelectorAll()",
      "getElementById()",
      "getId()"
    ],
    answer: 2
  },
  {
    q: "Which loop executes at least once even if the condition is false?",
    options: [
      "for",
      "while",
      "do-while",
      "if"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to create a function in JavaScript?",
    options: [
      "method",
      "def",
      "function",
      "func"
    ],
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
    <h2>Quiz Finished</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// start
load();
