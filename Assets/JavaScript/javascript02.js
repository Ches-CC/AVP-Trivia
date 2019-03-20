// alert("page is connected!")

//lets let the page loadup before we get started
$(document).ready(function () {
    // global variable: timer; starting low for testing; will bind to on-click below
    var timer = 10;
    var timerFlag = false;
    var counterCorrect = 0;
    var counterIncorrect = 0;


    // going to first try objects within an array
    var gameQuestions = [
        {
            question: "What is your favorite question?",
            choices: ["What is your favorite color?", "What is the capitol of Lucidia?", "What is the velocity of a coconut-bound swallow?", "Another funny answer!", "Maybe this is too many answers lol."],
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
            choices: ["No dumb questions", "Sick at Nintendooo", "Yo ee, why ee?"],
            answer: "Sick at Nintendooo",
            //gif link
        }
    ]

    // console.log(gameQuestions[0].choices[1])


    //for loop through the array? & kick info to the DOM

   //per the class activities on Tues night--check your jquery appends, etc (might be listing some of them wrong)
   //no need for $(asdfsd) on some of them? can just go blah.append(blah)
    // also, don't forget to UPDATE THE STATE (at end of If/Else?)
    //check out "data-xyz"-->user-defined attribute

    // var questionNumber = 2;
    questionDisplay(0);
    questionDisplay(1);
    questionDisplay(2);

    //function (w/ parameters) to input each object's key's value into the list
    function questionDisplay(questionNumber) {
        $("#question").text(gameQuestions[questionNumber].question);
        choiceDisplay = gameQuestions[questionNumber].choices;
        // OMG, this part took FOREVER
        for (j = 0; j < choiceDisplay.length; j++) {
            var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").append($newLi);
            $("li").addClass("choices");
            // $("li").text(choiceDisplay);
        }

        //just moved the li on-click content here; not sure if it will stay here;
        var $listItems = $("li");
        $listItems.on("click", function (e) {
            userGuess = e.target.textContent;
            console.log(userGuess);
            correctAnswer = gameQuestions[0].answer;
            // console.log(correctAnswer);
            if (userGuess == correctAnswer) {
                console.log("Correct!");
                counterCorrect++;
                stopTimer();
                nextQuestion();
            } else {
                console.log("Incorrect!!");
                counterIncorrect++;
                stopTimer();
                nextQuestion();
            }
            console.log("Correct: " + counterCorrect);
            console.log("Incorrect: " + counterIncorrect);
        })
    }

    


    // function questionDisplay() {
    //     $("#question").text(gameQuestions[0].question);
    //     choiceDisplay = gameQuestions[0].choices;
    //     // OMG, this part took FOREVER
    //     for (j = 0; j < choiceDisplay.length; j++) {
    //         var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
    //         $("ul").append($newLi);
    //         $("li").addClass("choices");
    //         // $("li").text(choiceDisplay);
    //     }

    //     //just moved the li on-click content here; not sure if it will stay here;
    //     var $listItems = $("li");
    //     $listItems.on("click", function (e) {
    //         userGuess = e.target.textContent;
    //         console.log(userGuess);
    //         correctAnswer = gameQuestions[0].answer;
    //         // console.log(correctAnswer);
    //         if (userGuess == correctAnswer) {
    //             console.log("Correct!");
    //             counterCorrect++;
    //             stopTimer();
    //             nextQuestion();
    //         } else {
    //             console.log("Incorrect!!");
    //             counterIncorrect++;
    //             stopTimer();
    //             nextQuestion();
    //         }
    //         console.log("Correct: " + counterCorrect);
    //         console.log("Incorrect: " + counterIncorrect);
    //     })
    // }

    function nextQuestion() {
        timer = 10;
        startTimer();
        $("#question").text(gameQuestions[1].question);
        choiceDisplay = gameQuestions[1].choices;
        $("ul").remove("li");
        // OMG, this part is copied from that part that took FOREVER
        // surely there is an easier way to do this part...
        for (j = 0; j < choiceDisplay.length; j++) {
            var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").replaceWith($newLi);
            $("li").addClass("choices");
        }

        var $listItems = $("li");
        $listItems.on("click", function (e) {
            userGuess = e.target.textContent;
            if (userGuess == correctAnswer) {
                console.log("Correct!");
                counterCorrect++;
                stopTimer();
                nextQuestion3();
            } else {
                console.log("Incorrect!!");
                counterIncorrect++;
                stopTimer();
                nextQuestion3();
            }
            console.log("Correct: " + counterCorrect);
            console.log("Incorrect: " + counterIncorrect);
        })
    }

    function nextQuestion() {
        timer = 10;
        startTimer();
        $("#question").text(gameQuestions[2].question);
        choiceDisplay = gameQuestions[2].choices;
        // OMG, this part is copied from that part that took FOREVER
        // surely there is an easier way to do this part...
        for (j = 0; j < choiceDisplay.length; j++) {
            var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").replaceWith($newLi);
            $("li").addClass("choices");
        }

        var $listItems = $("li");
        $listItems.on("click", function (e) {
            userGuess = e.target.textContent;
            if (userGuess == correctAnswer) {
                console.log("Correct!");
                counterCorrect++;
                stopTimer();
                nextQuestion3();
            } else {
                console.log("Incorrect!!");
                counterIncorrect++;
                stopTimer();
                nextQuestion3();
            }
            console.log("Correct: " + counterCorrect);
            console.log("Incorrect: " + counterIncorrect);
        })
    }








    //onclick Start button-->sets off timer (then, ideally: start button disappears)
    $("#start-btn").on("click", function () {
        startTimer();
        $(this).hide(1000);
        questionDisplay();
    })

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