// gnb 1depth 메뉴 밑줄
$('.gnb>li').on('click',function(){
    $('.gnb>li').css({"text-decoration":"none","color":"#666666"});
    $(this).css({"text-decoration": "2px underline","color":"black"});
})
// gnb 메뉴 슬라이드
$('.gnb>li:nth-child(2)').on('click',function(){
    $('.depth2').stop().slideUp();
    $('header>div:nth-child(2)').stop().slideToggle();
})
$('.gnb>li:nth-child(3)').on('click',function(){
    $('.depth2').stop().slideUp();
    $('header>div:nth-child(3)').stop().slideToggle();
})
$('.gnb>li:nth-child(4)').on('click',function(){
    $('.depth2').stop().slideUp();
    $('header>div:nth-child(4)').stop().slideToggle();
})
$('.gnb>li:nth-child(5)').on('click',function(){
    $('.depth2').stop().slideUp();
    $('header>div:nth-child(5)').stop().slideToggle();
})
$('.depth2').on('mouseleave',function(){
    $('.depth2').slideUp();
    $('.gnb>li').css({"text-decoration":"none","color":"#666666"});
})

// 검색창 변화
$('.search').on('click',function(){
    $('.gnb_search').slideDown();
    $('main').css({"filter":"brightness(0.4)"});
})
$('.gnb_search').on('mouseleave',function(){
    $('.gnb_search').slideUp();
    $('main').css({"filter":"brightness()"});
})

// 검색 이벤트
$('#keyword').keyup(function(){ 
    $('.search_keyword').children().css('display','none');
    var search_text = $(this).val();
    $('.search_keyword li:contains('+search_text+')').show();
});