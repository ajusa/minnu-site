(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

let questionCounter = 1;
myQuestions.forEach((currentPage, pageNumber) => {

    const subQuestions = [];
    currentPage.other.forEach((currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];
        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label class="db pv1">
              <input type="radio" name="question${questionCounter}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        if(currentQuestion.audio) {
              subQuestions.push(
               `<div class="pv3">
                <div class="sub-question">
                <span class="question-number">${questionCounter}</span> ${currentQuestion.question} </div>
                <audio controls controlsList="nodownload">
                  <source src="./asset/${currentQuestion.audio}" type="audio/ogg" >
                </audio>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            )
        }
        else if(currentQuestion.picture){
              subQuestions.push(
               `<div class="pv3">
                <div class="sub-question"><span class="question-number">${questionCounter}</span> ${currentQuestion.question} </div>
                <img class="picture" src="./images/${currentQuestion.picture}"></img>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            )
        }
        else {
              subQuestions.push(
               `<div class="pv3">
                <div class="sub-question"> <span class="question-number">${questionCounter}</span> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            )
        }
        

        questionCounter++;
        // add this question and its answers to the output
         
    
      });

  output.push(
          `<div class="dn">
            <div class="f4"> ${currentPage.headquestion} </div>
            <div class="sub-questions"> ${subQuestions.join("")} </div>
          </div>`
        );
});

    // for each question...
    

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;
    let qNumber = 1
    // for each question...
    myQuestions.forEach((currentPage, pageNumber) => {

    currentPage.other.forEach((currentQuestion, questionNumber) => {

      // find selected answer
          const answerContainer = answerContainers[qNumber-1];
          
          const selector = `input[name=question${qNumber}]:checked`;
          

          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
          }

          qNumber++;
        });
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${qNumber-1}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.add('dn');
    slides[n].classList.remove('dn');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  var root = document.getElementById("kid")
  const quizContainer = root.querySelector('#quiz');
  const resultsContainer = root.querySelector('#results');
  const submitButton = root.querySelector('#submit');
  const myQuestions = [
    {
      headquestion: "Look at each picture and choose the best answer.",
      
        other: [
          {
      question: "Which colour is this?",
      picture: "GreenApple.jpg",
      answers: {
        a: "Red",
        b: "Green",
        c: "Blue"
      },
      correctAnswer: "b"
    },
    {
      question: "Which fruit is this?",
      picture: "Watermelon.jpg",
      answers: {
        a: "Muskmelon",
        b: "Watermelon",
        c: "Mango"
      },
      correctAnswer: "b"
    },
    {
      question: "Which animal is this?",
      picture: "Bear.jpg",
      answers: {
        a: "Bear",
        b: "Lion",
        c: "Tortoise"
      },
      correctAnswer: "a"
    },
     {
      question: "Which vegetable is this?",
      picture: "Brinjal.jpg",
      answers: {
        a: "Pumpkin",
        b: "Brinjal",
        c: "Cucumber"
      },
      correctAnswer: "b"
    },
    ]
},
{
   headquestion: "Look at each picture and choose the best answer.",
   other: 
   [
         {
      question: "Which body part is this?",
      picture: "nose.jpg",
      answers: {
        a: "Ears",
        b: "Nose",
        c: "Thumb"
      },
      correctAnswer: "b"
    },
    {
      question: "What time of the day it is?",
      picture: "nightTime.jpg",
      answers: {
        a: "Day",
        b: "Night",
        c: "Morning"
      },
      correctAnswer: "b"
    },
  {
      question: "Which picture shows the peom 'twinkle twinkle little star'?",
    
      answers: {
        a: "Jungle.jpg",
        b: "Family.png",
        c: "TwinkleLittleStar.jpg"
      },
      correctAnswer: "c"
    },
   ]
},
{
   headquestion: "Choose the best word for each sentence.",
   other: 
   [
            {
      question: "How are ___?",
      answers: {
        a: "you",
        b: "I",
        c: "me"
      },
      correctAnswer: "a"
    },
    {
      question: "I ____ going to the school.",
      answers: {
        a: "am",
        b: "are",
        c: "you"
      },
      correctAnswer: "a"
    },
  {
      question: "My name ___ Rohan?",
      answers: {
        a: "are",
        b: "at",
        c: "is"
      },
      correctAnswer: "c"
    },
    {
      question: "I ____ to play basketball.",
      answers: {
        a: "like",
        b: "should",
        c: "see"
      },
      correctAnswer: "a"
    },

   ]

},
{
   headquestion: "Choose the best word to complete the sentence",
   other: 
   [
        {
            question: "I have ____ milk you can use.",
            answers: {
        a: "a little",
        b: "little",
        c: "few"
      },
      correctAnswer: "a"

        },
        {
      question: "Why ________ playing football tomorrow?",
      answers: {
        a: "isn't he",
        b: "he isn't",
        c: "he not is"
      },
      correctAnswer: "a"
    },

     {
      question: "My parents _____ in a two-bedroom apartment.",
      answers: {
        a: "live",
        b: "lives",
        c: "are live"
      },
      correctAnswer: "a"
    },
   {
      question: "Shweta has ___ the journey already.",
      answers: {
        a: "started",
        b: "starter",
        c: "start"
      },
      correctAnswer: "a"
    },
      {
      question: "I wonder if they will change ___ plans.",
      answers: {
        a: "they're",
        b: "there",
        c: "their"
      },
      correctAnswer: "c"
    }
   ]
},
{
   headquestion: " Listen to the audio and answer the following questions ",
   other: 
   [
           {
      question: "Which fruit does Micky Like?",
      audio: "question-12-kids.m4a",
      answers: {
        a: "Apple",
        b: "Orange",
        c: "Mango"
      },
      correctAnswer: "a"
    },
  {
      question: "What is Aditi eating right now?",
      audio: "question-13-kids.m4a",
      answers: {
        a: "Sandwich",
        b: "Chocolate",
        c: "Icecream"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the time of your English class?",
      audio: "question-14-kids.m4a",
      answers: {
        a: "9:00 AM",
        b: "9:30 AM",
        c: "10:00 AM"
      },
      correctAnswer: "b"
    },
    {
      question: "Where is Shinchan?",
      audio: "question-15-kids.m4a",
      answers: {
        a: "Bathroom",
        b: "Garden",
        c: "Bedroom"
      },
      correctAnswer: "b"
    }

    ]
  }
    
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = root.querySelector("#previous");
  const nextButton = root.querySelector("#next");
  const slides = root.querySelectorAll(".dn");
  const detailSubmitButton = root.querySelector('#submit-details');
  const thanksSection = root.querySelector(".thanks-submission");
  const form = root.querySelector("form");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

  // Event listeners
  detailSubmitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

    var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("modal-close")[0];
submitButton.onclick = function() {
  modal.style.display = "block";
}

detailSubmitButton.onclick = function() {
  event.preventDefault();
  thanksSection.style.display = "block";
  form.style.display = "none";

}
span.onclick = function() {
  modal.style.display = "none";
  window.location.reload();
}
})();
