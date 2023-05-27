// div start
const startScreen = document.getElementsByClassName("start-screen")[0];
const btnStart = document.getElementById("btn-start");
// div roles
const rolesScreen = document.getElementById("roles-screen");
const btnExitStart = document.getElementsByClassName("btn-exit")[0];
const btnExitEnd = document.getElementsByClassName("btn-exit")[1];
const btnExitEndAnswer = document.getElementsByClassName("btn-exit")[2];
const btnContinue = document.getElementById("btn-continue");
// div question
const displayContainer = document.getElementById("display-container");
// const questionsOptions = document.getElementById("questions_options");
const numberOfQuestion = document.querySelector(".number-of-question");
const timeLeft = document.querySelector(".time-left");

const divNext = document.querySelector(".div-next");
const btnNext = document.getElementById("btn-next");
// div score
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
const btnRestart = document.getElementById("btn-restart");
const btnRestartAnswer = document.getElementById("btn-restart-answer");
// show answers
const displayAnswers = document.getElementById("display-answers");
const showAnswers = document.getElementById("show-answers");
const numberAnswer = document.getElementById("number-question");
const answers = document.createElement("div");

// variable
let index = 0;
let optionAnswer = "";
let userAnswers = [];
let count = 1;
let score = 0;
let timer = 11;
let countTime = timer;
let countdown;

// set text in div time-left
timeLeft.innerText = `${countTime - 1}s`;
// create new array contain 10 random Question from {functions.mjs}
let question = questionPool;
const randomQuestion = getRandom(10);

function getRandom(n) {
  const sample = [];
  const indices = new Set();

  while (indices.size < n && indices.size < question.length) {
    const index = Math.floor(Math.random() * question.length);
    if (!indices.has(index)) {
      indices.add(index);
      sample.push(question[index]);
    }
  }
  return sample;
}
// --------------------------button--------------------------
// Start
btnStart.addEventListener("click", function () {
  startScreen.style.display = "none";
  rolesScreen.style.display = "block";
});

// exit
btnExitStart.addEventListener("click", function () {
  window.close();
});
btnExitEnd.addEventListener("click", function () {
  window.close();
});
btnExitEndAnswer.addEventListener("click", function () {
  window.close();
});

// Continue
btnContinue.addEventListener("click", function () {
  rolesScreen.style.display = "none";
  displayContainer.style.display = "block";
  numberOfQuestion.innerText = `${count} of ${randomQuestion.length} questions`;
  createOption(index);
  timerDisplay();
});

// Button Restart
btnRestart.addEventListener("click", function () {
  window.location.reload();
});
btnRestartAnswer.addEventListener("click", function () {
  window.location.reload();
});

// next button
btnNext.addEventListener(
  "click",
  (displayNext = () => {
    if (count < randomQuestion.length) {
      if (optionAnswer != "" || countTime == 0) {
        if (count == 9) {
          btnNext.innerText = `Finish`;
        }

        const questions = document.getElementById("questions");
        const optionsBox = document.getElementById("options-box");

        userAnswers.push(randomQuestion[index]);
        userAnswers[index]["answerUser"] = optionAnswer;
        index++;
        numberOfQuestion.innerText = `${++count} of ${
          randomQuestion.length
        } questions`;
        createOption(index);
        questions.remove();
        optionsBox.remove();
        optionAnswer = "";

        countTime = timer;
        timeLeft.innerText = `${countTime - 1}s`;
        clearInterval(countdown);
        timerDisplay();
      } else {
        // toast
        var x = document.getElementById("toast");
        x.className = "show";
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      }
    } else {
      userAnswers.push(randomQuestion[index]);
      userAnswers[index]["answerUser"] = optionAnswer;
      userScore.innerText = `Your score is ${score} out of ${randomQuestion.length}`;
      displayContainer.style.display = "none";
      scoreContainer.style.display = "block";
    }
  })
);

// create element questions Options
// create Options
function createOption(index) {
  const questions = document.createElement("div");
  const optionsBox = document.createElement("div");
  // create element
  let indexOption = randomQuestion[index];
  questions.innerHTML = `<div><div id="questions">${randomQuestion[index].question}</div></div>`;
  optionsBox.innerHTML = `
  <div id="options-box">
  <input type="radio" name="rGroup" value="${indexOption.options[0]}" id="r1" onclick="chooseAnswer(this)"/>
  <label class="option" for="r1">${indexOption.options[0]}</label>
  <input type="radio" name="rGroup" value="${indexOption.options[1]}" id="r2" onclick="chooseAnswer(this)"/>
  <label class="option" for="r2">${indexOption.options[1]}</label>
  <input type="radio" name="rGroup" value="${indexOption.options[2]}" id="r3" onclick="chooseAnswer(this)"/>
  <label class="option" for="r3">${indexOption.options[2]}</label>
  <input type="radio" name="rGroup" value="${indexOption.options[3]}" id="r4" onclick="chooseAnswer(this)"/>
  <label class="option" for="r4">${indexOption.options[3]}</label>
  </div> `;

  divNext.before(questions);
  divNext.before(optionsBox);
}

function chooseAnswer(answer) {
  optionAnswer = answer.value;
  if (answer.value == randomQuestion[index].answer) {
    score++;
  }
}

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    countTime--;
    timeLeft.innerText = `${countTime}s`;
    if (countTime == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

showAnswers.addEventListener("click", function () {
  scoreContainer.style.display = "none";
  displayAnswers.style.display = "block";
  showAnswersUser(0);
  for (let i = 0; i < randomQuestion.length; i++) {
    let num = document.createElement("div");
    num.classList.add("num");
    num.innerText = `${i + 1}`;
    if (i == 0) {
      num.classList.add("selected-num");
    }
    numberAnswer.appendChild(num);

    num.addEventListener("click", function () {
      // remove selected class from all buttons
      document.querySelectorAll(".num").forEach(function (button) {
        button.classList.remove("selected-num");
      });
      // add selected class to the clicked button
      num.classList.add("selected-num");

      if (answers.hasChildNodes()) {
        answers.removeChild(answers.firstElementChild);
        answers.removeChild(answers.lastElementChild);
        showAnswersUser(parseInt(num.textContent) - 1);
      }
    });
  }
});
// show Answers User
function showAnswersUser(i) {
  const questions = document.createElement("div");
  const optionsBox = document.createElement("div");

  // create element
  let indexOption = userAnswers[i];
  questions.innerHTML = `<div id="questions">${userAnswers[i].question}</div>`;
  optionsBox.innerHTML = `
    <div id="options-box">
      <div class="optionResult" id="option1">${indexOption.options[0]} </div>
      <div class="optionResult" id="option2">${indexOption.options[1]} </div>
      <div class="optionResult" id="option3">${indexOption.options[2]} </div>
      <div class="optionResult" id="option4">${indexOption.options[3]} </div>
    </div>`;

  answers.appendChild(questions);
  answers.appendChild(optionsBox);
  numberAnswer.after(answers);
  // change background color of options
  let correctAnswer = userAnswers[i].answer;
  let answerUser = userAnswers[i].answerUser;

  let correctOption = document.getElementById(
    `option${indexOption.options.indexOf(correctAnswer) + 1}`
  );
  let userOption = document.getElementById(
    `option${indexOption.options.indexOf(answerUser) + 1}`
  );
  if (answerUser != "") {
    if (correctAnswer === answerUser) {
      userOption.style = " background-color: #4ca64c; color: #ffffff;";
    } else {
      userOption.style = " background-color: #ff4949; color: #ffffff;";
      correctOption.style = " background-color: #4ca64c; color: #ffffff;";
    }
  } else {
    const noAnswer = document.createElement("div");
    noAnswer.textContent = "Time ran out before you answered the question";
    noAnswer.classList.add("no-answer");
    optionsBox.appendChild(noAnswer);
  }
}
