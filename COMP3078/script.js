document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (email !== confirmEmail) {
        alert("Emails do not match!");
        return;
    }

    alert("Account Created Successfully!");
});
