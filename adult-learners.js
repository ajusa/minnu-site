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

        subQuestions.push(
           `<div class="pv3">
            <div class="sub-question"><span class="question-number">${questionCounter}</span> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            </div>`
        )

        questionCounter++;
        // add this question and its answers to the output
         
    
      });

    if(currentPage.audio) {
      output.push(
          `<div class="dn">
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
          `<div class="dn">
            <div class="f4"> ${currentPage.headquestion} </div>
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
  var root = document.getElementById("adult")
  const quizContainer = root.querySelector('#quiz');
  const resultsContainer = root.querySelector('#results');
  const submitButton = root.querySelector('#submit');
  const myQuestions = [
    {
      headquestion: "Choose the correct word or phrase in the sentences.",
      
        other: [
         {
      question: "My parents _____ in a two-bedroom apartment.",
      answers: {
        a: "Live",
        b: "Lives",
        c: "are live"
      },
      correctAnswer: "a"
    },
    {
      question: "Good morning. I tried to _____ you last night.",
      answers: {
        a: "Contacted",
        b: "Contacting",
        c: "Contact"
      },
      correctAnswer: "c"
    },
    {
      question: "There's ___ information to remember.",
      answers: {
        a: "Many",
        b: "a lot of",
        c: "much"
      },
      correctAnswer: "b"
    },
  {
      question: "I'm sorry. I didn't _____ to hurt you.",
      answers: {
        a: "mean",
        b: "meant",
        c: "think"
      },
      correctAnswer: "a"
    },
    {
      question: "I'll______ you where you can sleep.",
      answers: {
        a: "show",
        b: "watch",
        c: "see"
      },
      correctAnswer: "a"
    },


    ]
},
{
   headquestion: "Choose the word or phrase that has a similar meaning to?",
   other: 
   [
        {
  
      question: "Fall",
      answers: {
        a: "Rapid",
        b: "Drop",
        c: "Certain"
      },
      correctAnswer: "b"
    },
    {
      question: "Important",
      answers: {
        a: "Remarkable",
        b: "Necessary",
        c: "Accurate"
      },
      correctAnswer: "b"
    },
    {
      question: "Substantial",
      answers: {
        a: "Considerable",
        b: "Argumentative",
        c: "Worthless"
        
      },
      correctAnswer: "a"
    },
  {
      question: "Seize",
      answers: {
        a: "Start",
        b: "release",
        c: "grasp"
      },
      correctAnswer: "c"
    },
    {
      question: "Drastic ",
      answers: {
        a: "delicate",
        b: "extreme",
        c: "hard"
      },
      correctAnswer: "b"
    },

   ]
},
{
   headquestion: "Choose the correct word or phrase in the sentences.",
   other: 
   [
            {
      question: "Rachel was ___ for a few minutes.",
      answers: {
        a: "quite",
        b: "Quiet",
        c: "quit"
      },
      correctAnswer: "b"
    },
    {
      question: "Your perfume has a wonderful ___.",
      answers: {
        a: "sent",
        b: "quit",
        c: "scent"
      },
      correctAnswer: "c"
    },
    {
      question: "_______ phone was stolen in the class?",
      answers: {
        a: "whom",
        b: "whose",
        c: "who’s"
        
      },
      correctAnswer: "b"
    },
  {
      question: "Can we book a ____ in the hotel.",
      answers: {
        a: "suite",
        b: "sweet",
        c: "suit"
      },
      correctAnswer: "a"
    },
    {
      question: "My mother has _______.",
      answers: {
        a: "Long black hair",
        b: "Black long hair ",
        c: "Long hair black"
      },
      correctAnswer: "a"
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
   headquestion: "Choose the correct word or phrase in the sentences",
   other: 
   [
          {
      question: "I have ____ milk you can use.",
      answers: {
        a: "little",
        b: "a little",
        c: "very few"
      },
      correctAnswer: "b"
    },
    {
      question: "He sat on the bed, rubbing his forehead as she continued, I know she ___, but you did too.",
      answers: {
        a: "lied",
        b: "lies",
        c: "lying"
      },
      correctAnswer: "a"
    },
    {
      question: "I wonder if they will change ___ plans?",
      answers: {
        a: "they're",
        b: "there",
        c: "their"
      },
      correctAnswer: "c"
    },
  {
      question: "When I came to know I had dropped my purse, I decided to _____ my steps.",
      answers: {
        a: "return",
        b: "retrace",
        c: "go back"
      },
      correctAnswer: "b"
    },
    {
      question: "There's ____ much salt in the soup.",
      answers: {
        a: "too",
        b: "sot",
        c: "very"
      },
      correctAnswer: "a"
    },
    {
      question: "Passengers are requested to ___________ their seat belts.",
      answers: {
       a: "quit",
        b: "unfasten",
        c: "unchecked"
      },
      correctAnswer: "d"
    },
  {
      question: "Can you ____ the ginger for me?",
      answers: {
        a: "grate",
        b: "great",
        c: "greet"
      },
      correctAnswer: "a"
    },
    {
      question: "I haven't worked _____ last December.",
      answers: {
        a: "for",
        b: "by",
        c: "since"
      },
      correctAnswer: "c"
    }

    ]
},
{
   headquestion: "Listen to the audio and answer the following questions",
   audio: "adults1.mpg",
   other: 
   [
          {
      question: "Why does social media platforms collect users personal data?",
      answers: {
        a: "For research purpose only",
        b: "For your safety",
        c: "To show you ads"
      },
      correctAnswer: "c"
    },
    {
      question: "In what form do the companies store Individuals data?",
      answers: {
        a: "As a Digital card",
        b: "In physical form",
        c: "Lockers in Banks"
      },
      correctAnswer: "a"
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
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
