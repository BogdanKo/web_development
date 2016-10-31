$(document).ready(function (){
   $('.mobile').on('click', function(){
     $('.sidebar').slideToggle('open');
   });
});

window.onresize = function (event){
  if ($('window').width() > 320){
    $('.sidebar').show();
  }
}
