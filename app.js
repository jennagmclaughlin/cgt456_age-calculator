var yearInput = document.body.querySelector(".yearInput");
var submitButton = document.body.querySelector(".submitButton");
var text = document.body.querySelector(".text");
var currentYear = new Date().getFullYear();

submitButton.addEventListener("click", function() {
    var yearValue = yearInput.value;
    if (yearValue > 2023) {
        text.style.color = "red";
        text.innerHTML = "That's not even possible! Be honest."
    } else {
        text.style.color = "green";
        text.innerHTML = "You're gonna be " + (currentYear - yearValue) + " years old this year!"
    }
});