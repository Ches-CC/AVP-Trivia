
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

    // var i = gameQuestions[i];

    //start button starts the game (suprise!); also hides itself... magic!
    $("#start-btn").on("click", function () {
        $(this).hide(1000);
        gameLoop();
    })

    //functions in a function: so functional (except it doesn't function [yet])
    function gameLoop() {
        startTimer();

        //is this where things are broken?
        //how to iterate throgh the questions, but making it pause in between questions?
        displayQuestion();
    }


    //displayQuestion-->primary function
    //the parameter is supposed to be the next question (which are for-looped through...?)
    function displayQuestion() {
        //just removed the paramter... will redefine i below
        // console.log("test 1 2")
        
        //First things first: list Question & Choices

        //declaring vars which access the question-storing object, then push Q's to div
        var gameQs = gameQuestions[index].question;
        $("#question-div").text(gameQs);

        //var for the choices listed out in the array (via for loop, natch)
        choiceDisplay = gameQuestions[index].choices;
        for (j = 0; j < choiceDisplay.length; j++) {

            //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
            var newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").append(newLi);
            //okay, so the choices/list-items are appending to the unordered list via
        }

        //still broken, but think about .forEach(function(item, index, array){}) on the array-->question object

        //Time to capture the user guess...
        
        var listItems = $("li");
        //since these are dynamically-generated elements, ntb "document" on click, not the element itself
        //(or so I've read)
        $(document).on("click", listItems, function (e) {

            //setting up a way to tell "right from wrong" (lol!)
            userGuess = e.target.textContent;
            correctAnswer = gameQuestions[i].answer;
            console.log(userGuess);
            console.log(correctAnswer);

            if (userGuess == correctAnswer) {
                // $("ul").empty();
                var imageOne = $('<img src="assets/images/placeholder.gif">');
                $("ul").append(imageOne);
                console.log("Correct!");
                counterCorrect++;
                // nextQuestion();
                stopTimer();
            }
            if (userGuess != correctAnswer) {
                $("ul").append(imageOne);
                // $("ul").empty();
                var imageTwo = $('<img src="assets/images/alien.png">');
                $("ul").append(imageTwo);
                console.log("Incorrect!!");
                counterIncorrect++;
                stopTimer();
            }
        })
        console.log("Correct: " + counterCorrect);
        console.log("Incorrect: " + counterIncorrect);
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