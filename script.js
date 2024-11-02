

function calculateBirthday() {
    const ageInput = document.getElementById("ageInput").value;
    const result = document.getElementById("result");

    if (ageInput === "") {
        result.textContent = "Please enter a valid age.";
        return;
    }

    const currentDate = new Date();
    const birthYear = currentDate.getFullYear() - ageInput;
    const birthMonth = currentDate.getMonth() + 1; // Months are zero-indexed
    const birthDay = currentDate.getDate();

     result.innerHTML = ` <span class="highlight">${birthDay}/${birthMonth}/${birthYear}</span> <br><span class="info" id="hello">"The birth year can be accurate, but the birth month and day cannot be accurate."</span>`;
}

// Add event listener to trigger calculation on "Enter" key press
document.getElementById("ageInput").addEventListener("keypress", function(event) {
    if (event.key === "enter") {
        calculateBirthday();
    }
});