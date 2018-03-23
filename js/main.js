jQuery(function($) {
    var nav = $('#globalNavi'),
    offset = nav.offset();
    $(window).scroll(function () {
      if($(window).scrollTop() > offset.top) {
        nav.addClass('fixed');
      } else {
        nav.removeClass('fixed');
      }
    });
  });