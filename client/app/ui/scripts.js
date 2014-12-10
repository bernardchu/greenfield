$('document').ready(function(){
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 15) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
});