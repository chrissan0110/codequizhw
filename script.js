var secondsLeft = 76;
var timerInterval;

var timeEl = document.querySelector(".Time");
var questionsEl = document.querySelector(".questions-rendered");
var scoreEl = document.querySelector(".myScore");
var highScoreEl = document.querySelector(".highScore");
var submitButton = document.querySelector("#submit");
var refreshButton = document.querySelector("#goBack");

var initialInput = document.querySelector("#initials");
var scoreList = document.querySelector("#scoreList");
var scoreForm = document.querySelector("#score-form");

var userInitials = [];

document.querySelector('.myScore').style.display='none';
document.querySelector('.highscores').style.display='none';

refreshButton.addEventListener("click", function(){
    location.reload()
});

function setTime(){
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "TIME REMAINING: " + secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            document.querySelector('.myScore').style.display='block';
            document.querySelector(".Time").style.display='none';
            document.querySelector('.questions-rendered').style.display='none';
            highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
        }
    }, 1000);
}
const startBtn = document.getElementById("startquiz");

startBtn.addEventListener('click', function() {
    setTime();
    startBtn.style.display = 'none';
    document.querySelector('.quizPage').style.display='none';
    displayQuestions(questionIndex);
})

var questionIndex = 0;

function displayQuestions(){
    
    questionsEl.textContent = "";
    var question = questions[questionIndex];
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("h2");
    questionText.textContent = question.title;
    questionDiv.appendChild(questionText)
    
for (var i=0; i < question.choices.length ;i++) {
    var option = document.createElement("button");
    option.textContent = question.choices[i];
    option.setAttribute("class", "option");
    option.addEventListener("click", function(e) {
    var optionClicked = (e.target.innerHTML);
            
        if(optionClicked === questions[questionIndex].answer){
            alert("Correct!");
            displayQuestions(questionIndex++);
        }
        else{
            alert("Incorrect!");
            displayQuestions(questionIndex++);
            secondsLeft -= 10;
        }
            
        });
        if (questionIndex == questions.length - 1) {
            clearInterval(timerInterval);
            document.querySelector('.myScore').style.display='block';
            document.querySelector(".Time").style.display='none';
            highScoreEl.textContent = "YOUR SCORE IS " + secondsLeft;
            return;
        }
        questionDiv.appendChild(option);
    }
    questionsEl.appendChild(questionDiv);
}