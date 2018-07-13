
var navDisplay = false;

$(document).ready(function() {
	$(window).on("resize", function(){
		if($(this).width() > 768){
			$(".navBar-links").css("display", "inline-block");
			$(".fas").css("display", "none");
			navDis=false;
		}
		else if ($(this).width()<768){
			$(".navBar-links").css("display", "none");
			$(".fa-bars").css("display", "block");
			$(".fa-times").css("display", "none");
			navDis=false;			
		}
	});

	$(".ctrlNav").on("click", function(){
		displayNav();
	});
	$(".menu-head").on("mouseenter", function(){
		displayMenu($(this).attr("id"));
	});

	$(".menu-head").on("mouseleave", function(){
		hideMenu($(this).attr("id"));
	});
});


function displayMenu(className) {
		$(".menu-dropdown."+className).css("opacity", "1");
		$(".menu-dropdown."+className).css("visiblity", "visible");
	
}

function hideMenu(className) {
		$(".menu-dropdown."+className).css("opacity", "0");
		$(".menu-dropdown."+className).css("visiblity", "hidden");
}

function displayNav() {
	if (!navDisplay){
		$(".navBar-links").css("display", "block");
	  	$(".fa-bars").css("display", "none");
	  	$(".fa-times").css("display", "block");
	  	
	  	navDisplay= true;
	}
	else {
		$(".navBar-links").css("display", "none");
	  	$(".fa-bars").css("display", "block");
	  	$(".fa-times").css("display", "none");
	  	navDisplay = false;	
	}


}