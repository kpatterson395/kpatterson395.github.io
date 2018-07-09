var slideIndex = 0;
var dotIndex= 0;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var navDis = false;

$(window).on("resize", function(){
	if($(this).width() > 1060){
		$(".navList").css("display", "inline-block");
		$(".fas").css("display", "none");
		navDis=false;
	}
	else if ($(this).width()<1060){
		$(".navList").css("display", "none");
		$(".fa-bars").css("display", "block");
		$(".fa-times").css("display", "none");
		navDis=false;			
	}


});

$(document).ready(function(){

	showSlides();
	$("body").scroll(function() {
		var pageTop = $(document).scrollTop();
		var pageBottom = $(window).height() + pageTop;
       	if (pageBottom > $(".sections").offset().top + $(".sections").outerHeight()) {
       		$(".sections").addClass("showMe");
        }
        else {
        	$(".sections").removeClass("showMe");
        }
     });



	$("#ctrlNav").on("click", function(){
	  	displayNav();
	});



});



function displayNav(){
	if (!navDis){
		$(".navList").css("display", "inline-block");
		$(".fa-bars").css("display", "none");
		$(".fa-times").css("display", "block");
		navDis=true;
	}
	else {
		$(".navList").css("display", "none");
		$(".fa-bars").css("display", "block");
		$(".fa-times").css("display", "none");
		navDis=false;
	}
}

function showSlides() {
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.visibility = "hidden";
	  slides[i].style.opacity = 0;
	  dots[i].style.backgroundColor = "rgba(255, 255, 255, 0.5)";

	}
	slideIndex++;
	dotIndex++;
	if (slideIndex> slides.length) {slideIndex = 1} 
	if (dotIndex > dots.length) {dotIndex=1}

	slides[slideIndex-1].style.visibility = "visible"; 
	slides[slideIndex-1].style.opacity = 1; 
	dots[dotIndex-1].style.backgroundColor = "rgba(255, 255, 255, 1)";
	setTimeout(showSlides, 5000)

}