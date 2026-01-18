let registerbtn = document.getElementById("register");
let loginLink = document.getElementById("login_link");

let login = document.querySelector(".login");
let register = document.querySelector(".register");

let signinBtn = document.querySelector(".singnin");
let registerBtn = document.querySelector(".register_btn");

// REGISTER inputs
let create_fullname = document.querySelector("#name");
let create_dob = document.querySelector("#dob");
let create_email = document.querySelector("#email");
let create_password = document.querySelector("#password");

// LOGIN inputs
let enter_email = document.querySelector(".enter_name");
let enter_password = document.querySelector(".enter_password");

/* ===== LOGIN CHECK ===== */
signinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    enter_email.value.trim() === "" ||
    enter_password.value.trim() === ""
  ) {
    alert("Both fields are compulsory");
  } else {
    alert("Login working ✅");
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
  } else {
    alert("Account Created ✅");
  }
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
