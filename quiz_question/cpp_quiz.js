const questions = [
  {
    q: "Who is the creator of C++ programming language?",
    options: [
      "Dennis Ritchie",
      "Bjarne Stroustrup",
      "James Gosling",
      "Guido van Rossum"
    ],
    answer: 1
  },
  {
    q: "Which symbol is used to end a statement in C++?",
    options: [
      ".",
      ":",
      ";",
      ","
    ],
    answer: 2
  },
  {
    q: "Which header file is used for input and output in C++?",
    options: [
      "<stdio.h>",
      "<stdlib.h>",
      "<iostream>",
      "<conio.h>"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to create an object in C++?",
    options: [
      "class",
      "object",
      "new",
      "this"
    ],
    answer: 2
  },
  {
    q: "Which operator is used to access class members?",
    options: [
      ".",
      ":",
      "::",
      "->"
    ],
    answer: 0
  },
  {
    q: "Which concept allows using the same function name with different parameters?",
    options: [
      "Inheritance",
      "Encapsulation",
      "Polymorphism",
      "Abstraction"
    ],
    answer: 2
  },
  {
    q: "Which loop is guaranteed to execute at least once in C++?",
    options: [
      "for",
      "while",
      "do-while",
      "if"
    ],
    answer: 2
  },
  {
    q: "Which keyword is used to define a constant in C++?",
    options: [
      "final",
      "const",
      "define",
      "static"
    ],
    answer: 1
  },
  {
    q: "Which feature of C++ supports reusability?",
    options: [
      "Polymorphism",
      "Inheritance",
      "Encapsulation",
      "Abstraction"
    ],
    answer: 1
  },
  {
    q: "What is the correct file extension for a C++ program?",
    options: [
      ".c",
      ".java",
      ".cpp",
      ".py"
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
