// Trivia questions
const triviaQuestions = [
    {
      category: "sport",
      question: "Who won the 2018 FIFA World Cup?",
      choices: ["France", "Germany", "Spain", "Brazil"],
      correctAnswer: 0
    },
    {
      category: "history",
      question: "In what year did World War II end?",
      choices: ["1944", "1945", "1946", "1947"],
      correctAnswer: 1
    },
    {
      category: "geography",
      question: "What is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      correctAnswer: 3
    }
  ];
  
  // Game variables
  let currentQuestionIndex = 0;
  let score = 0;
  let time = 0;
  let timerId;
  
  // DOM elements
  const landingPage = document.getElementById("landing-page");
  const gamePage = document.getElementById("game-page");
  const endPage = document.getElementById("end-page");
  const categoryEl = document.getElementById("category");
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");
  const finalScoreEl = document.getElementById("final-score");
  const choiceButtons = document.querySelectorAll("#choices button");
  
  // Start game function
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    time = 0;
    endPage.style.display = "none";
    landingPage.style.display = "none";
    gamePage.style.display = "block";
    showQuestion();
    startTimer();
  }
  
  // Show question function
  function showQuestion() {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    categoryEl.innerText = currentQuestion.category;
    questionEl.innerText = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
      choiceButtons[i].innerText = currentQuestion.choices[i];
    }
  }
  
  // Check answer function
  function checkAnswer(choiceIndex) {
    const currentQuestion = triviaQuestions[currentQuestionIndex];
    if (choiceIndex === currentQuestion.correctAnswer) {
      score++;
      scoreEl.innerText = score;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  // Start timer function
  function startTimer() {
    time = 0;
    timeEl.innerText = time;
    timerId = setInterval(() => {
      time++;
      timeEl.innerText = time;
    }, 1000);
  }
  
  // End game function
  function endGame() {
    clearInterval(timerId);
    finalScoreEl.innerText = score;
    gamePage.style.display = "none";
    endPage.style.display = "block";
  }
  
  // Event listeners
  document.getElementById("start-game-btn").addEventListener("click", startGame);
  for (let i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", () => {
      checkAnswer(i);
    });
  }
  