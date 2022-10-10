$(document).ready(function(){
    // gnb 1depth 메뉴 밑줄
    $('.gnb>li').on('click',function(){
        $('.gnb>li').css({"text-decoration-line":"none","color":"#666666",});
        $(this).css({"text-decoration": "2px underline","color":"#000000"});
    })
    $('.gnb>li').on('mouseover',function(){
        $(this).css({"color":"#000000"});
    })
    $('.gnb>li').on('mouseleave',function(){
        $('.gnb>li').css({"color":"#666666",});
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
        $('.depth1').show();
        $('.gnb>li').css({"text-decoration":"none","color":"#666666"});
    })
    
    // max-width: 768px
    // 슬라이드
    // 뒤로가기 버튼
    $('.fa-angle-left').on('click',function(){
        $('.depth2').stop().hide();
        $('.depth1 label').show();
    })
    //햄버거메뉴 클릭시 슬라이드
    $('input[id="menuicon"]').on('click',function(){
        $('.gnb').stop().slideToggle();
        $('.gnb p').slideDown();
    })
    $('.gnb_search div').on('click',function(){
        $('.gnb_search').stop().slideUp();
    })
    
    

    // 검색창 변화
    $('.search').on('click',function(){
        $('.gnb_search').slideDown();
        $('.depth1 label').hide();
        $('main').css({"filter":"brightness(0.4)"});
    })
    $('.gnb_search').on('mouseleave',function(){
        $('.gnb_search').slideUp();
        $('main').css({"filter":"none"});
    })

    // 검색 이벤트
    $('#keyword').keyup(function(){ 
        $('.search_keyword').children().css('display','none');
        var search_text = $(this).val();
        $('.search_keyword li:contains('+search_text+')').show();
    });
})