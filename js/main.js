import { StartSlideshow } from "./utils.js";
import { ShowBurgerMenu } from "./utils.js";
import { fetchJSONData } from "./data.js";
import { CreateProjectCards } from "./utils.js";
import { ThemeToggle } from "./utils.js";
import { ScrollUp } from "./utils.js";
import { FAQAccrodion } from "./utils.js";
import { Shuffle } from "./utils.js";

const sectionFour = document.querySelector(".section-four");
const sectionFourButton = document.querySelector(".section-four-button");

document.addEventListener("DOMContentLoaded", function () {
  fetchJSONData().then((projectsData) => {
    if (!projectsData) {
      console.log("Data cannot be fetched"); //coulnd't retrive data
    } else {
      //Data is succesfully retrived

      let projectCards = CreateProjectCards(projectsData);

      projectCards = Shuffle(projectCards);

      for (let i = 0; i < 3; i++) {
        sectionFour.insertBefore(projectCards[i], sectionFourButton);
      }
    }
  });

  //FAQ accordion logic
  FAQAccrodion();

  //scroll up button logic
  ScrollUp();

  //swithcing page theme logic
  ThemeToggle();

  //handles burger menu
  ShowBurgerMenu();

  //automatic slideshow logic
  StartSlideshow()
});
