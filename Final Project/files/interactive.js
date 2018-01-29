jQuery(document).ready(function() {

  //CLICK FOR MOUSE USERS
  $('.lightbulb').click(function (){
    //HIDE TAGLINE
    $('#tagline').toggleClass('hidden');
    //BACKGROUND LIGHTS UP
    $('#background').toggleClass('color-change-back');
    $('#background').toggleClass('back-color');
    //CIRCLE LIGHTS UP
    $('#circle').toggleClass('color-change-circle');
    $('#circle').toggleClass('circle-color');
    $('#circle').toggleClass('size-change-circle');
    //MOVE CHARACTER
    $('#man').toggleClass('move-man');
    //SHOW TEXT/BUTTON
    $('#text').toggleClass('show-text');
    $('.button').toggleClass('buttonIn');
    $('.button').toggleClass('opacity');
    //START CLOUD MOVEMENT
    $('.clouds').toggleClass('cloud-move');
  });

  //KEYPRESS ENTER FOR KEYBOARD USERS
  $(document).keypress(function(e){
    var keypressed = e.which;
    if(keypressed == 13){
      //HIDE TAGLINE
      $('#tagline').toggleClass('hidden');
      //BACKGROUND LIGHTS UP
      $('#background').toggleClass('color-change-back');
      $('#background').toggleClass('back-color');
      //CIRCLE LIGHTS UP
      $('#circle').toggleClass('color-change-circle');
      $('#circle').toggleClass('circle-color');
      $('#circle').toggleClass('size-change-circle');
      //MOVE CHARACTER
      $('#man').toggleClass('move-man');
      //SHOW TEXT/BUTTON
      $('#text').toggleClass('show-text');
      $('.button').toggleClass('buttonIn');
      $('.button').toggleClass('opacity');
      //START CLOUD MOVEMENT
      $('.clouds').toggleClass('cloud-move');
    }
  });
  //PAGE TRANSITION
  $('#btn-text').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(500, newpage);
  });
  function newpage() {
    window.location = newLocation;
  }

});
