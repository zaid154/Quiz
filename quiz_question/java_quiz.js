const questions = [
  {
    q: "Who developed the Java programming language?",
    options: [
      "Dennis Ritchie",
      "James Gosling",
      "Bjarne Stroustrup",
      "Guido van Rossum"
    ],
    answer: 1
  },
  {
    q: "Java is a ______ language.",
    options: [
      "Procedure-oriented",
      "Object-oriented",
      "Assembly",
      "Machine"
    ],
    answer: 1
  },
  {
    q: "Which keyword is used to define a class in Java?",
    options: [
      "struct",
      "define",
      "class",
      "object"
    ],
    answer: 2
  },
  {
    q: "Which method is the entry point of a Java program?",
    options: [
      "start()",
      "main()",
      "run()",
      "init()"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used to end a statement in Java?",
    options: [
      ".",
      ":",
      ";",
      ","
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to inherit a class in Java?",
    options: [
      "inherits",
      "extends",
      "implements",
      "super"
    ],
    answer: 1
  },
  {
    q: "Which data type is used to store whole numbers in Java?",
    options: [
      "float",
      "double",
      "int",
      "char"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to create an object in Java?",
    options: [
      "object",
      "class",
      "new",
      "this"
    ],
    answer: 2
  },
  {
    q: "Which package is imported by default in Java?",
    options: [
      "java.util",
      "java.io",
      "java.lang",
      "java.sql"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to handle exceptions in Java?",
    options: [
      "error",
      "catch",
      "throw",
      "exception"
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
