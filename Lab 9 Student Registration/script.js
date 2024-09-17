document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;


        if (!username || !email || !phone || !password || !confirmPassword) {
            alert('All fields are required');
            return false;
        }
        if (!/^\d{10}$/.test(phone)) {
            alert('Phone number must be 10 digits');
            return false;
        }
        if (password.length < 7 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[&$#@]/.test(password)) {
            alert('Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character (&, $, #, or @)');
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }
        const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3,4}\.[a-zA-Z]{2,3}$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return false;
        }
        return true;
    }
});