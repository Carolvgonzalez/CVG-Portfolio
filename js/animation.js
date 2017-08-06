$(document).ready(function(){
	$(".button-primary").hover(function (){
		$(this).css({
			"background-color": "#fe14a7", "transition": "5s, ease-out"});
		$(this).addClass("hide");

		}, function(){
		$(this).css("background-color", "transparent");
		$(this).removeClass("hide");
	});
});


console.log("I am working");

	/*$(".menu-object").hover(function(){
		$(this).css("background-color", "#fe14a7");
	});
	$(".nav-icon3").click(function(){ //when closed
		$(".sidebar-menu").addClass("hide-menu");
	});

	$(".open").click(function(){ //when opened
		$(".sidebar-menu").removeClass("hide-menu");
	});
*/