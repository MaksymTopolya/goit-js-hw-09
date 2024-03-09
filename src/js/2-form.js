const form = document.querySelector(".feedback-form")

form.addEventListener("submit", handle)

function handle(event) {
    event.preventDefault()
    let emailValue = event.target.elements.email.value
    let messageValue = event.target.elements.message.value

    let obj = {
        email: emailValue,
        message: messageValue
    }
    
    let json = JSON.stringify(obj)
    localStorage.setItem("info", json)
}


document.addEventListener("DOMContentLoaded", function() {
    let saved = localStorage.getItem("info");
    if (saved) {
        let parsedSaved = JSON.parse(saved);
        document.querySelector("[name=email]").value = parsedSaved.email;
        document.querySelector("[name=message]").value = parsedSaved.message;
    }
});