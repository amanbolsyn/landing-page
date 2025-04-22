
const slides = document.querySelectorAll(".slide");

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




export {ShowSlides}