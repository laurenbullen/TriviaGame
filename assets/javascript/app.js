// In this trivia quiz, I want to display a list style multiple question quiz with a total of 10 questions.
// The quiz will have a timer of 1 minute for the quiz to be completed before the quiz is automatically submitted and the results are displayed.

// / Define the timer.
// // start time
  var number = 120;
    //  Variable that will hold our interval ID when we execute
    //  the "start" function
  var intervalId;
   //Setting up the start fuction that runs the decrement function once a second.
   function start() {
      intervalId = setInterval(decrement, 1000);
   }
    //calling the start function
     start();

    //  The decrement function so the timer ticks down.
    function decrement() {
      //  Decrease number by one.
        number--;
      //  Show the number in the #jshow-number tag in the html.
      $("#show-number").html("<h2>" + number + "</h2>");
      //  Once number hits zero,
        if (number === 0) {
            stop(window.location.href="indexEnd.html");
            }
     };
     //  The stop function
    function stop() {
      clearInterval(intervalId);
    }


// First I need to create my variables


const quizContainer = $("#quiz");
const submitButton = $("#submit");
const showResults = $("#results");

const myQuestions = [
    {
        question: "Which female character ran out on her wedding on the very first episode of the show?",
        answers: {
            a: "Monica" ,
            b: "Rachel" ,
            c: "Phoebe" ,
        },
        correctAnswer = "b"
    },
    {
        question: "What was the name of Ross' pet monkey?",
        answers: {
            a: "Marcel" ,
            b: "Harvey" ,
            c: "George" ,
        },
        correctAnswer = "a"
    },
    {
        question: "What smelly animal does Phoebe sing about at the Central Perk?",
        answers: {
            a: "Dog" ,
            b: "Elephant" ,
            c: "Cat" ,
        },
        correctAnswer = "c"
    },
    {
        question: "Which department store did Rachel work at during part of the show?",
        answers: {
            a: "Macy's" ,
            b: "Bloomingdale's" ,
            c: "Nordstrom" ,
        },
        correctAnswer = "b"
    },
    {
        question: "What is the name of Joey's agent?",
        answers: {
            a: "Stella" ,
            b: "Estelle" ,
            c: "Doris" ,
        },
        correctAnswer = "b"
    },
    {
        question: "What soap opera was Joey a guest star on?",
        answers: {
            a: "Days of Our Lives" ,
            b: "As the World Turns" ,
            c: "The Young and the Restless" ,
        },
        correctAnswer = "a"
    },
    {
        question: "In which city did Ross marry Emily?",
        answers: {
            a: "New York" ,
            b: "Paris" ,
            c: "London" ,
        },
        correctAnswer = "c"
    },
    {
        question: "What is Chandler's middle name?",
        answers: {
            a: "Marcel" ,
            b: "Muriel" ,
            c: "Michael" ,
        },
        correctAnswer = "b"
    },
    {
        question: "What are the names of Monica and Chandler's twins?",
        answers: {
            a: "Jack and Erika" ,
            b: "Joe and Emma" ,
            c: "Jack and Emma" ,
        },
        correctAnswer = "a"
    },
    {
        question: "In what city did Rachel marry Ross?",
        answers: {
            a: "New York" ,
            b: "Las Vegas" ,
            c: "Paris" ,
        },
        correctAnswer = "c"
    }

];

function buildQuiz(){
    // this is where the html will be stored
    const output = [];

    // For each question, we want to store the list of possible answers
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // want to store the answer choices for each question
        const answers = [];

        // for each answer choice we want to add an HTML radio button
        for(letter in currentQuestion.answers){
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : 
                ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        // add each question and answers to the output
        output.push(
            `<div class="question"> ${currentQuestion.question}</div>
            <div class="answers"> ${answers.join("")}</div>`
            
        );
    });
    // combine output list into string of HTML and put on page
    quizContainer.innerHTML = output.join("");
    
}
buildQuiz();


function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}
$("#submit").on("click", showResults);

// Something with the syntax in this JS is messing with all of the code so it is not working on the HTML. I console.log'ed several things to see if would would log something and still nothing.

