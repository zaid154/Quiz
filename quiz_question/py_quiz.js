const questions = [
  {
    q: "Who created the Python programming language?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Guido van Rossum",
      "Bjarne Stroustrup"
    ],
    answer: 2
  },
  {
    q: "Python is a ______ language.",
    options: [
      "Compiled",
      "Interpreted",
      "Assembly",
      "Machine"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used for comments in Python?",
    options: [
      "//",
      "/* */",
      "#",
      "--"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to define a function in Python?",
    options: [
      "function",
      "def",
      "fun",
      "define"
    ],
    answer: 1
  },
  {
    q: "Which data type is used to store text in Python?",
    options: [
      "int",
      "float",
      "char",
      "str"
    ],
    answer: 3
  },
  {
    q: "Which function is used to display output in Python?",
    options: [
      "echo()",
      "printf()",
      "print()",
      "output()"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to create a loop in Python?",
    options: [
      "repeat",
      "loop",
      "for",
      "iterate"
    ],
    answer: 2
  },
  {
    q: "Which of the following is a correct Python file extension?",
    options: [
      ".java",
      ".py",
      ".cpp",
      ".js"
    ],
    answer: 1
  },
  {
    q: "Which keyword is used to check a condition in Python?",
    options: [
      "check",
      "if",
      "when",
      "condition"
    ],
    answer: 1
  },
  {
    q: "Which data type is used to store multiple values in a single variable?",
    options: [
      "int",
      "string",
      "list",
      "float"
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
    <h2>Quiz Finished 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// start
load();
