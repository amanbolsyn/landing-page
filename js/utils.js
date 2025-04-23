
const slides = document.querySelectorAll(".slide");

const burgerIcon = document.getElementById("burger-menu");
const closeIcon = document.getElementById("close-icon");
const mobileNav = document.querySelector(".mobile-nav-container");


let slideIndex = 0;

//get dots from every slide
document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", function() {

        //make all slides not visible 
        for(let i = 0; i<slides.length; i++){
            slides[i].style.display="none";
        }
   
        slides[index%3].style.display = "block";


        slideIndex = index%3;     
   })
});


function ShowSlides(){
    
    //make all slides not visible 
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display="none";
    }
   
    slideIndex++;

    //checks if slide index didn't went out of range
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    //make slide visible 
    slides[slideIndex-1].style.display = "block"



    const slideTiming = setTimeout(ShowSlides, 3000);

    // slides[slideIndex-1].addEventListener("mouseover", function(){
    //    clearInterval(slideTiming);
    // });

    // slides[slideIndex-1].addEventListener("mouseout", function(){
    //     setTimeout(ShowSlides, 3000);
    // });

}



//burger menu logic
function ShowBurgerMenu(){
   burgerIcon.addEventListener("click", function() {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    mobileNav.classList.add("menu-visible");
   })

   closeIcon.addEventListener("click", function() {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none"
    mobileNav.classList.remove("menu-visible");
   })

   mobileNav.querySelectorAll("a").forEach((link) =>{

     link.addEventListener("click", function(){
        burgerIcon.style.display = "block";
        closeIcon.style.display = "none"
        mobileNav.classList.remove("menu-visible");
     })
   });


   //
   window.addEventListener("resize", function(){
    if(screen.width>600 || screen.width<375) {
        burgerIcon.style.display = "none";
        closeIcon.style.display = "none";
        mobileNav.classList.remove("menu-visible");
        //
      } else if(screen.width<=600 && screen.width>=375){
          if(this.window.getComputedStyle(burgerIcon).getPropertyValue("display") === "none"
        && this.window.getComputedStyle(closeIcon).getPropertyValue("display") === "none"){
            burgerIcon.style.display = "block";
        }
      }
   } )
}


function CreateProjectCards(projectsData){

    const cards = [];

    for(let i = 0; i<projectsData.length; i++){
        //creating project card container
        let projectCard = document.createElement("article")
        projectCard.classList.add("project-card")
        projectCard.classList.add("section-four-card-"+(i+1));

        //project img
        let projectCardImg  = document.createElement("img");
        projectCardImg.src = `assets/projects-page-images/project-img-${i+1}.png`;
        projectCardImg.alt = `project image ${i+1}`;


        //project tag
        let projectCardTag = document.createElement("a");
        projectCardTag.innerHTML = projectsData[i].tag;

        //project title
        let projectCardTitle = document.createElement("h3")
        projectCardTitle.innerHTML = projectsData[i].title;

       //project discription
        let projectDiscription = document.createElement("p");
        projectDiscription.innerHTML = projectsData[i].description;

        //project date
        let projectDuration = document.createElement("a");
        let duration = ConvertDays(projectsData[i].meta.duration_days);
        projectDuration.innerHTML = duration + " | " + projectsData[i].meta.technologies;

        if(projectsData[i].meta.works){
            projectDuration.innerHTML +=   " | "  + projectsData[i].meta.works
        }

        projectDuration.classList.add("project-duration");

        let projectDate = document.createElement("a");
        projectDate.innerHTML = projectsData[i].created_at;
        projectDate.classList.add("project-date")

        projectCard.appendChild(projectCardImg);
        projectCard.appendChild(projectCardTag)
        projectCard.appendChild(projectCardTitle);
        projectCard.insertAdjacentHTML("beforeend" ,`<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                        alt="arrow right up">
                        <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#181D27" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>`);
        projectCard.appendChild(projectDiscription);
        projectCard.appendChild(projectDuration);
        projectCard.appendChild(projectDate);

        console.log(projectCard);
        cards.push(projectCard);

      }

      return cards;
}

//converting duration days of projects
function ConvertDays(days){
    let date; 

    if(days>=1  && days<= 7){
       date = days + " days";
    } else if(days>7 && days<=31){
        days = Math.floor(days/7);
        date = days + " weeks"
    } else if(days>31){
        days = Math.floor(days/31);
        date = days + " months"
    }

    return date;
}


function ThemeToggle() {
//saved theme checkbox
const savedTheme = document.getElementById("theme-toggle");

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

}


function ScrollUp() {
//scroll up button
const scrollUpBttn = document.querySelector(".scroll-up");

//handels the dissaperance of scroll up button
window.addEventListener("scroll", function() {
    if(document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        scrollUpBttn.style.display = "block";
    } else {
        scrollUpBttn.style.display = "none";
    }
});

//scroll up button function
scrollUpBttn.addEventListener("click", function() {
    scrollTo(0,0)
});

}

function FAQAccrodion(){
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
        questionAnswer.style.display = "none";
      }

    });
  });
}

export {ShowSlides, ShowBurgerMenu, CreateProjectCards, ThemeToggle, ScrollUp, FAQAccrodion}