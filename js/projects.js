import { ShowBurgerMenu } from "./utils.js";
import {fetchJSONData} from "./data.js"
import  {CreateProjectCards} from "./utils.js"
import { ThemeToggle } from "./utils.js";
import  {ScrollUp} from "./utils.js";

//saved theme checkbox
const savedTheme = document.getElementById("theme-toggle");

//scroll up button
const scrollUpBttn = document.querySelector(".scroll-up");

document.addEventListener("DOMContentLoaded", function () {

  fetchJSONData().then((projectsData) => {
    if (!projectsData){
        console.log("Data cannot be fetched");//coulnd't retrive data
    } else {  //Data is succesfully retrived
          
        let projectCards = CreateProjectCards(projectsData);


    }
});

  //scroll up button logic 
  ScrollUp();
   
  //swithcing page theme logic
  ThemeToggle();

  //handles burger menu
  ShowBurgerMenu();

});
