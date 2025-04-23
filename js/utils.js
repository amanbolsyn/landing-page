
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

    //timer
    setTimeout(ShowSlides, 3000);

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

   console.log(mobileNavLinks)

   //
   window.addEventListener("resize", function(){
    if(screen.width>600 || screen.width<375) {
        burgerIcon.style.display = "none"
        closeIcon.style.display = "none"
        mobileNav.classList.remove("menu-visible")
        //
      } else if(screen.width<=600 && screen.width>=375){
        //
          if(this.window.getComputedStyle(burgerIcon).getPropertyValue("display") === "none"
        && this.window.getComputedStyle(closeIcon).getPropertyValue("display") === "none"){
            burgerIcon.style.display = "block"
        }
      }
   } )
}

export {ShowSlides, ShowBurgerMenu}