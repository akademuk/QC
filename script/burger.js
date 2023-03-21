$('.openBurger').click(function() {
  $('.menu').addClass('open_menu');
  $('.body').addClass('active');
});

$('.close').click(function() {
  $('.menu').removeClass('open_menu');
  $('.body').removeClass('active');
});

$('.headerExit').click(function() {
  $('.menu').removeClass('open_menu');
  $('.body').removeClass('active');
});