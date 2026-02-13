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

   createQuizCard(customQuestion, customAnswer);
});

function createQuizCard(question, answer) {
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
               <li class="quizcard__tag">html</li>
               <li class="quizcard__tag">structure</li>
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

   newQuestion.textContent = question.value;
   newAnswer.textContent = answer.value;

   addQuestionForm.insertAdjacentElement("afterend", newQuizCard);
}
