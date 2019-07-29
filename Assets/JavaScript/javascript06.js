// TODO: create a final-tally page
// TODO: add the rest of the questions (now that it cycles through)
// TODO: when timer reaches zero: alert & tally as "Unanswered"? !! need move this "if" statement into where the question displays (& out of the click)
// TODO: polish up the whole front end (which was never really done)
// TODO: reset/restart game within display/without refreshing

$(document).ready(function() {
  //g'bl va'bles
  var countDown = 5;
  var intervalId;
  var counterCorrect = 0;
  var counterIncorrect = 0;
  var questionCounter = 0;
  var timesUpCounter = 0;

  //array to store all the questions/answers... no peeking!
  var gameQuestions = [
    {
      question: "How did the idea for the AvP universe start?",
      choices: [
        "Ridley Scott had a dream of Aliens fighting Predators",
        "Alien skull shown the background of Predator 2",
        "Predator skull in the background of Alien 3",
        "Alien vs Predator comic book series"
      ],
      answer: "Alien vs Predator comic book series"
      //gif link?
    },

    {
      question: "Which word was never said in the AvP movie?",
      choices: ["Bishop", "Predator", "Pyramid", "Hunter"],
      answer: "Predator"
      //gif link?
    },
    {
      question: "In order to save money, where was AvP filmed?",
      choices: ["Vancouver", "Baton Rouge", "Mumbai", "Prague"],
      answer: "Prague"
      //gif link
    },
    {
      question: "This is the first movie to depict a Predator as...",
      choices: [
        "Anatomically correct",
        "Having mandibles",
        "Left handed",
        "human skulls as trophies"
      ],
      answer: "Left handed"
      //gif link
    }
  ];

  //start button starts the game (surprise!); also hides itself... magic!
  $("#start-btn").on("click", function() {
    $(this).hide(500);
    $("#timer").text(countDown);
    displayQuestionOne();
  });

  //displayQuestion-->primary function==================================================
  function displayQuestionOne() {
    //First things first: Start the Timer & list Question & Choices
    startTimer();
   
    //declaring vars which access the question-storing object, then push Q's to div
    var gameQs = gameQuestions[0].question;
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    var choiceDisplay = gameQuestions[0].choices;
    for (var j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<btn class='avp-q my-1'>" + choiceDisplay[j] + "</btn>");
      $("ul").append(newLi);
    }

    

    // Time to capture the user guess...
    // since these are dynamically-generated elements, ntb "document" on click, not the element itself
    // (or so I've read)
    $(document).on("click", ".avp-q", function(e) {
      //setting up a way to tell "right from wrong" (lol!)
      e.preventDefault();
      var userGuess = e.target.textContent;
      var correctAnswer = gameQuestions[0].answer;

      if (userGuess === correctAnswer) {
        correctNotification();
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay);
        counterCorrect++;
        questionCounter++;
        stopTimer();
      }
      if (userGuess !== correctAnswer) {
        incorrectNotification();
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay);
        console.log("Incorrect!!");
        counterIncorrect++;
        questionCounter++;
        stopTimer();
      }
      
    });
    if (countDown == 1) {
      timeUpNotification();
      setTimeout(clearDiv, timeDelay);
      setTimeout(displayQuestionTwo, timeDelay);
      questionCounter++;
      timesUpCounter++;
    }
  }

  // It's official, I'll need to list out more functions for more questions; it's not...
  // ...going to work by looping through the answers
  // Same as the first Question, but the index of the question array!

  // Question Two=============================================
  function displayQuestionTwo() {
    var gameQs = gameQuestions[1].question;
    reset();
    startTimer();
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    let choiceDisplay = gameQuestions[1].choices;
    for (let j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<btn class='avp-q'>" + choiceDisplay[j] + "</btn>");
      $("ul").append(newLi);
    }

    if (countDown === 0) {
      timeUpNotification();
      setTimeout(clearDiv, timeDelay);
      setTimeout(displayQuestionThree, timeDelay);
      questionCounter++;
      timesUpCounter++;
    }

    $(document).on("click", ".avp-q", function(e) {
      e.preventDefault();
      var userGuess = e.target.textContent;
      var correctAnswer = gameQuestions[1].answer;

      if (userGuess === correctAnswer) {
        correctNotification();
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionThree, timeDelay);
        counterCorrect++;
        questionCounter++;
        stopTimer();
      }
      if (userGuess != correctAnswer) {
        incorrectNotification();
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionThree, timeDelay);
        counterIncorrect++;
        questionCounter++;
        stopTimer();
      }
    });
  }

  //Question Three ============================================================
  function displayQuestionThree() {
    var gameQs = gameQuestions[2].question;
    reset();
    startTimer();
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    var choiceDisplay = gameQuestions[2].choices;
    for (var j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<btn class='avp-q'>" + choiceDisplay[j] + "</btn>");
      $("ul").append(newLi);
    }

    if (countDown === 0) {
      timeUpNotification();
      setTimeout(clearDiv, timeDelay);
      setTimeout(tallyDisplay, timeDelay);
      questionCounter++;
      timesUpCounter++;
    }

    //Time to capture the user guess...
    //since these are dynamically-generated elements, ntb "document" on click, not the element itself
    //(or so I've read)
    $(document).on("click", ".avp-q", function(e) {
      e.preventDefault();
      //setting up a way to tell "right from wrong" (lol!)
      var userGuess = e.target.textContent;
      var correctAnswer = gameQuestions[2].answer;
      //console.log(userGuess);
      // console.log(correctAnswer);

      if (userGuess === correctAnswer) {
        setTimeout(clearDiv, timeDelay);
        correctNotification();
        console.log("Correct!");
        counterCorrect++;
        questionCounter++;
        stopTimer();
        if (questionCounter === 3) {
          tallyDisplay();
        }
      } else if (userGuess !== correctAnswer) {
        incorrectNotification();
        setTimeout(clearDiv, timeDelay);
        // setTimeout(displayQuestionTwo, timeDelay);
        counterIncorrect++;
        questionCounter++;
        stopTimer();
        if (questionCounter === 3) {
          tallyDisplay();
        }
      }
    });
  }

  //Question Four
  //ETC

  // Final Tally Page===============================
  function tallyDisplay() {
    $("#primary-display").empty();
    var tallyDiv = $("<div class='text-light'>");
    // var displayCorrect = $(counterCorrect);
    // var displayIncorrect = $(counterIncorrect);
    // var timedOut = $(timesUpCounter);
    $(tallyDiv).append(
      counterCorrect + " " + counterIncorrect + " " + timesUpCounter
    );
    $("#primary-display").append(tallyDiv);
    console.log("Quiz Results Page!");
  }

  // Correct/Incorrect Notifications================
  function correctNotification() {
    clearDiv();
    var imageCorrect = $('<img src="./Assets/Images/predator.png">');
    $("ul").append(imageCorrect);
  }

  function incorrectNotification() {
    clearDiv();
    var imageIncorrect = $('<img src="./Assets/Images/alien.png">');
    $("ul").append(imageIncorrect);
  }

  function timeUpNotification() {
    clearDiv();
    var imageTimeUp = $(
      '<h2 class="light">TIMES UP!</h2><img src="./Assets/Images/facehugged.gif">'
    );
    $("ul").append(imageTimeUp);
  }

  // TIMERS=========================================
  // Start Timer Function
  function startTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  //make the numbers go downnnnnnn
  function decrement() {
    countDown--;
    $("#timer").text(countDown);
    if (countDown === 0){
      stopTimer();
    }
  }

  //make the numbers STOP
  function stopTimer() {
    clearInterval(intervalId);
  }

  function reset() {
    stopTimer();
    countDown = 10;
    $("#timer").text(countDown);
  }

  // Two Helpers: a Time Delay & a Div-clearer
  var timeDelay = 1500;
  function clearDiv() {
    $("ul").empty();
  }
});
