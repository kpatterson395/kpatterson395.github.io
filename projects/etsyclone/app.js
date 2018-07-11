var slideIndex = 1;
var dotIndex= 1;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var navDisplay = false;

$(document).ready(function() {

	$("#slide-container").mouseenter(function(){
		displayBtn();
	});

	$("#slide-container").mouseleave(function(){
		hideBtn();
	});

	$(".menu-item").mouseenter(function(){
		displayMenu(true);
	});
	$(".menu-item").mouseleave(function(){
		displayMenu(false);
	});

	$(".next").on("click", function(){
	plusSlides(1);
	});


	$(".prev").on("click", function(){
	plusSlides(-1);
	});

});

function plusSlides(n) {
	dotIndex+=n;
	showSlides(slideIndex += n);

}

function displayBtn(){
	$(".prev").css("opacity", "1");
	$(".next").css("opacity", "1");

}

function hideBtn(){
	$(".prev").css("opacity", "0");
	$(".next").css("opacity", "0");

}

function displayMenu(dis){
	if (dis){
		$("#drop-down").css("display", "block");
	}
	else{
		$("#drop-down").css("display", "none");
	}

	
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