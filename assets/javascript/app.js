// jQuery Ready Function waits for the document to complete loading before initiating JavaScript

// When start game button is clicked...
// instructions for Hyde div....function would change the state of the div.


// You'll create a trivia form with multiple choice or true/false options (your choice).
// all question data will be stored in an array 
// each array element will be a question object 
// let questionIndexCount = 0;
// let correctAnswer = 0;
// let wrongAnswer = 0;
// function startGame() {
//   $("#intro").prepend(`<h1>Classis Rock Trivia Game</h1>`);
//   $('#hi').hide();
// }

// $('#hi').click(function () {
//   // console.log("hello");
//   startGame();
//   showQuestion();
// });

// function showQuestion() {
//   $('#gamePlay').empty();
//   run();
//   const choices = function (array) {
//     let choicesString = ``;
//     for (let i = 0; i < gameQuestions[questionIndexCount].choices.length; i++) {
//       choicesString += `<input type="radio" name="answer" class="choices" data-answer=${i}>${gameQuestions[questionIndexCount].choices[i]}<br>`;
//     }
//     return choicesString;
//   }
//   const questionHtml = `
//   <div>
//   <h3>${gameQuestions[questionIndexCount].question}</h3>
//   <div>
//   ${choices(gameQuestions[questionIndexCount].choices)}
//   </div>
//   </div>`;
//   $('#gamePlay').append(questionHtml);
//   $('body').css('background-image', `url(${gameQuestions[questionIndexCount].image})`);
//   $('.choices').click(function () {
//     const chosenAnswer = gameQuestions[questionIndexCount].choices[$(this).attr('data-answer')];
//     checkAnswer(chosenAnswer);
//   });
// }

// function checkAnswer(userAnswer) {
//   const realAnswer = gameQuestions[questionIndexCount].answer;
//   if (realAnswer === userAnswer) {
//     correctAnswer++;
//     console.log('you got it right');
//     console.log('right', correctAnswer);
//     questionIndexCount++;
//     gameOver();
//     setTimeout(showQuestion, 5000);
    
//     //You got it right
//   }
//   else {
//     wrongAnswer++;
//     questionIndexCount++;
//     console.log('wrong', wrongAnswer);
//     gameOver();
//     setTimeout(showQuestion, 5000);
//     //you got it wrong
//   }
// };
// function gameOver() {
//   if (questionIndexCount === gameQuestions.length) {
//     console.log('Game Over');
//     questionIndexCount = 0;
//     correctAnswer = 0;
//     wrongAnswer = 0;
//     showQuestion();
//   }
// };


// //write a function that moves from question to question DONE

// //write a function that checks the answers DONE

// //write a function that creates a 20 second countdown
// var seconds = 20;
// var timerRun;
// function run() {
//   timerRun = setInterval(decrement, 1000);
// }

// function decrement() {
//   seconds--;
//   $("#show-seconds").html("<h2>" + seconds + "</h2>");
//   if (seconds === 0) {
//     stop();
//     alert("Another one bites the dust!");
//     checkAnswer();
//     seconds = 20;
//   }
// }

// function stop() {
//   clearInterval(timerRun);

// }
// //write a function that checks whether we are done / if done resets the game



// var gameQuestions = [

//   {
//     question: "Of Pink Flloyds four mot popular albums, whichone came out first?",
//     choices: ["Wish You Were Here", "Dark Side of the Moon", "Animals", "The Wall"],
//     answer: "Dark Side of the Moon",
//     image: "assets/images/1darkside.jpeg"
//   },

//   {
//     question: "When Jimi Hendrix moved to England, which guitarist took him in and watched as he became famous within a week?",
//     choices: ["Eric Calpton", "Paul McCartney", "Jimmy Paige", "Peter Frampton"],
//     answer: "Eric Clapton",
//     image: "assets/images/2ericclapton.jpeg"
//   },

//   {
//     question: "Which band's guitarist was known for the windmill style stroking of the guitar?",
//     choices: ["Creedence Clearwater Revival(CCR)", "The Doors", "Led Zeppelin", "The Who"],
//     answer: "The Who",
//     image: "assets/images/3thewho.jpeg"
//   },

//   {
//     question: "Which bands singer was '..born a ramblin man'?",
//     choices: ["Lynrd Skynrd", "The Allman Brothers", "The Doobie Borthers", "Bog Seger and the Silver Bullet Band"],
//     answer: "The Allman Brothers",
//     image: "assets/images/4allmanbro.jpeg"
//   },

//   {
//     question: "Which was a member of the traveling Wilburys?",
//     choices: ["Dennis Bryon", "Colin Peterson", "Barry Gibb", "George Harrison"],
//     answer: "George Harrison",
//     image: "assets/images/5george.jpeg"
//   },

//   {
//     question: "Which band has the single most sold album of all time?",
//     choices: ["The Eagles", "Pink Flyod", "Michael Jackson", "The Beatles"],
//     answer: "The Eagles",
//     image: "assets/images/6eagles.jpeg"
//   },

//   {
//     question: "Which Beatle song was never a number one hit?",
//     choices: ["Ticket to Ride", "Hell, Goodbye", "I am the Walrus"],
//     answer: "I am the Walrus",
//     image: "assets/images/7walrus.jpeg"
//   },

//   {
//     question: 'Which guitarist asked "Are you Experienced?"',
//     choices: ["Stevie Ray Vaughn", "Bob Dylan", "Jimi Hendrix", "Santana"],
//     answer: "Jimi Hendrix",
//     image: "assets/images/8jimi.jpeg"
//   },

//   {
//     question: 'Which band had the greatest hits album called "1- from 6"?',
//     choices: ["Boston", "Journey", "Bad Company", "Cheap Trick"],
//     answer: "Bad Company",
//     image: "assets/images/9badcompany.jpeg"
//   },

//   {
//     question: 'Which band hits include "The Big Money", "Red Sector A", "Show Dont Tell" and "2112 Overture"?',
//     choices: ["The Eagles", "The Rolling Stones", "Rush", "Fleetwood Mac"],
//     answer: "Rush",
//     image: "assets/images/10rush.jpeg"

//   }];



// // creating elements array and using jquery to append to page  
// // loop through array of questions and storing 1 element in a global variable
// // selected question would than be selected.question.question will update html to have the selected question in IDBTransaction.
// var score = 0;

// // for (var i = 0; i < gameQuestions.length; i++) {
// //   var questionsdiv = document.createElement("div");
// //   questionsdiv.innerHTML = gameQuestions[i];
// //   gameQuestions.appendChild(questionsdiv);
// // };


// // timer 
// // literating through the array using the above, 
// // create view of 1st question 
// // then go to next question 
// // make a function with a parm of the question 
// // create a function that moves to the next question
// // var image = $("<img>").attr("src", imgURL);
// // Appends the image
// // movieDiv.append(image);



//   // create functions for any event that happens more than once.
//   //using jquery to append all of the questions(container) to the game page
// // next question function that when calls goes to the next question 
// // The player will have a limited amount of time to finish the quiz. 
// // create timer
// // interval - class activities 04timer
// // end game


// // The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
// // grabbing users correct input and output to screen
// // write a function for above that checks using jquery for the class 


// // Don't let the player pick more than one answer per question.
// // Don't forget to include a countdown timer.
// Question object
var question = {

  q1: ["What is the only manmade object that is observable from the moon?", "Me", "The Sun", "The Great Wall", "The not so great wall", 3],

  q2: ["What is the capital of Australia?", "Melbourne", "Sydney", "Cairns", "Canberra", 4],

  q3: ["Name the world's biggest Island", "Hawaii", "Japan", "Greenland", "Philippines", 3],

  q4: ["Who Invented the rabies vaccination?", "Louis Pasteur", "Marie Curie", "Albert Einstein", "Nikola Tesla", 1],

  q5: ["Which artist painted a mustache and goatee on the Mona Lisa?", "Monet", "Manet", "Cordon", "Duchamp", 4],

  q6: ["Give the alternative name for a Mountain Ash tree", "Jabuticaba", "Rowan", "Dragon Blood Tree", "Angel Oak", 2],

  q7: ["Name the country where you would find the Cresta Run", "Switzerland", "India", "Denmark", "Spain", 1],

  q8: ["What is someone who shoes horses called?", "Aptycock", "Clomph", "Farrier", "Hansper", 3],

  q9: ["What is a group of owls called?", "A hoot", "A parliament", "A seer", "A flock", 2],

  q10: ["Which U.S. president made the first presidential radio broadcast?", "Warren G. Harding", "FDR", "Calvin Coolidge", "Herbert Hoover", 3]

}

// Question array
var questionArray = [question.q1, question.q2, question.q3, question.q4, question.q5, question.q6, question.q7, question.q8, question.q9, question.q10];

// Global Variables
var questionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;


// Jquery to populate questions
function next() {
  if (questionIndex <= questionArray.length - 1) {
      seconds = 15;
      start();

      $(".trivia").empty();

      // Print Questions to html
      var newDiv = $("<div>");
      newDiv.text(questionArray[questionIndex][0]);
      newDiv.attr("class", "question");
      $(".trivia").append(newDiv);

      // Print choices to html
      for (var i = 1; i < 5; i++) {
          var newDiv = $("<div>");
          newDiv.text(questionArray[questionIndex][i]);
          newDiv.attr("class", "answer");
          newDiv.attr("value", i);
          $(".trivia").append(newDiv);
      }
      // Reset Timer text
      $("#timer").text("Time Remaining: 15 Seconds");
      $("#timer").css("color", "forestgreen");
  }
}

// Correct answer shown screen
function segueHappy() {

  var segueIndex = questionArray[questionIndex][5];

  $(".trivia").empty();
  $(".trivia").html("Good Job! The correct answer was: <strong>" + questionArray[questionIndex][segueIndex] + "</strong>");

  questionIndex++;

  // Get next question or if no more questions show stats
  if (questionIndex <= questionArray.length - 1) {
      setTimeout(next, 3000);
  } else {
      setTimeout(statScreen, 3000);
  }
}

// Correct answer shown screen
function segueSad() {

  var segueIndex = questionArray[questionIndex][5];

  $(".trivia").empty();
  $(".trivia").html("So close! The correct answer was: <strong>" + questionArray[questionIndex][segueIndex] + "</strong>");

  questionIndex++;

  // Get next question or if no more questions show stats
  if (questionIndex <= questionArray.length - 1) {
      setTimeout(next, 3000);
  } else {
      setTimeout(statScreen, 3000);
  }
}

// Correct answer shown screen
function segueTimeOut() {

  var segueIndex = questionArray[questionIndex][5];

  $(".trivia").empty();
  $(".trivia").html("Time's Up! The correct answer was: <strong>" + questionArray[questionIndex][segueIndex] + "</strong>");

  questionIndex++;

  // Get next question or if no more questions show stats
  if (questionIndex <= questionArray.length - 1) {
      setTimeout(next, 3000);
  } else {
      setTimeout(statScreen, 3000);
  }
}

function statScreen() {
  // Erase screen and display stats
  $(".trivia").empty();
  $(".trivia").append("<div class='stats'>Correct Answers: " + correctAnswers + "</div.");
  $(".trivia").append("<div class='stats'>Incorrect Answers: " + incorrectAnswers + "</div.");

  // Populate reset button
  $(".trivia").append("<button type='button' class='btn btn-danger'>Reset</button>");
}

next();

$(document).ready(function () {

  // Answer clicks
  $(".trivia").on("click", ".answer", function () {
      var val = parseInt($(this).attr("value"));
      if (val === questionArray[questionIndex][5]) {
          correctAnswers++;
          segueHappy();
      } else {
          incorrectAnswers++;
          segueSad();
      }
      clearInterval(timer);
  })

  // Reset quiz
  $(".trivia").on("click", ".btn", function () {
      correctAnswers = 0;
      incorrectAnswers = 0;
      questionIndex = 0;

      next();
  })

})


// Timer Code
var seconds = 15;
var timer;

function start() {
  timer = setInterval(countDown, 1000);
}

function countDown() {
  seconds--;
  $("#timer").text("Time Remaining: " + seconds + " Seconds");
  if (seconds > 5) {
      $("#timer").css("color", "forestgreen");
  } else {
      $("#timer").css("color", "crimson");
  }
  if (seconds === 0) {
      incorrectAnswers++;
      stop();
      segueTimeOut();
  }
}

function stop() {
  clearInterval(timer);
}