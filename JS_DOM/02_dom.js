// Example 6
document
    .getElementById("clickMeButton")
    .addEventListener("mouseover", function () {
        document.getElementById("eventHandle").style.color = "black";
        document.getElementById("eventHandle").style.backgroundColor = "#fff";
    });

// Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        event.target.classList.add("higlight");
    }
});

// Example 8
document
    .getElementById("feedbackForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        let feedBackInput = document.getElementById("feedBackInput");
        let previous = feedBackInput.previousElementSibling; // we can use previousElementSibling to get the previous element.
        console.log(previous);
        document.getElementById("feedbackMessage").textContent =
            feedBackInput.value;
    });

// Example 9
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("statusOfDOM").textContent =
        "DOM Loaded Successfully";
});

// Example 10
document
    .getElementById("toggleHighlightButton")
    .addEventListener("click", function () {
        let descriptionText = document.getElementById("descriptionText");
        descriptionText.classList.toggle("higlight");
    });
