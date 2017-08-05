$(document).ready(function(){
	$(".menu-object").hover(function(){
		$(this).css("background-color", "#fe14a7");
	});
	$(".nav-icon3").click(function(){ //when closed
		$(".sidebar-menu").addClass("hide-menu");
	});

	$(".open").click(function(){ //when opened
		$(".sidebar-menu").removeClass("hide-menu");
	});

});


console.log("I am working");

