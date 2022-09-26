$(function(){
    $(".open_banner>p").click(function(){
        $(".open_banner").css({display:"none"});
    });
    $(".close").click(function(){
        $(".asidebar").css({display:"none"});
    });
    var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});
});