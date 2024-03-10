const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    let emailValue = emailInput.value.trim();
    let messageValue = messageInput.value.trim();

    let localObj = {
        email: emailValue,
        message: messageValue,
    };

    let localObjJson = JSON.stringify(localObj);

    localStorage.setItem("feedback-form-state", localObjJson);
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

    console.log(obj);

    form.reset();

    localStorage.removeItem("feedback-form-state");
}

document.addEventListener("DOMContentLoaded", function () {
    let savedData = localStorage.getItem("feedback-form-state");

    if (savedData) {
        let parsedData = JSON.parse(savedData); // Перетворюємо JSON у об'єкт
        emailInput.value = parsedData.email;
        messageInput.value = parsedData.message;
    }
});
