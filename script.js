function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "player.html";
    } else {
        document.getElementById("msg").innerText = "Invalid login!";
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
