function openModal(message) {
    const modal = document.getElementById('successModal');
    const successMessage = document.getElementById('successMessage');

    successMessage.innerHTML = message;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

function redirectToIndex() {
    window.location.href = 'index.html';
}

function validateForm() {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    const errorMessage = document.getElementById('errorMessageLogin');
    const emailError = document.getElementById('emailErrorLogin');
    const passwordError = document.getElementById('passwordErrorLogin');

    errorMessage.innerHTML = '';
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    if (email.trim() === '' && password.trim() === '') {
        errorMessage.innerHTML = '*Please fill out the form fields*';
        return false;
    }

    if (email.trim() === '') {
        emailError.innerHTML = '*Email is required*';
        return false;
    }

    if (password.trim() === '') {
        passwordError.innerHTML = '*Password is required*';
        return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.innerHTML = '*Password must be at least 8 characters, contain at least one capital letter, and have at least one special character*';
        return false;
    }

    // If both fields are filled and password is valid
    // success message in the modal
    openModal('Login Successful!');
    return false;
}

// Event listener for the link with ID 'linkCreateAccount'
document.getElementById('linkCreateAccount').addEventListener('click', function() {
    // Redirect to the signup page
});
