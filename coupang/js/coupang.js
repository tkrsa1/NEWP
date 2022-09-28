$(".aside_div").mouseover(function(){
    $(".full_menu").stop().show();
});
$(".aside_div").mouseleave(function(){
    $(".full_menu").stop().hide();
});

$(".banner_next li").click(function(){
    $(".banner_next li").removeClass("onborder")
    $(this).addClass("onborder");
});


$(".banner_next li").eq(0).click(function(){
    $(".slider img").attr("src","./image/coupangbanner.jpg");
});
$(".banner_next li").eq(1).click(function(){
    $(".slider img").attr("src","./image/coupangbanner2.jpg");
});
$(".banner_next li").eq(2).click(function(){
    $(".slider img").attr("src","./image/coupangbanner3.jpg");
});
$(".banner_next li").eq(3).click(function(){
    $(".slider img").attr("src","./image/coupangbanner4.jpg");
});
$(".banner_next li").eq(4).click(function(){
    $(".slider img").attr("src","./image/coupangbanner5.jpg");
});
$(".banner_next li").eq(5).click(function(){
    $(".slider img").attr("src","./image/coupangbanner6.jpg");
});


$(".advertise i").click(function(){
    $(".advertise").hide();
});