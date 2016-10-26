$(document).ready(function() {
	 /* Add border when hover */ /* Fix sharpness if have time */
    $('.circle-image').hover(function() {
      setTimeout(function(){
      $('.circle-image').addClass('circle-image-border');
      }, 100);
      }, function() {
      $('.circle-image').removeClass('circle-image-border');
    });

 //    $(window).scroll(function(){
	// 	var offsetY = $(window).scrollTop();
	// 	console.log(offsetY);
	// });
	
	$('.about-section').waypoint(function(direction){
		if (direction == "down") {
			$('.about-section').addClass('about-color-change');
		} else {
			$('.about-section').removeClass('about-color-change');
		}
	});

	$('.experience-section').waypoint(function(direction){
		if (direction == "down") {
			$('.experience-section').addClass('experience-color-change');
		} else {
			$('.experience-section').removeClass('experience-color-change');
		}
	});

});
