$('a[href^="#"]').bind('click.smoothscroll', function(e) {
  e.preventDefault();
  var target = this.hash,
    $target = $(target);
  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 700, 'swing', function() {
    window.location.hash = target;
  });
});

$('.hamburger').on('click', function() {
  var menu = $('.dropdown');
  menu.toggleClass('menu-active');
});
