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
            `<label>
              <input type="radio" name="question${questionCounter}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        subQuestions.push(
            `
            <div>
            <div class="sub-question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            </div>`
        )

        questionCounter++;
        // add this question and its answers to the output
         
    
      });

    if(currentPage.audio) {
      output.push(
          `<div class="slide">
            <div class="question"> ${currentPage.headquestion} </div>
            <audio controls>
              <source src="./asset/${currentPage.audio}" type="audio/ogg">
            </audio>
            <div class="sub-questions"> ${subQuestions.join("")} </div>
          </div>`
        );
    }
else {
  output.push(
          `<div class="slide">
            <div class="question"> ${currentPage.headquestion} </div>
            <div class="sub-questions"> ${subQuestions.join("")} </div>
          </div>`
        );
}

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
          console.log(answerContainer)
          const selector = `input[name=question${qNumber}]:checked`;
          console.log(selector)

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
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
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
  var root = document.getElementById("young")
  const quizContainer = root.querySelector('#quiz');
  const resultsContainer = root.querySelector('#results');
  const submitButton = root.querySelector('#submit');
  const myQuestions = [
    {
      headquestion: "Please choose the best word to complete the sentence.",
      
        other: [
        {
            question: "He comes __ a car.",
            answers: {
            a: "at",
            b: "by",
            c: "with"
              },
              correctAnswer: "b"
        },
        {
            question: "I shall meet you __ 6 o'clock.",
            answers: {
                a: "at",
                b: "on",
                c: "in"
              },
              correctAnswer: "a"
        },
        {
            question: "We ____ going to a party tonight.",
            answers: {
                a: "have",
                b: "were",
                c: "are"
            },

              correctAnswer: "c"
        },
         {
              question: "She wants to become ___ engineer.",
              answers: {
                a: "an",
                b: "a",
                c: "the"
              },
              correctAnswer: "a"
        }

    ]
},
{
   headquestion: "Choose the right answers for the questions",
   other: 
   [
        {
          question: "When will you come in the bedroom?",
          answers: {
            a: "Watch",
            b: "Not long",
            c: "At 6 o'clock"
          },
          correctAnswer: "c"
        },
         {
              question: "Can we go out for a Pizza tonight?",
              answers: {
                a: "Not long",
                b: "No, I'm busy",
                c: "You did a brilliant job"
              },
              correctAnswer: "b"
        },
         {
              question: "How long are you here for?",
              answers: {
                a: "Till tomorrow",
                b: "Since 5 days",
                c: "2 days ago"
              },
              correctAnswer: "a"
        },
         {
              question: "Do you want some butter in your bread?",
              answers: {
                a: "Yes, I want it",
                b: "Sorry he's not here",
                c: "Not long"
              },
              correctAnswer: "a"
        }

   ]

},
{
   headquestion: "Choose the Opposite of the following words",
   other: 
   [
        {
            question: "Pretty",
            answers: {
              a: "Ugly",
              b: "Fine",
              c: "Unimpressive"
           },
            correctAnswer: "a"
        },
        {
            question: "Dead",
      answers: {
        a: "Open",
        b: "Alive",
        c: "Accurate"
      },
      correctAnswer: "b"

    },
    {
        question: "Close",
      answers: {
        a: "Broke",
        b: "Open",
        c: "Unlimited"
      },
      correctAnswer: "b"

  },
  {
    question: "Fast",
      answers: {
        a: "Costly",
        b: "Slow",
        c: "Cheap"
      },
      correctAnswer: "b"

    }
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
   headquestion: "Listen to the audio and answer the following questions",
   audio: "young1.m4a",
   other: 
   [
         {
      question: "How long can Snails sleep in one go?",
      answers: {
        a: "3 months",
        b: "3 years",
        c: "30 days"
      },
      correctAnswer: "b"
    },

          {
      question: "Why do Cats make meow sound?",
      answers: {
        a: "To talk to other cats",
        b: "To show when they are hungry",
        c: "To get the attention from Humans"
      },
      correctAnswer: "c"
    },
 {
      question: "What's is the female gender of peacock?",
      answers: {
        a: "Hen",
        b: "Peahen",
        c: "Chicken"
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
  const slides = root.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
