$(window).scroll(function() {
    if (($(window).scrollTop() >= 760 && $(window).scrollTop() <= 1889) || $(window).scrollTop() >= 2500) {
      $('.nav-link').addClass('scroll');
    } else {
      $('.nav-link').removeClass('scroll');
    }
  });