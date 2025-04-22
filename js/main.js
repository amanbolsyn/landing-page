
//Saved theme 
const savedTheme = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", function () {

  //FAQ accordion 
  document.querySelectorAll(".q-container").forEach((question) => {
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



//Theme saving
const themePref = localStorage.getItem("theme-preference")
if (themePref === "false") {
    savedTheme.checked = false;
} else if (themePref === "true") {
    savedTheme.checked = true;
}

savedTheme.addEventListener("change", function() {

    localStorage.setItem("theme-preference", savedTheme.checked)

});




});
