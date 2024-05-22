function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mobileNumber = document.getElementById('mobileNumber').value;

    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("First Name should contain alphabets and the length should not be less than 6 characters.");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Last Name should not be empty.");
        return false;
    }

    if (address.trim() === "") {
        alert("Address should not be empty.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid Email address.");
        return false;
    }

    if (!/^[0-9]{10}$/.test(mobileNumber)) {
        alert("Mobile Number should contain 10 digits only.");
        return false;
    }

    if (password.length < 8 || !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        alert("Password should not be less than 8 characters length and contain at least one special character.");
        return false;
    }

    return true;
}

function validateEmail(email) {
    // Email validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
