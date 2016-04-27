$(document).ready(function() {

  /* Add border when hover */ /* Fix sharpness if have time */
    $('#circle-image').hover(function() {
      setTimeout(function(){
        $('#circle-image').addClass('circle-image-border');
      }, 100);
      }, function() {
      $('#circle-image').removeClass('circle-image-border');
    });

    /* Textbook appear on click*/
  
    $('#circle-image').click(function(){
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



  /* Carousel for displaying projects (Probably not implemented atm) */
  $('#carousel-next').click(function(){
    var currentMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    // console.log(currentMargin);
    if(currentMargin <= -3840) {
      return false;
    }
    else {
      var updated = currentMargin - 960;
      $('#carousel').css('margin-left', updated);
    }
  });

  $('#carousel-prev').click(function(){
    var currentMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    // console.log(currentMargin);
    if(currentMargin >= 0) {
      return false;
    }
    else {
      var updated = currentMargin + 960;
      $('#carousel').css('margin-left', updated);
    }
  });

  /* Navbar Scrolling */

  $("#nav-title").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
  /* http://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery */

  /* Scroll to sections */
    $("#nav-about").click(function() {
    $("html, body").animate({ scrollTop: $("#about-section").offset().top }, 500);
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
