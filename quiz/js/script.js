"use strict";

const quizData = [
    {
        question: "Which language is primarily used for styling web pages?",
        options: ["Python", "HTML", "CSS", "JavaScript"],
        answer: "CSS"
    },
    {
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "High Technology Test Platform", "Home Tool Testing Protocol", "Hyper Transfer Text Program"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which company developed the JavaScript language?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
    },
    {
        question: "What is the core component of the Android operating system?",
        options: ["The Kernel", "The Shell", "The JVM", "The IDE"],
        answer: "The Kernel"
    },
    {
        question: "What number represents the successful 'OK' status in an HTTP response?",
        options: ["404", "500", "200", "301"],
        answer: "200"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsForm = document.getElementById('optionsForm');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const resultEl = document.getElementById('result');



function displayQuestion() {
    resultEl.textContent = ''; // Clear previous result message
    optionsForm.innerHTML = ''; // Clear previous options
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';

    if (currentQuestionIndex < quizData.length) {
        const currentQ = quizData[currentQuestionIndex];
        questionEl.textContent = `Question ${currentQuestionIndex + 1}: ${currentQ.question}`;

        currentQ.options.forEach(option => {
            const label = document.createElement('label');
            label.classList.add('option-label');
            label.innerHTML = `
                <input type="radio" name="option" value="${option}">
                ${option}
            `;
            optionsForm.appendChild(label);
        });
    } else {
        // End of Quiz
        endQuiz();
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    // Check if an option was selected
    if (!selectedOption) {
        resultEl.textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    // Disable form and hide submit button
    optionsForm.querySelectorAll('input').forEach(input => input.disabled = true);
    submitBtn.style.display = 'none';

    if (userAnswer === correctAnswer) {
        score++;
        resultEl.textContent = "✅ Correct! That's a great answer.";
        resultEl.classList.remove('incorrect');
        resultEl.classList.add('correct');
    } else {
        resultEl.textContent = `❌ Incorrect. The correct answer was: ${correctAnswer}.`;
        resultEl.classList.remove('correct');
        resultEl.classList.add('incorrect');
    }
    
    // Show the next button
    if (currentQuestionIndex < quizData.length - 1) {
        nextBtn.style.display = 'block';
    } else {
        // Last question submitted, show end results
        setTimeout(endQuiz, 1500); 
    }
}

function endQuiz() {
    questionEl.textContent = "Quiz Finished!";
    optionsForm.innerHTML = '';
    resultEl.textContent = `Your final score is ${score} out of ${quizData.length}.`;
    resultEl.classList.remove('correct', 'incorrect');
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartBtn.style.display = 'none';
    displayQuestion();
}

// --- Event Listeners ---
submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Initial call to start the quiz
displayQuestion();