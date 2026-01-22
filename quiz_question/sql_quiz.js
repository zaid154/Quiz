const questions = [
  {
    q: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Standard Query Language",
      "Sequential Query Language"
    ],
    answer: 0
  },
  {
    q: "Which SQL command is used to retrieve data from a table?",
    options: [
      "GET",
      "FETCH",
      "SELECT",
      "READ"
    ],
    answer: 2
  },
  {
    q: "Which SQL clause is used to filter records?",
    options: [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "HAVING"
    ],
    answer: 2
  },
  {
    q: "Which SQL statement is used to insert new data into a table?",
    options: [
      "ADD",
      "INSERT INTO",
      "UPDATE",
      "CREATE"
    ],
    answer: 1
  },
  {
    q: "Which SQL statement is used to modify existing records?",
    options: [
      "MODIFY",
      "CHANGE",
      "UPDATE",
      "ALTER"
    ],
    answer: 2
  },
  {
    q: "Which SQL keyword is used to sort the result set?",
    options: [
      "SORT",
      "ORDER BY",
      "GROUP BY",
      "ARRANGE"
    ],
    answer: 1
  },
  {
    q: "Which SQL function is used to count rows?",
    options: [
      "SUM()",
      "TOTAL()",
      "COUNT()",
      "NUMBER()"
    ],
    answer: 2
  },
  {
    q: "Which SQL command is used to delete records from a table?",
    options: [
      "REMOVE",
      "DROP",
      "DELETE",
      "CLEAR"
    ],
    answer: 2
  },
  {
    q: "Which SQL statement is used to create a table?",
    options: [
      "NEW TABLE",
      "MAKE TABLE",
      "CREATE TABLE",
      "ADD TABLE"
    ],
    answer: 2
  },
  {
    q: "Which constraint ensures that a column has unique values?",
    options: [
      "PRIMARY KEY",
      "FOREIGN KEY",
      "UNIQUE",
      "NOT NULL"
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
