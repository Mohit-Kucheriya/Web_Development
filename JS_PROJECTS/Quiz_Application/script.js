document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const restartButton = document.getElementById("restart-btn");
    const nextButton = document.getElementById("next-btn");

    const questionContainerDisplay =
        document.getElementById("question-container");
    const resultContainerDisplay = document.getElementById("result-container");

    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const scoreDisplay = document.getElementById("score");

    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars",
        },
        {
            question: "What is the largest mammal?",
            options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"],
            answer: "Blue Whale",
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            options: [
                "Harper Lee",
                "Mark Twain",
                "J.K. Rowling",
                "F. Scott Fitzgerald",
            ],
            answer: "Harper Lee",
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "H2SO4"],
            answer: "H2O",
        },
    ];

    // Always remember to keep the track of the current question index, so that we can access the correct question data
    let currentQuestionIndex = 0;

    // Initialize the score to 0
    let score = 0;

    // Whenever we pass any method, always pass the reference of it, so that when the user clicks on the button, the method is called.
    startButton.addEventListener("click", startQuiz);

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResult()
        }


    })

    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0; // Set the currentQuestionIndex to 0
        score = 0; // Set the score to 0
        resultContainerDisplay.classList.add("hidden");
        startQuiz();
    })

    function startQuiz() {
        // As soon as user clicks on the startButton, first of all hide the startButton, resultContainerDisplay should be hidden, and questionContainerDisplay should be visible.
        startButton.classList.add("hidden");
        resultContainerDisplay.classList.add("hidden");
        questionContainerDisplay.classList.remove("hidden");

        // Now, we need to show the questionText and choicesList, so that the user can see the question and the options.
        showQuestion();
    }

    function showQuestion() {
        nextButton.classList.add("hidden");
        questionText.textContent = quizData[currentQuestionIndex].question;
        choicesList.innerHTML = ""; // Clear the previous choicesList
        quizData[currentQuestionIndex].options.forEach((option) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => selectAnswer(option)); // Whenever the user clicks on any option, we need to call the selectAnswer method with the option as an argument, if we pass the method as selectAnswer(option), it will execute it immediately, so wrap it inside a callback function.
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(option) {
        // Whenever the user clicks on any option, we need to check if the option is correct or not, if it is correct, we need to increment the score.
        const correctAnswer = quizData[currentQuestionIndex].answer;
        if (option === correctAnswer) {
            score++;
        }
        nextButton.classList.remove("hidden");
    }

    function showResult() {
        questionContainerDisplay.classList.add("hidden");
        resultContainerDisplay.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${quizData.length}`;

    }
});
