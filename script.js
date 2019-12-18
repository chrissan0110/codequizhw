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