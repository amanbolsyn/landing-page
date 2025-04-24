import { ShowBurgerMenu } from "./utils.js";
import { fetchJSONData } from "./data.js";
import { CreateProjectCards } from "./utils.js";
import { ThemeToggle } from "./utils.js";
import { ScrollUp } from "./utils.js";
import { FilterProjects } from "./utils.js";

const projectsContainer = document.querySelector(".projects-container");

const filters = document.querySelectorAll(".filter>a");

document.addEventListener("DOMContentLoaded", function () {
  fetchJSONData().then((projectsData) => {
    if (!projectsData) {
      console.log("Data cannot be fetched"); //coulnd't retrive data
    } else {
      //Data is succesfully retrived

      let projectCards = CreateProjectCards(projectsData);

      for (let i = 0; i < projectCards.length; i++) {
        projectsContainer.appendChild(projectCards[i]);
      }

      filters.forEach((filter) => {
        filter.addEventListener("click", function () {
          const prevActiveFilter = document.querySelector(".filter-active");
          prevActiveFilter.classList.remove("filter-active");
          filter.classList.add("filter-active");

          let projectCards = CreateProjectCards(projectsData);

          let filteredCards = FilterProjects(projectCards, filter.innerHTML);

          projectsContainer.innerHTML = "";
          for (let i = 0; i < filteredCards.length; i++) {
            projectsContainer.appendChild(filteredCards[i]);
          }
        });
      });
    }
  });

  //scroll up button logic
  ScrollUp();

  //swithcing page theme logic
  ThemeToggle();

  //handles burger menu
  ShowBurgerMenu();
});
