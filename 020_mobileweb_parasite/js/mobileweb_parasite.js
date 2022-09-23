$(function(){  
    var windowWidth = $(window).width();
    var windowheight = $( window ).height();
    console.log("브라우저 높이값은 :" + windowheight,"브라우저 넓이값은"+windowWidth);
    // DOM #wrap에 동적 높이값 적용
    $("#wrap").css({height:windowheight});
})
