// ==== DOM ELEMENTS ==== //    
const signupBlock = document.querySelector('.main__signup--block');
const form = document.querySelector('.main__signup--form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('.email--error');
const successBlock = document.querySelector('.main__success--block');
const userEmail = document.querySelector('.user--email');
const dismissBtn = document.querySelector('.dismiss--button');

// ==== EVENT LISTENERS ==== //
form.addEventListener('submit', handleSubmit);
dismissBtn.addEventListener('click', resetForm);
emailInput.addEventListener('input', clearError);


// ==== FUNCTIONS ==== //
function handleSubmit(e) {
    e.preventDefault();

    clearError();

    const email = emailInput.value.trim();

    if (!email) {
        showError('Enter your email');
        return;
    }

    if (!isValidEmail(email)) {
        showError ('Valid email required');
        return;
    }

    userEmail.textContent = email;
    signupBlock.classList.add('hidden');
    successBlock.classList.remove('hidden');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(message) {
    emailError.textContent = message;
    emailInput.classList.add('error');
    emailInput.focus();
}

function clearError() {
    emailError.textContent = '';
    emailInput.classList.remove('error');
}

function resetForm() {
    successBlock.classList.add('hidden');
    signupBlock.classList.remove('hidden');
    form.reset();
    clearError();
    emailInput.focus();
}



