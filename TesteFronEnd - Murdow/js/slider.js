$(document).ready(function() {
	var currentSlide = 1;
	var animationSpeed = 1000;
	
	var timer = setInterval(function(){ slideshow() }, 3000);

	$("#sliderNavigation ul li").click(function(){
		var btnId = $(this).attr('id');

		clearInterval(timer);

		$("#slide0" + currentSlide).animate({"left": "-150%"}, animationSpeed);
		$("#slide0" + btnId).animate({"left": "0%"}, animationSpeed);
		currentSlide = parseInt(btnId);	

		timer = setInterval(function(){ slideshow() }, 3000);

	});

	function slideshow() {
		var next = currentSlide + 1;;
		if(next == 4)
			next = 1;

		$("#slide0" + currentSlide).animate({"left": "-150%"}, animationSpeed);
		$("#slide0" + next).animate({"left": "0%"}, animationSpeed);

		currentSlide++;
		if(currentSlide == 4)
			currentSlide = 1;				
	}
	
});