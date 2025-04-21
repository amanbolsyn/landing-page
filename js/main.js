document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".q-container").forEach((question, index) => {
    question.addEventListener("click", function () {


      const plusButton = question.querySelector(".q-button>.q-plus-button");
      const minusButton = question.querySelector(".q-button>.q-minus-button");
      const questionAnswer = question.querySelector(".q-answer");


      if (window.getComputedStyle(plusButton).getPropertyValue("display") === "block") {
        plusButton.style.display = "none";
        minusButton.style.display = "block";
        questionAnswer.style.display = "block"
      } else {
        plusButton.style.display = "block";
        minusButton.style.display = "none";
        questionAnswer.style.display = "none"
      }

    });
  });
});
