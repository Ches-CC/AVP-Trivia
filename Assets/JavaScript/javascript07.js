
$(document).ready(function () {
    //g'bl va'bles
    var timer = 10;
    var timerFlag = false;
    var counterCorrect = 0;
    var counterIncorrect = 0;
    var questionList;;

    //array to store all the questions/answers... no peeking!
    var gameQuestions = [
        {
            question: "How did the idea for the AvP universe start?",
            choices: ["Ridley Scott had a dream of Aliens fighting Predators", "Alien skull shown the background of Predator 2", "Predator skull in the background of Alien 3", "Alien vs Predator comic book series"],
            answer: "Alien vs Predator comic book series",
            //gif link?
        },

        {
            question: "Which word was never said in the AvP movie?",
            choices: ["Bishop", "Predator", "Pyramid", "Hunter"],
            answer: "Predator",
            //gif link?
        },
        {
            question: "In order to save money, where was AvP filmed?",
            choices: ["Vancouver", "Baton Rouge", "Mumbai", "Prague"],
            answer: "Prague",
            //gif link
        },
        {
            question: "This is the first movie to depict a Predator as...",
            choices: ["Anatomically correct", "Having mandibles", "Left handed", "human skulls as trophies"],
            answer: "Left handed",
            //gif link
        }
    ]

    $("#start-btn").on("click", function () {
        $(this).hide(1000);
        //Game Loop?
    })


    gameQuestions.forEach(displayQuestion());

    function displayQuestion(){
        alert("Fart noise!");
        startTimer();
    }





    //TIMERS----------------------
    //start Timer Function
    function startTimer() {
        if (!timerFlag) {
            timerInterval = setInterval(decrement, 1000);
        }
    }

    //make the numbers go downnnnnnn
    function decrement() {
        $("#timer").text(timer);
        timer--;
        if (timer < 0) {
            stopTimer();
            counterIncorrect++;
            //next questions;
        }

    }

    //make the numbers STOP
    function stopTimer() {
        flagTimer = false;
        clearInterval(timerInterval);
    }
    
});
