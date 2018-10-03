

$(".project-link").mouseenter(function() {
	$(this).find("p").removeClass("hide-class");
})

$(".project-link").mouseleave(function() {
	$(this).find("p").addClass("hide-class");
})