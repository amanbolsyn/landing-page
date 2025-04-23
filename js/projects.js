import { ShowBurgerMenu } from "./utils.js";
import {fetchJSONData} from "./data.js"
import  {CreateProjectCards} from "./utils.js"
import { ThemeToggle } from "./utils.js";
import  {ScrollUp} from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {

  fetchJSONData().then((projectsData) => {
    if (!projectsData){
        console.log("Data cannot be fetched");//coulnd't retrive data
    } else {  //Data is succesfully retrived
          
        let projectCards = CreateProjectCards(projectsData);


        const projectsPageContainer = document.querySelector(".projects-page-container");

        for(let i = 0; i<projectCards.length; i++){
            projectsPageContainer.appendChild(projectCards[i])
        }
    }
});

  //scroll up button logic 
  ScrollUp();
   
  //swithcing page theme logic
  ThemeToggle();

  //handles burger menu
  ShowBurgerMenu();

});
