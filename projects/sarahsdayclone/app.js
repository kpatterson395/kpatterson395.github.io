var slideIndex = 1;
var dotIndex= 1;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");

$(document).ready(function() {

  $(".next").on("click", function(){
    plusSlides(1)
  });


  $(".prev").on("click", function(){
    plusSlides(-1)
  });


// $( window ).scroll(function() {
// 	$("header").css("background-color", "rgba(255, 255, 255, 0.5)")

// });



$( window ).scroll(function() {
     if ($(this).scrollTop() > 10) {
         $("header").css("background", "rgba(255, 255, 255, 0.5)");
         $("#header-logo h1").css("font-size", "15px");

     }else{
         $("header").css("background", "rgba(255, 255, 255, 1)");
         $("#header-logo h1").css("font-size", "30px");

     }
});



});



function plusSlides(n) {
	dotIndex+=n;
	showSlides(slideIndex += n);

}




function showSlides(n) {

  if (n > slides.length) {slideIndex = 1; dotIndex = 1} 
  if (n < 1) {slideIndex = slides.length; dotIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.visibility = "hidden";
      slides[i].style.opacity = 0;
      dots[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";


  }
  slides[slideIndex-1].style.visibility = "visible"; 
  slides[slideIndex-1].style.opacity = 1; 

  dots[dotIndex-1].style.backgroundColor = "rgba(255, 255, 255, 1)";

}