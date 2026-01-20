let home_name = document.getElementById("home_name");
let home_email = document.getElementById("home_email");

let loginUser = localStorage.getItem("loginUser");

if (loginUser) {
    let user = JSON.parse(loginUser);
    home_name.innerText = user.name;
    home_email.innerText = user.email;
} else {
    window.location.href = "index.html";
}
