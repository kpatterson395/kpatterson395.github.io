var slideIndex = 0;
var dotIndex= 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var hide=true;

$(document).ready(function(){


	$( window ).scroll(function() {
     if ($(this).scrollTop() > 10) {
        $("#navBar").css("background", "rgba(255, 255, 255, 0.7");
        $("#navBar").css("color", "black");
        $("#logoImg").attr("src", "https://www.truefoodkitchen.com/images/truefoodkitchen_color_logo.png");
        $("#upLink").css("display", "block")

     }
     else{
        $("#navBar").css("background", "none");
        $("#navBar").css("color", "white");
		$("#logoImg").attr("src", "https://www.truefoodkitchen.com/images/truefoodkitchen_white_logo.png");
		$("#upLink").css("display", "none");
     }
	});

	showSlides();

	$(".sidebarBtn").on("mouseenter", function(){
		displayMenu($(this).attr("id"));
	})

	$(".sidebarBtn").on("mouseleave", function(){
		hideMenu($(this).attr("id"));
	})


	$(".ctrlNav").on("click", function(){
		if(hide){
			$(".fa-times").css("display", "block");
			$(".fa-bars").css("display", "none");
			$("#navLinks").css("display", "block");
			hide=false;
		}
		else {
			$(".fa-times").css("display", "none");
			$(".fa-bars").css("display", "block");
			$("#navLinks").css("display", "none");
			hide=true;
		}
	});
});


function displayMenu(className) {
		$(".extend."+className).css("opacity", "1");
		$(".extend."+className).css("visiblity", "visible");
}

function hideMenu(className) {
		$(".extend."+className).css("opacity", "0");
		$(".extend."+className).css("visiblity", "hidden");
}

function showSlides() {
  for (i = 0; i < slides.length; i++) {
      slides[i].style.visibility = "hidden";
      slides[i].style.opacity = 0;
      dots[i].style.backgroundColor = "rgba(255, 255, 255, 0)";

  }
  slideIndex++;
  dotIndex++;
  if (slideIndex> slides.length) {slideIndex = 1} 
  if (dotIndex > dots.length) {dotIndex=1}

  slides[slideIndex-1].style.visibility = "visible"; 
  slides[slideIndex-1].style.opacity = 1; 
  dots[dotIndex-1].style.backgroundColor = "rgba(255, 255, 255, 1)";
  setTimeout(showSlides, 8000)

}



