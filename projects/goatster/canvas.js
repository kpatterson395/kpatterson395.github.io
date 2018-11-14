var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var c = canvas.getContext('2d');


function Car(x, y, w, h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.draw = function(){
		c.fillStyle = "red";
		c.fillRect(this.x, this.y, this.w, this.h);
	}
	this.update = function(){
		if(this.x+this.w > innerWidth){
			this.x = 0;
		} else {
			this.x = this.x + 10;
		}
		
		this.draw();
	}
}


var carArray = [];


for (var i = 0; i<10; i++){
	var x = 10
	var y = Math.random()*(innerHeight);
	var w = (Math.random()*40)+10;
	var h = (Math.random()*40)+10;
	carArray.push(new Car(x, y, w, h))
}

for ( var i =0; i < carArray.length; i++){
	carArray[i].draw();
}

function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for ( var i =0; i < carArray.length; i++){
		carArray[i].update();
	}

}

animate();