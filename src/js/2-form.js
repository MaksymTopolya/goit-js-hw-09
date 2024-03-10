const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    localStorage.setItem("email", emailValue);
    localStorage.setItem("message", messageValue);
}

function handleSubmit(event) {
    event.preventDefault();

    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    if (!emailValue || !messageValue) {
        alert("Please fill in all form fields.");
        return;
    }

    let obj = {
        email: emailValue,
        message: messageValue,
    };

    let jsonObj = JSON.stringify(obj);

    console.log(obj);

    form.reset();

    localStorage.removeItem("email");
    localStorage.removeItem("message");
}

document.addEventListener("DOMContentLoaded", function () {
    let savedEmail = localStorage.getItem("email");
    let savedMessage = localStorage.getItem("message");

    if (savedEmail) {
        emailInput.value = savedEmail;
    }

    if (savedMessage) {
        messageInput.value = savedMessage;
    }
});
