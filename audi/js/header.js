$(function(){
    $('.gnb>li:nth-child(2)').on('click',function(){
        $('.depth2').hide();
        $('header>div:nth-child(2)').stop().slideDown();
    })
    $('.gnb>li:nth-child(3)').on('click',function(){
        $('.depth2').hide();
        $('header>div:nth-child(3)').stop().slideDown();
    })
    $('.gnb>li:nth-child(4)').on('click',function(){
        $('.depth2').hide();
        $('header>div:nth-child(4)').stop().slideDown();
    })
    $('.gnb>li:nth-child(5)').on('click',function(){
        $('.depth2').hide();
        $('header>div:nth-child(5)').stop().slideDown();
    })
    $('.depth2').on('mouseleave',function(){
        $('.depth2').slideUp();
    })
})