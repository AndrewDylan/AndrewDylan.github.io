$(document).ready(function(){;
	$(".navbar ul").hide();
	$(".navbar").hover(function(){
    	$(".navbar ul").slideDown();
    	$(".navbar-image").effect("bounce", "slow");
    }, function(){
    	$(".navbar ul").slideUp();
	});
});