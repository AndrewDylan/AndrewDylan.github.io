
$(document).ready(function(){
	$(".navbar ul").hide();
	$(".navbar").hover(function(){
    	$(".navbar ul").slideDown();
    }, function(){
    	$(".navbar ul").slideUp();
	});
	//Try using a css Hover and if statements in js

	//Navbar Scrolling
	$("#home-anchor").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#info-page").offset().top
    	}, 1500);
	});
	$("#aboutMe-anchor").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#aboutMe-page").offset().top
    	}, 1500);
	});
	$("#works-anchor").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#works-page").offset().top
    	}, 1500);
	});
	$("#contact-anchor").click(function() {
    	$('html, body').animate({
        	scrollTop: $("#contact-page").offset().top
    	}, 1500);
    });

	//Parallax Bubbles
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var bubble3 = document.getElementById('bubbles3')
var bubble4 = document.getElementById('bubbles4')
var bubble5 = document.getElementById('bubbles5')
var bubble6 = document.getElementById('bubbles6')
 
function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 bubble1.style.top = -scrolltop * .6 + 'px' // move bubble1 at 20% of scroll rate
 bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
 bubble3.style.top = -scrolltop * .6 + 'px' // move bubble1 at 20% of scroll rate
 bubble4.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
 bubble5.style.top = -scrolltop * .6 + 'px' // move bubble1 at 20% of scroll rate
 bubble6.style.top = -scrolltop * .6 + 'px' // move bubble2 at 50% of scroll rate
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
});

