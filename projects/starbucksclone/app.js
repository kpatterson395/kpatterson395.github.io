

$(document).ready(function() {


	$(".menu-head").on("mouseenter", function(){
		displayMenu($(this).attr("id"));
	})

	$(".menu-head").on("mouseleave", function(){
		hideMenu($(this).attr("id"));
	})
});


function displayMenu(className) {
		$(".menu-dropdown."+className).css("opacity", "1");
		$(".menu-dropdown."+className).css("visiblity", "visible");
	
}

function hideMenu(className) {
		$(".menu-dropdown."+className).css("opacity", "0");
		$(".menu-dropdown."+className).css("visiblity", "hidden");
}