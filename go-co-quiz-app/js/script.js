const questionsData = [
  {
    question:
      "How long can the virus survive on plastic and stainless steel surfaces, according to studies?",
    a: "A week",
    b: "72 hours or more",
    c: "Up to two and a half week",
    d: "Several months to years",
    correct: "b",
  },
  {
    question: "What’s more important for preventing infection?",
    a: "Frequent hand washing",
    b: "Wearing a face mask",
    c: "Keep a safe distance",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Which organ in the body does this coronavirus primarily attack?",
    a: "Lungs",
    b: "Liver",
    c: "Heart",
    d: "Eyes",
    correct: "a",
  },
  {
    question:
      "Which of these is NOT listed by the WHO as a symptom of coronavirus?",
    a: "Fever",
    b: "Dry cough",
    c: "Blurred vision",
    d: "Nasal congestion",
    correct: "c",
  },
  {
    question: "Who’s at highest risk of developing severe Covid-19 disease?",
    a: "Children",
    b: "People over 60 years of age",
    c: "Pregnant women",
    d: "People between 20-30 years of age",
    correct: "b",
  },
];

// DOM elements
// question
const question = document.querySelector(".question");
// Options
const options = document.querySelectorAll(".options");
// individual option
const a_opt = document.querySelector("#a_opt");
const b_opt = document.querySelector("#b_opt");
const c_opt = document.querySelector("#c_opt");
const d_opt = document.querySelector("#d_opt");
// submit button
const button = document.querySelector(".btn");
// quiz-header container
const quizHeader = document.querySelector(".quiz-header");

let currentQuestion = 0;
let score = 0;

loadQuestion();

// function to load question-options
function loadQuestion() {
  // clear previous selection
  clearOptions();
  // update question
  question.textContent = questionsData[currentQuestion].question;
  // update options
  a_opt.textContent = questionsData[currentQuestion].a;
  b_opt.textContent = questionsData[currentQuestion].b;
  c_opt.textContent = questionsData[currentQuestion].c;
  d_opt.textContent = questionsData[currentQuestion].d;
}

// submit answer
function submit() {
  const optionSelected = getSelectedOption();

  if (optionSelected) {
    if (optionSelected === questionsData[currentQuestion].correct) {
      score++;
    }
  }
  // load next question
  currentQuestion++;
  if (questionsData.length > currentQuestion) {
    loadQuestion();
  } else {
    button.style.display = "none";
    quizHeader.innerHTML = `<h1 class="result">You got ${score} out of ${questionsData.length} answers correct!.</h1>
    <button onclick="location.reload()" class="try-again">Try Again</button>
    `;
  }
}
button.addEventListener("click", submit);

// get selected option
function getSelectedOption() {
  let selectedOption = undefined;
  options.forEach((option) => {
    if (option.checked) {
      selectedOption = option.id;
    }
  });
  return selectedOption;
}

// clear option selection
function clearOptions() {
  options.forEach((option) => {
    option.checked = false;
  });
}
