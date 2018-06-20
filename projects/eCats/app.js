var slideIndex = 1;
var slides = document.getElementsByClassName("slides");
var breedIndex = 0;
var breeds = document.getElementsByClassName("breedSlide");
var imageArr= ["https://images.pexels.com/photos/205975/pexels-photo-205975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdf10e1615dc7c122da9b74cd9cfcc0f&auto=format&fit=crop&w=668&q=80", 
"https://images.unsplash.com/photo-1506102785777-2744046d4da8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3e8cb594e83131a7448b2023f7b26fd&auto=format&fit=crop&w=1652&q=80", 
"https://images.unsplash.com/photo-1501413334794-233d56ab2c78?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e391ce731403ce5c2b6a7ae35e23215f&auto=format&fit=crop&w=1655&q=80", 
"https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cb78de7049ab49aaa8b6ce363b8986&auto=format&fit=crop&w=1650&q=80",
"https://images.unsplash.com/photo-1508292549404-81fd946f8c2e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=17cef5b2f74f9bc91a12d06301112152&auto=format&fit=crop&w=1650&q=80",
"https://images.unsplash.com/photo-1452873867668-7325bd9f4438?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ee9208cf6d5b5e2384c69d9120fa049&auto=format&fit=crop&w=2550&q=80", 
"https://images.unsplash.com/photo-1496522650602-5988dce09660?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=124418c3f40f8216c7f62b7f1a2434c3&auto=format&fit=crop&w=1650&q=80", 
"https://images.unsplash.com/photo-1445499348736-29b6cdfc03b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efe39024f3bb67566f0debc82b292464&auto=format&fit=crop&w=1650&q=80", 
"https://images.unsplash.com/photo-1491833485966-73cfb9ccea53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=46d77b84b6a50bf258f30d18ed26338d&auto=format&fit=crop&w=668&q=80", 
"https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88858281e7f14f3306675d31b1f0645&auto=format&fit=crop&w=1650&q=80", 
"https://images.unsplash.com/photo-1518843025960-d60217f226f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d6d1b9ef3b1a2f5a20201c4d426de9&auto=format&fit=crop&w=668&q=80"]



var currImg =["https://images.pexels.com/photos/205975/pexels-photo-205975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 
"https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdf10e1615dc7c122da9b74cd9cfcc0f&auto=format&fit=crop&w=668&q=80", 
"https://images.unsplash.com/photo-1506102785777-2744046d4da8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3e8cb594e83131a7448b2023f7b26fd&auto=format&fit=crop&w=1652&q=80", 
"https://images.unsplash.com/photo-1501413334794-233d56ab2c78?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e391ce731403ce5c2b6a7ae35e23215f&auto=format&fit=crop&w=1655&q=80", 
"https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cb78de7049ab49aaa8b6ce363b8986&auto=format&fit=crop&w=1650&q=80"]



$(document).ready(function() {

  $(".next").on("click", function(){
    plusSlides(1)
  });


  $(".prev").on("click", function(){
    plusSlides(-1)
  });

   $(".breedNext").on("click", function(){

    plusBreeds(1)
  });


  $(".breedPrev").on("click", function(){
    plusBreeds(-1)
  });


});

// Next/previous controls
function plusSlides(n) {

	showSlides(slideIndex += n);

}

function plusBreeds(n) {
	if (n>0){
		currImg.shift();
		if (breedIndex === imageArr.length-1){
			breedIndex=0;
			currImg.push(imageArr[breedIndex+4]);

		}
	  	else if (breedIndex+6 > imageArr.length){
	  		breedIndex+=n;
	  		currImg.push(imageArr[breedIndex+4-imageArr.length]);	

	  	}
	  	else {
	  		breedIndex += n;
	  		currImg.push(imageArr[breedIndex+4]);

	  	}
	}



	else if (n<0){
		currImg.pop();
		if (breedIndex-1 <0){
			breedIndex=imageArr.length-1;
		}
		else {
			breedIndex += n;
		}
		currImg.unshift(imageArr[breedIndex]);
	}


  	showBreeds();
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

function showBreeds() {

  for (i = 1; i <= currImg.length; i++) {

	
		$(".breed"+[i]+ " img").attr("src", currImg[i-1]);




	}



}
