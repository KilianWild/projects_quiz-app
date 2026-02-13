const questionCardBookmark = document.querySelector('[data-js="quizcard__bookmark"]');
const questionCardButton_ShowAnswer = document.querySelector('[data-js="quizcard__show-answer"]');

questionCardBookmark.addEventListener("click", (event) => {
   const bookmark = event.target.closest('[data-js="quizcard__bookmark"]');

   console.log(bookmark.dataset.bookmarked);
   if (bookmark.dataset.bookmarked === "false") {
      bookmark.classList.add("bookmarked");
      bookmark.dataset.bookmarked = true;
   } else {
      bookmark.classList.remove("bookmarked");
      bookmark.dataset.bookmarked = false;
   }
});

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
