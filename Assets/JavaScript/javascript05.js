
$(document).ready(function () {

    var timer = 10;
    var timerFlag = false;
    var counterCorrect = 0;
    var counterIncorrect = 0;
    var questionList;;


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

    $("#start-btn").on("click", function () {
        $(this).hide(1000);
        gameLoop();
    })

    function gameLoop() {
        startTimer();
        displayQuestion(0);
    }


    function displayQuestion(i) {
        console.log("test 1 2")
        var gameQs = gameQuestions[i].question;
        $("#question-div").text(gameQs);
        choiceDisplay = gameQuestions[i].choices;
        for (j = 0; j < choiceDisplay.length; j++) {
            var newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").append(newLi);
        }

        var $listItems = $("li");
        $listItems.on("Click", function (e) {
            userGuess = e.target.textContent;
            correctAnswer = gameQuestions[i].answer;
        

            if (userGuess == correctAnswer) {
                // $("ul").empty();
                var imageOne = $('<img src="./Assets/Images/placeholder.gif">');
                $("ul").append(imageOne);
                console.log("Correct!");
                counterCorrect++;
                // nextQuestion();
                stopTimer();
            }
            else {
                $("ul").append(imageOne);
                // $("ul").empty();

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