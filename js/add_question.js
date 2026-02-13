const textfieldQuestion = document.querySelector('[ data-js="textfield-question"]');
const textfieldAnswer = document.querySelector('[data-js="textfield-answer"]');
const addQuestionForm = document.querySelector('[data-js="add-question__form"]');

const buttonSubmit = addQuestionForm.querySelector('[data-js="button-submit"]');

textfieldQuestion.addEventListener("input", (event) => {
   const inputSection = event.target.closest('[data-js="add-question__input-section"]');
   const remainingCharacters = inputSection.querySelector('[data-js="textfield-remaining-characters"]');

   remainingCharacters.textContent = event.target.maxLength - event.target.textLength;
});

addQuestionForm.addEventListener("submit", (event) => {
   event.preventDefault();

   const customQuestion = event.target.elements.customQuestion;
   const customAnswer = event.target.elements.customAnswer;
   const customTag = event.target.elements.customTag;

   createQuizCard(customQuestion, customAnswer, customTag);
});

function createQuizCard(question, answer, tag) {
   // <-- create element -->
   // <--------------------------------------------------------------------------------------------
   const newQuizCard = document.createElement("section");
   newQuizCard.innerHTML = `       
        <section class="quizcard__card" data-js="quizcard__card">
            <p class="quizcard__question" data-js="question-paragraph">custom question</p>
            <div class="quizcard__answer-field is-collapsed" data-js="answer-field">
               <p class="quizcard__answer-text is-faded" data-js="answer-paragraph">
                    custom answer
               </p>
            </div>
            <button aria-label="button show answer" class="quizcard__show-answer" data-js="quizcard__show-answer">
               Show Answer
            </button>
            <ul class="quizcard__tag-list">
               <li class="quizcard__tag" data-js="quiz-tag">???</li>
            </ul>
            <button
               aria-label="button bookmark"
               class="quizcard__bookmark"
               data-js="quizcard__bookmark"
               data-bookmarked="false"
            ></button>
        </section>
    `;

   const newQuestion = newQuizCard.querySelector('[data-js="question-paragraph"]');
   const newAnswer = newQuizCard.querySelector('[data-js="answer-paragraph"]');
   const newTag = newQuizCard.querySelector('[data-js="quiz-tag"]');

   newQuestion.textContent = question.value;
   newAnswer.textContent = answer.value;
   newTag.textContent = tag.value;

   // <-- attach quizCard -->
   addQuestionForm.insertAdjacentElement("afterend", newQuizCard);

   // <-- create event listeners -->
   // <--------------------------------------------------------------------------------------------
   const questionCardBookmark = newQuizCard.querySelector('[data-js="quizcard__bookmark"]');
   const questionCardButton_ShowAnswer = newQuizCard.querySelector('[data-js="quizcard__show-answer"]');

   // <-- bookmark -->
   questionCardBookmark.addEventListener("click", (event) => {
      const bookmark = event.target.closest('[data-js="quizcard__bookmark"]');

      if (bookmark.dataset.bookmarked === "false") {
         bookmark.classList.add("bookmarked");
         bookmark.dataset.bookmarked = true;
      } else {
         bookmark.classList.remove("bookmarked");
         bookmark.dataset.bookmarked = false;
      }
   });

   // <-- show answer -->
   questionCardButton_ShowAnswer.addEventListener("click", (event) => {
      const buttonShowAnswer = event.target.closest('[data-js="quizcard__show-answer"]');
      const questionCard = event.target.closest('[data-js="quizcard__card"]');
      const answerField = questionCard.querySelector('[data-js="answer-field"]');
      const answerParagraph = questionCard.querySelector('[data-js="answer-paragraph"]');

      if (answerParagraph.classList.contains("is-faded")) {
         answerParagraph.classList.remove("is-faded");
         answerField.classList.remove("is-collapsed");
         answerParagraph.style.transitionDelay = "0.5s";
         answerField.style.transitionDelay = "0.0s";
      } else {
         answerParagraph.classList.add("is-faded");
         answerField.classList.add("is-collapsed");
         answerParagraph.style.transitionDelay = "0.0s";
         answerField.style.transitionDelay = "0.5s";
      }
   });
}
