  // TODO: add the rest of the questions (now that it cycles through)
  // TODO: create a final-tally page
  // TODO: when timer reaches zero: alert & tally as "Unanswered"?
  // TODO: on user guess, display appropriate image/gif
  // TODO: polish up the whole front end (which was never really done) 

$(document).ready(function() {
  //g'bl va'bles
  var timer = 10;
  var timerFlag = false;
  var counterCorrect = 0;
  var counterIncorrect = 0;
  var questionCounter = 0;
  var questionList;

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

  // var i = gameQuestions[i];

  //start button starts the game (surprise!); also hides itself... magic!
  $("#start-btn").on("click", function() {
    $(this).hide(1000);
    displayQuestionOne();
  });

  //displayQuestion-->primary function
  function displayQuestionOne() {
    //First things first: Start the Timer & list Question & Choices
    startTimer();
    //declaring vars which access the question-storing object, then push Q's to div
    var gameQs = gameQuestions[0].question;
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    choiceDisplay = gameQuestions[0].choices;
    for (j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<li class='avp-q'>" + choiceDisplay[j] + "</li>");
      $("ul").append(newLi);
    }

    //Time to capture the user guess...
    //since these are dynamically-generated elements, ntb "document" on click, not the element itself
    //(or so I've read)
    $(document).on("click", ".avp-q", function(e) {
      //setting up a way to tell "right from wrong" (lol!)
      userGuess = e.target.textContent;
      correctAnswer = gameQuestions[0].answer;
      //console.log(userGuess);
      // console.log(correctAnswer);

      if (userGuess == correctAnswer) {
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay); 
        // var imageOne = $('<img src="assets/images/placeholder.gif">');
        // $("ul").append(imageOne);
        console.log("Correct!");
        counterCorrect++;
        questionCounter++;
        stopTimer();
      }
      if (userGuess != correctAnswer) {
        // var imageTwo = $('<img src="assets/images/alien.png">');
        // $("ul").append(imageTwo);
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay);
        console.log("Incorrect!!");
        counterIncorrect++;
        questionCounter++;
        stopTimer();
      }
    });
    console.log("Correct: " + counterCorrect);
    console.log("Incorrect: " + counterIncorrect);
    console.log("Questions answered: " + questionCounter);
  }

  //It's official, I'll need to list out more functions for more questions; it's not...
  //...going to work by looping through the answers
  //Same as the first Question, but the index of the question array!

  //Question Two
  function displayQuestionTwo() {
    var gameQs = gameQuestions[1].question;
    timer = 10;
    startTimer();
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    choiceDisplay = gameQuestions[1].choices;
    for (j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<li class='avp-q'>" + choiceDisplay[j] + "</li>");
      $("ul").append(newLi);
    }

    //Time to capture the user guess...
    //since these are dynamically-generated elements, ntb "document" on click, not the element itself
    //(or so I've read)
    $(document).on("click", ".avp-q", function(e) {
      //setting up a way to tell "right from wrong" (lol!)
      userGuess = e.target.textContent;
      correctAnswer = gameQuestions[1].answer;
      //console.log(userGuess);
      // console.log(correctAnswer);

      if (userGuess == correctAnswer) {
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionThree, timeDelay); 
        // var imageOne = $('<img src="assets/images/placeholder.gif">');
        // $("ul").append(imageOne);
        console.log("Correct!");
        counterCorrect++;
        questionCounter++;
        stopTimer();
      }
      if (userGuess != correctAnswer) {
        // var imageTwo = $('<img src="assets/images/alien.png">');
        // $("ul").append(imageTwo);
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionThree, timeDelay);
        console.log("Incorrect!!");
        counterIncorrect++;
        questionCounter++;
        stopTimer();
      }
    });
    console.log("Correct: " + counterCorrect);
    console.log("Incorrect: " + counterIncorrect);
    console.log("Questions answered: " + questionCounter);
  }
  //Question Three
  function displayQuestionThree() {
    var gameQs = gameQuestions[2].question;
    timer = 10;
    startTimer();
    $("#question-div").text(gameQs);

    //var for the choices listed out in the array (via for loop, natch)
    choiceDisplay = gameQuestions[2].choices;
    for (j = 0; j < choiceDisplay.length; j++) {
      //perhaps I should add another class to this li element to make it clearer where the next click ought to be?
      var newLi = $("<li class='avp-q'>" + choiceDisplay[j] + "</li>");
      $("ul").append(newLi);
    }

    //Time to capture the user guess...
    //since these are dynamically-generated elements, ntb "document" on click, not the element itself
    //(or so I've read)
    $(document).on("click", ".avp-q", function(e) {
      //setting up a way to tell "right from wrong" (lol!)
      userGuess = e.target.textContent;
      correctAnswer = gameQuestions[1].answer;
      //console.log(userGuess);
      // console.log(correctAnswer);

      if (userGuess == correctAnswer) {
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay); 
        // var imageOne = $('<img src="assets/images/placeholder.gif">');
        // $("ul").append(imageOne);
        console.log("Correct!");
        counterCorrect++;
        questionCounter++;
        stopTimer();
      }
      if (userGuess != correctAnswer) {
        // var imageTwo = $('<img src="assets/images/alien.png">');
        // $("ul").append(imageTwo);
        setTimeout(clearDiv, timeDelay);
        setTimeout(displayQuestionTwo, timeDelay);
        console.log("Incorrect!!");
        counterIncorrect++;
        questionCounter++;
        stopTimer();
      }
    });
    console.log("Correct: " + counterCorrect);
    console.log("Incorrect: " + counterIncorrect);
    console.log("Questions answered: " + questionCounter);
  }

  
  //Question Four
  //ETC

  //TIMERS----------------------
  //start Timer Function
  function startTimer() {
    if (!timerFlag) {
      timerInterval = setInterval(decrement, 1000);
    }
  }

  var timeDelay = 3000;
  function clearDiv(){
    $("ul").empty();
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
