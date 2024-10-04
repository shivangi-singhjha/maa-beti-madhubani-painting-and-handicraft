function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill out both username and password.";
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}




