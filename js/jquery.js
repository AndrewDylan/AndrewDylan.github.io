$(document).ready(function(){;
	$(".navbar ul").hide();
	$(".navbar").hover(function(){
    	$(".navbar ul").slideDown();
    }, function(){
    	$(".navbar ul").slideUp();
	});
	//Try using a css Hover and if statements in js
});