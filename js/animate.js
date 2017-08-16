console.log('printing');

var canvas = document.querySelector('canvas').getContext('2d'); //we are selecting
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lazers = [];

function addLazer(){
	var x = Math.floor(Math.random() * canvas.width) + 1;
	var y = 0;
	var s = Math.floor(Math.random() * 3) + 1; //gives me layer of lazers
	lazers.push({"x" :  x, "y": y, "s" : s});
}

function lazer(){
	addLazer();
	for (var i = 0; i < lazers.length; i++) {
		
	}
}


function initCanvas (){
   canvas.clearRect(0, 0, canvas.width, canvas.height);
   lazer();
}