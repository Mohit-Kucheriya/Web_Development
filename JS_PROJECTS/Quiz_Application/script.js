document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("start-btn");
    const restartButton = document.getElementById("restart-btn");
    const nextButton = document.getElementById("next-btn");
    const questionContainerDisplay = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainerDisplay = document.getElementById("result-container")
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




});
