// Validate Login Form
function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Check if email and password fields are filled
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return false;
    }

    // Simple Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert('Password should be at least 6 characters.');
        return false;
    }

    // If everything is correct, proceed to home page
    alert('Login successful! Redirecting to home page...');
    
    // Redirect to home page (replace 'index.html' with your actual home page URL)
    window.location.href = 'index.html';  // Or use '/home' or your actual URL for the home page

    return false;  // Prevent the form from submitting (to prevent page reload)
}

// Validate Signup Form
function validateSignup() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if all fields are filled
    if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all the fields.');
        return false;
    }

    // Simple Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        alert('Password should be at least 6 characters.');
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // If everything is correct, proceed to home page
    alert('Signup successful! Redirecting to home page...');
    
    // Redirect to home page (replace 'index.html' with your actual home page URL)
    window.location.href = 'index.html';  // Or use '/home' or your actual URL for the home page

    return false;  // Prevent the form from submitting (to prevent page reload)
}
