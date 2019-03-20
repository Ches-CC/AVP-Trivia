// alert("page is connected!")

//per the class activities on Tues night--check your jquery appends, etc (might be listing some of them wrong)
//no need for $(asdfsd) on some of them? can just go blah.append(blah)
// also, don't forget to UPDATE THE STATE (at end of If/Else?)
//check out "data-xyz"-->user-defined attribute


//lets let the page loadup before we get started
$(document).ready(function () {
    // global variable: timer; starting low for testing; will bind to on-click below
    var timer = 10;
    var timerFlag = false;
    var counterCorrect = 0;
    var counterIncorrect = 0;
    var questionList = [];


    // going to first try objects within an array
    var gameQuestions = [
        {
            question: "What is your favorite question?",
            choices: ["What is your favorite color?", "What is the capitol of Lucidia?", "What is the velocity of a coconut-bound swallow?", "Another funny answer!"],
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

    var questionList;

    $("#start-btn").on("click", function () {
        $(this).hide(1000);
        gameLoop();
    })
    

    function gameLoop() {
        startTimer();

        displayFirstQ(0);
        

        // for (x = 1; x < 3; x++) {
            // var $listItems = $("li");
            // //this is all IFFY
            // $listItems.on("click", function () {
            
        $("li").on("click", function(){
            displayOtherQ(1);
        });

        $("li").on("click", function(){
            displayOtherQ(2);
        });

        $("li").on("click", function(){
            displayOtherQ(3);
        });
        
        
        // }

    }

    

    // FIRST QUESTION
    function displayFirstQ(questionNumber) {
        // var $questDiv = ("#");
        $("#question-div").text(gameQuestions[questionNumber].question);
        console.log(gameQuestions[questionNumber].question);
        choiceDisplay = gameQuestions[questionNumber].choices;
        for (j = 0; j < choiceDisplay.length; j++) {
            var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").append($newLi);
            // $("li").addClass("choices");
            // $("li").text(choiceDisplay);
            

            var $listItems = $("li");
            $listItems.on("click", function (e) {
                // event.preventDefault();
                userGuess = e.target.textContent;
                console.log(userGuess);
                correctAnswer = gameQuestions[questionNumber].answer;
                // console.log(correctAnswer);

                if (userGuess == correctAnswer) {
                    $("ul").empty();
                    var imageOne = $('<img src="./Assets/Images/placeholder.gif">'); 
                    $("ul").append(imageOne);
                    console.log("Correct!");
                    counterCorrect++;
                    // nextQuestion();
                    stopTimer();
                    inbetweenTimer;


                } else {
                    $("ul").append(imageOne);
                    $("ul").empty();

                    console.log("Incorrect!!");
                    counterIncorrect++;
                    stopTimer();
                    inbetweenTimer;
                    // nextQuestion();
                }

                console.log("Correct: " + counterCorrect);
                console.log("Incorrect: " + counterIncorrect);
            })
        }    
    }


    //2nd ++ QUESTIONS
    function displayOtherQ(continuedQuestions){
        timer = 10;
        stopTimer();
        startTimer();
        var questionList = gameQuestions[continuedQuestions];
        var $listItems = $("li");
        var theQuestion = questionList.question;
        choiceDisplay = gameQuestions[continuedQuestions].choices;

        $("#question-div").text(theQuestion);
        // console.log(gameQuestions[continuedQuestions].question);
        $("li").remove();
        for (j = 0; j < choiceDisplay.length; j++) {
            var $newLi = $("<li>" + choiceDisplay[j] + "</li>");
            $("ul").append($newLi);
        }

        $listItems.on("click", function (e) {
            event.preventDefault();
            userGuess = e.target.textContent;
          
            
            correctAnswer = questionList.answer;
            // console.log(correctAnswer);
            if (userGuess == correctAnswer) {
                console.log("Correct!");
                counterCorrect++;
                stopTimer();
                inbetweenTimer;
                
                // nextQuestion();
            } else {
                console.log("Incorrect!!");
                counterIncorrect++;
                stopTimer();
                inbetweenTimer;
                // nextQuestion();
            }
            console.log("Correct: " + counterCorrect);
            console.log("Incorrect: " + counterIncorrect);
        })    
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

    var inbetweenTimer = setTimeout(nextQ, 5000);

    function nextQ(){
        console.log("It's working?");
        $("ul").empty();
    }

});