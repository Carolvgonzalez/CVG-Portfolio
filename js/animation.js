$(document).ready(function(){
	$(".button-primary, .menu-pick").hover(function (){
		$(this).css({"background-color": "#fe14a7", "transition": "background-color 0.5s ease-in-out", 
		"-webkit-transition": "background-color 0.5s ease-in-out", "-moz-transition": "background-color 0.5s ease-in-out", 
		"-ms-transition": "background-color 0.5s ease-in-out", "-o-transition": "background-color 0.5s ease-in-out" });
		$(this).addClass("hide");	
		}, function(){
		$(this).css("background-color", "transparent");
		$(this).removeClass("hide");
	});

	/*$(".fa").hover(function(){
		$(this).css({"color": "yellow", "transition": "color 0.5s ease-in-out"});
	}); */

});
console.log("I am working");
