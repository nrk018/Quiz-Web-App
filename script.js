const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        correct: 0,
        explanation: "The capital of France is Paris."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0,
        explanation: "Mars is known as the Red Planet due to its reddish appearance."
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correct: 0,
        explanation: "The Pacific Ocean is the largest ocean in the world."
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        correct: 0,
        explanation: "The Mona Lisa was painted by Leonardo da Vinci."
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        correct: 0,
        explanation: "Mount Everest is the tallest mountain in the world."
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["Japan", "China", "South Korea", "Thailand"],
        correct: 0,
        explanation: "Japan is known as the Land of the Rising Sun."
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correct: 0,
        explanation: "Romeo and Juliet was written by William Shakespeare."
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Kalahari Desert"],
        correct: 0,
        explanation: "The Sahara Desert is the largest desert in the world."
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["China", "India", "Egypt", "Italy"],
        correct: 0,
        explanation: "The Great Wall is located in China."
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
        correct: 0,
        explanation: "The telephone was invented by Alexander Graham Bell."
    },
];

let currentQuestion = 0;
let score = 0;
let timer;
const maxTime = 60;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit-btn');
const explanationElement = document.getElementById('explanation');
const timeElement = document.getElementById('time');
const scoreElement = document.getElementById('currentScore');
const statusIconsElement = document.getElementById('status-icons');
const thankYouMessageElement = document.getElementById('thank-you-message');
const finalScoreElement = document.getElementById('final-score');

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionElement.textContent = q.question;
        optionsElement.innerHTML = '';
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.onclick = () => selectOption(index);
            optionsElement.appendChild(btn);
        });
        explanationElement.textContent = '';
        submitButton.disabled = true;
        resetTimer();
    } else {
        endQuiz();
    }
}

function selectOption(index) {
    submitButton.disabled = false;
    submitButton.onclick = () => submitAnswer(index);
}

function submitAnswer(selectedIndex) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    explanationElement.textContent = isCorrect
        ? `Correct! ${q.explanation}`
        : `Wrong! ${q.explanation}`;
    score += isCorrect ? 1 : 0;
    scoreElement.textContent = score;
    updateStatusIcons(isCorrect);
    currentQuestion++;
    setTimeout(loadQuestion, 3000); // Wait for 3 seconds before next question
}

function resetTimer() {
    let timeLeft = maxTime;
    timeElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            submitAnswer(-1); // Auto-submit wrong answer
        }
    }, 1000);
}

function updateStatusIcons(isCorrect) {
    const icon = document.createElement('div');
    icon.style.backgroundColor = isCorrect ? 'green' : 'red';
    statusIconsElement.appendChild(icon);
}

function endQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    thankYouMessageElement.classList.remove('hidden');
    finalScoreElement.textContent = `Your score is ${score} out of ${questions.length}. ${
        score > 7 ? 'Excellent performance!' : score > 4 ? 'Good job, but there’s room for improvement.' : 'Keep practicing, and you’ll get better!'
    }`;
}

loadQuestion();