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

/* ===== LOGIN CHECK ===== */// LOGIN BUTTON
signinBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let email = enter_email.value.trim();
    let password = enter_password.value.trim();

    let storedUser = localStorage.getItem("user");

    if (!storedUser) {
        alert("No user found. Please register first");
        return;
    }

    let user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {

        localStorage.setItem("loginUser", JSON.stringify({
            name: user.name,
            email: user.email
        }));

        window.location.href = "home.html";

    } else {
        alert("Invalid credentials");
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





