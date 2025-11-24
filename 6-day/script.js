const nameInput = document.getElementById('name');
nameInput.addEventListener('input', () => {
    if (nameInput.validity.patternMismatch) {
        nameInput.setCustomValidity('Name can only contain alphabetic characters and spaces.');
    } else if (nameInput.validity.tooLong) {
        nameInput.setCustomValidity('Name cannot exceed 40 characters.');
    } else if (nameInput.validity.valueMissing) {
        nameInput.setCustomValidity('Name is a mandatory field.');
    } else {
        nameInput.setCustomValidity('');
    }
});

const lastNameInput = document.getElementById('lastName');
lastNameInput.addEventListener('input', () => {
    if (lastNameInput.validity.patternMismatch) {
        lastNameInput.setCustomValidity('Last Name can only contain alphabetic characters and spaces.');
    } else if (lastNameInput.validity.tooLong) {
        lastNameInput.setCustomValidity('Last Name cannot exceed 40 characters.');
    } else if (lastNameInput.validity.valueMissing) {
        lastNameInput.setCustomValidity('Last Name is a mandatory field.');
    } else {
        lastNameInput.setCustomValidity('');
    }
});

const telephoneInput = document.getElementById('telephone');
telephoneInput.addEventListener('input', () => {
    if (telephoneInput.validity.patternMismatch) {
        telephoneInput.setCustomValidity('Telephone can only contain numeric characters.');
    } else {
        telephoneInput.setCustomValidity('');
    }
});

const emailInput = document.getElementById('email');
emailInput.addEventListener('input', () => {
    if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } else if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity('Email is a mandatory field.');
    } else {
        emailInput.setCustomValidity('');
    }
});

const linkedinUrlInput = document.getElementById('linkedinUrl');
linkedinUrlInput.addEventListener('input', () => {
    if (linkedinUrlInput.validity.typeMismatch) {
        linkedinUrlInput.setCustomValidity('Please enter a valid URL (e.g., https://example.com).');
    } else {
        linkedinUrlInput.setCustomValidity('');
    }
});