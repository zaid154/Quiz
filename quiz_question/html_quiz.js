// ===== QUESTIONS =====
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
  }
];

// ===== VARIABLES =====
let index = 0;
let score = 0;
let time = 30;
let timer;

const box = document.getElementById("question-box");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

// ===== SHOW QUESTION =====
function showQuestion() {
  clearInterval(timer);
  time = 30;
  timerEl.textContent = "Time: " + time;

  box.innerHTML = "";

  // question
  const h3 = document.createElement("h3");
  h3.textContent = (index + 1) + ". " + questions[index].q;
  box.appendChild(h3);

  // options
  questions[index].options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = i;

    label.appendChild(input);
    label.append(" " + opt); // safe for <a>, <img>
    box.appendChild(label);
  });

  startTimer();
}

// ===== TIMER =====
function startTimer() {
  timer = setInterval(() => {
    time--;
    timerEl.textContent = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
      nextQuestion(); // auto next
    }
  }, 1000);
}

// ===== NEXT =====
function nextQuestion() {
  clearInterval(timer);

  const selected = document.querySelector("input[name='option']:checked");

  if (selected && Number(selected.value) === questions[index].answer) {
    score++;
  }

  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// ===== RESULT =====
function showResult() {
  clearInterval(timer);
  box.innerHTML = `
    <h2>Quiz Finished 🎉</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
  `;
  document.querySelector(".buttons").style.display = "none";
}

// ===== BUTTON EVENTS =====
nextBtn.onclick = nextQuestion;
submitBtn.onclick = showResult;

// ===== START =====
showQuestion();
