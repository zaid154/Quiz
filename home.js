let home_name = document.getElementById("home_name");
let home_email = document.getElementById("home_email");



let html_btn = document.getElementById("q_html");
let css_btn  = document.getElementById("q_css");
let js_btn   = document.getElementById("q_js");
let c_btn    = document.getElementById("q_c");
let cpp_btn  = document.getElementById("q_cpp");
let php_btn  = document.getElementById("q_php");
let py_btn   = document.getElementById("q_py");
let java_btn = document.getElementById("q_java");
let sql_btn  = document.getElementById("q_sql");



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

goToQuiz(html_btn, "html_quiz.html");
goToQuiz(css_btn,  "css_quiz.html");
goToQuiz(js_btn,   "js_quiz.html");
goToQuiz(c_btn,    "c_quiz.html");
goToQuiz(cpp_btn,  "cpp_quiz.html");
goToQuiz(php_btn,  "php_quiz.html");
goToQuiz(py_btn,   "python_quiz.html");
goToQuiz(java_btn, "java_quiz.html");
goToQuiz(sql_btn,  "sql_quiz.html");


