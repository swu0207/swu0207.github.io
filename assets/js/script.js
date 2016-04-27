$(document).ready(function() {

  /* Add border when hover */ /* Fix sharpness if have time */
    $('.circle-image').hover(function() {
      setTimeout(function(){
        $('.circle-image').addClass('circle-image-border');
      }, 100);
      }, function() {
      $('.circle-image').removeClass('circle-image-border');
    });

    /* Textbook appear on click*/
  
    $('.circle-image').click(function(){
      if ($('.hidden-box').hasClass('hidden-box-active')) {
        $('.hidden-box').removeClass('hidden-box-active');
        setTimeout(function(){
          $('.hidden-box').hide();
        }, 400);
      } else {
        $('.hidden-box').show();
        setTimeout(function(){
          $('#circle-image').addClass('circle-image-border');
          $('.hidden-box').addClass('hidden-box-active');
        }, 0);
      }  
    });

    $('#home-text').waypoint(function(direction){
      // offset: 50;
      if (direction == "down") {
          $('.hidden-box').fadeIn(8000);
          $('.hidden-box').addClass('hidden-box-active');
      } else {
          $('.hidden-box').removeClass('hidden-box-active');
      }
    });

    $('#home-text').waypoint(function(direction){
      // offset: 50;
      if (direction == "down") {
          $('.circle-image').fadeIn(8000);
          $('.circle-image').addClass('circle-image-active');
      } else {
          $('.circle-image').removeClass('circle-image-active');
      }
    });

    $('.image-wrapper').waypoint(function(direction){
      // offset: 50;
      if (direction == "up") {
          $('.hidden-box').fadeIn(5000);
          $('.hidden-box').addClass('hidden-box-active');
      } else {
          $('.hidden-box').removeClass('hidden-box-active');
      }
    });

    $('.image-wrapper').waypoint(function(direction){
      // offset: 50;
      if (direction == "up") {
          $('.circle-image').fadeIn(5000);
          $('.circle-image').addClass('circle-image-active');
      } else {
          $('.circle-image').removeClass('circle-image-active');
      }
    });

    /* Down arrow on homepage scrolling */
  $(".down-arrow").click(function() {
    $("html, body").animate({ scrollTop: 960 }, 500);
    return false;
  });

  /* Navbar Scrolling */

  $("#nav-title").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  /* http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery */

  /* Scroll to sections */
    $("#nav-about").click(function() {
    $("html, body").animate({ scrollTop: 960 }, 500);
    return false;
  });

    $("#nav-projects").click(function() {
    $("html, body").animate({ scrollTop: 1920 }, 500);
    return false;
  });

    $("#nav-contact").click(function() {
    $("html, body").animate({ scrollTop: 2980 }, 500);
    return false;
  });


});
