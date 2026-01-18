let registerbtn = document.getElementById("register");
let loginLink = document.getElementById("login_link");
let login = document.querySelector(".login");
let register = document.querySelector(".register");

let create_fullname=document.querySelector("")
let create_dob=document.querySelector("")
let create_email=document.querySelector("")
let create_password=document.querySelector("")

let enter_email=document.querySelector("enter_name")
let enter_password=document.querySelector("enter_password")







registerbtn.addEventListener("click", () => {
  register.classList.add("active");
  register.classList.remove("hidden");
  login.classList.add("hidden");
  login.classList.remove("active");
});

loginLink.addEventListener("click", () => {
  login.classList.add("active");
  login.classList.remove("hidden");
  register.classList.add("hidden");
  register.classList.remove("active");
});
