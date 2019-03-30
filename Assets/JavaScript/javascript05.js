
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
            question: "What is your favorite question?",
            choices: ["What is your favorite color?", "What is the capitol of Lucidia?", "What is the velocity of a coconut-bound swallow?", "This one isn't right for sure!"],
            answer: "What is the capitol of Lucidia?",
            //gif link?
        },

        {
            question: "Who let the dogs out?",
            choices: ["Who or WHOM?", "You did", "I did", "In a way, we all did"],
            answer: "I did",
            //gif link?
        },
        {
            question: "Security in the basement?",
            choices: ["No dumb questions", "Sick at Nintendooo", "Yo ee, why ee?", "Sweeeet"],
            answer: "Sick at Nintendooo",
            //gif link
        },
        {
            question: "How Dis Be?",
            choices: ["Blah 01", "Blah 02", "Blah 03?", "Blargh"],
            answer: "Blargh",
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