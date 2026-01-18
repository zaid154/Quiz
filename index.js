
/* ===== GET ELEMENTS ===== */
let registerbtn = document.getElementById("register");
let loginLink = document.getElementById("login_link");

let logs = document.querySelectorAll(".log");

let login = document.querySelector(".login");
let register = document.querySelector(".register");

let signinBtn = document.querySelector(".singnin");
let registerBtn = document.querySelector(".register_btn");

/* ===== REGISTER INPUTS ===== */
let create_fullname = document.querySelector("#name");
let create_dob = document.querySelector("#dob");
let create_email = document.querySelector("#email");
let create_password = document.querySelector("#password");

/* ===== LOGIN INPUTS ===== */
let enter_email = document.querySelector(".enter_name");
let enter_password = document.querySelector(".enter_password");

/* ===== SOCIAL ICON ALERT ===== */
logs.forEach((icon) => {
  icon.addEventListener("click", () => {
    alert("Temporary service disabled");
  });
});

/* ===== LOGIN CHECK ===== */
signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    enter_email.value.trim() === "" ||
    enter_password.value.trim() === ""
  ) {
    alert("Both fields are compulsory");
    return;
  }

  let storedUser = localStorage.getItem("user");

  if (storedUser === null) {
    alert("No account found. Please register first.");
    return;
  }

  let user = JSON.parse(storedUser);

  if (
    enter_email.value === user.email &&
    enter_password.value === user.password
  ) {
    alert("Login Successful");
    window.location.href = "question.html";
  } else {
    alert("Invalid Email or Password");
  }
});

/* ===== REGISTER CHECK ===== */
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    create_fullname.value.trim() === "" ||
    create_email.value.trim() === "" ||
    create_password.value.trim() === "" ||
    create_dob.value.trim() === ""
  ) {
    alert("All fields are compulsory");
    return;
  }

  /* ===== DOB FUTURE DATE CHECK ===== */
  let today = new Date();
  let dob = new Date(create_dob.value);

  // remove time part
  today.setHours(0, 0, 0, 0);

  if (dob > today) {
    alert("DOB cannot be a future date");
    return;
  }

  /* ===== STORE USER DATA ===== */
  let userData = {
    name: create_fullname.value,
    dob: create_dob.value,
    email: create_email.value,
    password: create_password.value,
  };

  localStorage.setItem("user", JSON.stringify(userData));

  alert("Account Created Successfully");

  /* ===== SWITCH TO LOGIN ===== */
  login.classList.add("active");
  login.classList.remove("hidden");
  register.classList.add("hidden");
  register.classList.remove("active");
});

/* ===== TOGGLE FORMS ===== */
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
