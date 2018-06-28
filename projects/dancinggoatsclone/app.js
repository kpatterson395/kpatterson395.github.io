
$(document).ready(function(){
	$("#custFav1").on("mouseenter", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-LegendsDG_HOVER_.png");
	});
	$("#custFav1").on("mouseleave", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-LegendsDG.png");
	});

	$("#custFav2").on("mouseenter", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-Latitudes-col_HOVER_.png");
	});
	$("#custFav2").on("mouseleave", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-Latitudes-col.png");
	});

	$("#custFav3").on("mouseenter", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-Attitudes-LAM_HOVER_.png");
	});
	$("#custFav3").on("mouseleave", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/customer-favorites-sep/FAV-Attitudes-LAM.png");
	});
	$("#findImg").on("mouseenter", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/find-us-slider/Locations_HOVER_.jpg");
	});
	$("#findImg").on("mouseleave", function(){
		$(this).attr("src","https://www.batdorfcoffee.com/media/find-us-slider/Locations.jpg");
	});


	$(".menu").on("mouseenter", function(){
		displayMenu($(this).attr("id"));
	})

	$(".menu").on("mouseleave", function(){
		hideMenu($(this).attr("id"));
	})


})



function displayMenu(className) {
		$(".dropdown."+className).css("opacity", "1");
		$(".dropdown."+className).css("visiblity", "visible");
	
}

function hideMenu(className) {
		$(".dropdown."+className).css("opacity", "0");
		$(".dropdown."+className).css("visiblity", "hidden");
}