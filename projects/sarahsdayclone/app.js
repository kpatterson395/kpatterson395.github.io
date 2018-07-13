var slideIndex = 1;
var dotIndex= 1;
var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var navDisplay = false;

$(document).ready(function() {

  $(window).on("resize", function(){
  if($(this).width() > 768){
    $("#header-list1").css("display", "inline-block");
    $("#header-list2").css("display", "inline-block");
    $("#header-logo").css("display", "inline-block");
    $(".fas").css("display", "none");
    navDis=false;
  }
  else if ($(this).width()<768){
    $("#header-list1").css("display", "none");
    $("#header-list2").css("display", "none");
    $("#header-logo").css("display", "inline-block");
    $(".fa-bars").css("display", "block");
    $(".fa-times").css("display", "none");
    navDis=false;     
  }


});

  $(".navIcons").on("click", function(){
  	displayNav();

  });

  $(".next").on("click", function(){
    plusSlides(1);
  });


  $(".prev").on("click", function(){
    plusSlides(-1);
  });





  $("body").scroll(function() {
       if ($("body").scrollTop() > 10) {
           $("header").css("background", "rgba(255, 255, 255, 0.5)");
           $("#header-logo h1").css("font-size", "15px");

       }else{
           $("header").css("background", "rgba(255, 255, 255, 1)");
           $("#header-logo h1").css("font-size", "30px");

       }
  });



});

function displayNav() {
	if (!navDisplay){
		$("#header-list1").css("display", "block");
  	$("#header-list2").css("display", "block");
  	$("#header-logo").css("display", "none");
  	$(".fa-bars").css("display", "none");
  	$(".fa-times").css("display", "block");
	  navDisplay= true;
	}
	else {
		$("#header-list1").css("display", "none");
	  	$("#header-list2").css("display", "none");	
	  	$("#header-logo").css("display", "inline-block");
	  	$(".fa-bars").css("display", "block");
	  	$(".fa-times").css("display", "none");
	  	navDisplay = false;	
	}


}

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



