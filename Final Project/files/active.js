jQuery(document).ready(function() {

  function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  }

  $('.dropdown').hide();

  $('.hamburger').click(function(){
    $('.dropdown').slideToggle(1000);
  });

  $('.checkmark').hide();

  $('input').click(function(){
    $(this).find('.checkmark').show();
  });
});
