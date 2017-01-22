$(document).ready(function() {
	  $(function(){
	      $("#home-name").typed({
	        strings: ["<strong>Hi, I'm Scarlett^1000</strong><br>  Aspiring Web Developer^1000<br> Love me pls"],
	        typeSpeed: 20,
	        // time before typing starts
            startDelay: 1000,
            backSpeed: 0,
            // time before backspacing
            backDelay: 1000
	  	});
	  });

	$('#home-button').click(function(e){    
	    // $('.section').fadeOut('fast', function(){
	    // 	$('.home-section').fadeIn('fast');
	    // });
	    $('.section').hide();
	    $('#home').css("display", "block");
		$('#about').css("display", "none");
	    $('#design').css("display", "none");
		$('#prog').css("display", "none");
		$('.home-section').fadeTo(500, 1);
	});

	$('#about-button').click(function(e){    
	    // $('.section').fadeOut('fast', function(){
	    // 	$('.about-section').fadeIn('fast');
	    // });
		$('.section').hide();
		$('#home').css("display", "none");
		$('#about').css("display", "block");
		$('#design').css("display", "none");
		$('#prog').css("display", "none");
		$('.about-section').fadeTo(500, 1);    	

	});

	$('#design-button').click(function(e){    
	    // $('.section').fadeOut('fast', function(){
	    // 	$('.experience-section').fadeIn('fast');
	    // });
	    $('.section').hide();
	    $('#home').css("display", "none");
		$('#about').css("display", "none");
	    $('#design').css("display", "block");
		$('#prog').css("display", "none");
		$('.design-section').fadeTo(500, 1);
	});

	$('#prog-button').click(function(e){    
	    // $('.section').fadeOut('fast', function(){
	    // 	$('.contact-section').fadeIn('fast');
	    // });
	    $('.section').hide();
	    $('#home').css("display", "none");
		$('#about').css("display", "none");
	    $('#design').css("display", "none");
		$('#prog').css("display", "block");
		$('.prog-section').fadeTo(500, 1);
	});

	$(".btn-img").hover(
  		function(){
  			$(".pic-div h1", this).css("display", "block");
		}, function(){
  			$(".pic-div h1", this).css("display", "none");
	});

	 /* Add border when hover */ /* Fix sharpness if have time */
    // $('.circle-image').hover(function() {
    //   setTimeout(function(){
    //   $('.circle-image').addClass('circle-image-border');
    //   }, 100);
    //   }, function() {
    //   $('.circle-image').removeClass('circle-image-border');
    // });
	
	// $('.about-section').waypoint(function(direction){
	// 	if (direction == "down") {
	// 		$('.about-section').addClass('about-color-change');
	// 	} else {
	// 		$('.about-section').removeClass('about-color-change');
	// 	}
	// });

	// $('.experience-section').waypoint(function(direction){
	// 	if (direction == "down") {
	// 		$('.experience-section').addClass('experience-color-change');
	// 	} else {
	// 		$('.experience-section').removeClass('experience-color-change');
	// 	}
	// });

});
