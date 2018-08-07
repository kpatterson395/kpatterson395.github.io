var slideIndex = 1;
var slides = document.getElementsByClassName("slides");


$(document).ready(function() {

  $(".next").on("click", function(){
    plusSlides(1)
  });


  $(".prev").on("click", function(){
    plusSlides(-1)
  });
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {

  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.visibility = "hidden";
      slides[i].style.opacity = 0;

  }
  slides[slideIndex-1].style.visibility = "visible"; 
  slides[slideIndex-1].style.opacity = 1; 

}

