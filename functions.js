function redirect(to) {
    window.location = to;
}
function viewPassword() {
    console.log("ran")
    var passwordInput = document.querySelector("#password");
    var eyeIcon = document.querySelector("#eye");
    if (passwordInput.type == "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove('mdi-eye');
        eyeIcon.classList.add('mdi-eye-off');
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove('mdi-eye-off');
        eyeIcon.classList.add('mdi-eye');
    }
}
function postLoggedIn() {
    var loggedIn = "1"
    localStorage.setItem("localStorage2", loggedIn)
    Redirect("index.html")
}
function getUsersRemote() {
    return fetch("https://haydenivins.s3-ap-southeast-2.amazonaws.com/jswebchat.json")
        .then(response => response.json())
}