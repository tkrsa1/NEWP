$(document).ready(function(){
    $('a[href="#"]').click(function(ignore){
        ignore.preventDefault();
    });
    $('.topbtn').click(function(gotop){
        gotop.preventDefault();
        $('html, body').animate({scrollTop: 0},800);
    });
});