let home_name = document.getElementById("home_name");
let home_email = document.getElementById("home_email");



let html_btn = document.getElementById("btn_html");
let css_btn  = document.getElementById("btn_css");
let js_btn   = document.getElementById("btn_js");
let c_btn    = document.getElementById("btn_c");
let cpp_btn  = document.getElementById("btn_cpp");
let php_btn  = document.getElementById("btn_php");
let py_btn   = document.getElementById("btn_python");
let java_btn = document.getElementById("btn_java");
let sql_btn  = document.getElementById("btn_sql");



let loginUser = localStorage.getItem("loginUser");

if (loginUser) {
  let user = JSON.parse(loginUser);
  home_name.innerText = user.name;
  home_email.innerText = user.email;
} else {
  window.location.href = "index.html";
}




function goToQuiz(button, page) {
  button.addEventListener("click", () => {
    window.location.href = page;
  });
}
goToQuiz(html_btn, "./quiz_question/html_quiz.html");
goToQuiz(css_btn,  "./quiz_question/css_quiz.html");
goToQuiz(js_btn,   "./quiz_question/js_quiz.html");
goToQuiz(c_btn,    "./quiz_question/c_quiz.html");
goToQuiz(cpp_btn,  "./quiz_question/cpp_quiz.html");
goToQuiz(php_btn,  "./quiz_question/php_quiz.html");
goToQuiz(py_btn,   "./quiz_question/py_quiz.html");
goToQuiz(java_btn, "./quiz_question/java_quiz.html");
goToQuiz(sql_btn,  "./quiz_question/sql_quiz.html");


let searchInput = document.getElementById("searchQuiz");
let topics = document.querySelectorAll(".topic");

searchInput.addEventListener("keyup", () => {
  let value = searchInput.value.toLowerCase();

  topics.forEach(topic => {
    let topicId = topic.id.toLowerCase(); // q_html, q_css etc

    if (topicId.includes(value)) {
      topic.style.display = "flex";
    } else {
      topic.style.display = "none";
    }
  });
});
let logoutBtn = document.querySelector(".logout-btn");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loginUser");
  window.location.href = "index.html";
});
