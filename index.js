let registerpage = document.getElementById("register");
let login = document.querySelector(".login"); // ✅ FIX

registerpage.addEventListener("click", () => {
    login.style.display = "none";
});

