// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;

    if(fname == "") {
        document.getElementById('fnameError').innerHTML = "First name is required.";
    }

    if(lname == "") {
        document.getElementById('lnameError').innerHTML = "Last name is required.";
    }

    if(email == "") {
        document.getElementById('emailError').innerHTML = "Email is required.";
    }

    if(pwd == "") {
        document.getElementById('pwdError').innerHTML = "Password is required.";
    }

    if(cpwd == "") {
        document.getElementById('cpwdError').innerHTML = "Confirm password is required.";
    }

    if(pwd != cpwd) {
        document.getElementById('cpwdError').innerHTML = "Passwords do not match.";
    }
});