$(function(){
    $('.introduction_wrap_1 .introduction_wrap_gnb ul li:nth-child(1)').on('click',function(){
        $('.introduction_wrap_2').show();
        $('.introduction_wrap_3').hide();
        $('.introduction_wrap_4').hide();
        $('.introduction_wrap_5').hide();
        $('.introduction_wrap_11 .introduction_wrap_gnb1').hide();
    });
    $('.introduction_wrap_1 .introduction_wrap_gnb ul li:nth-child(2)').on('click',function(){
        $('.introduction_wrap_3').show();
        $('.introduction_wrap_2').hide();
        $('.introduction_wrap_4').hide();
        $('.introduction_wrap_5').hide();
        $('.introduction_wrap_11 .introduction_wrap_gnb1').hide();
    });
    $('.introduction_wrap_1 .introduction_wrap_gnb ul li:nth-child(3)').on('click',function(){
        $('.introduction_wrap_4').show();
        $('.introduction_wrap_11 .introduction_wrap_gnb1').show();
        $('.introduction_wrap_2').hide();
        $('.introduction_wrap_3').hide();
        $('.introduction_wrap_5').hide();
    });
    $('.introduction_wrap_1 .introduction_wrap_gnb ul li:nth-child(4)').on('click',function(){
        $('.introduction_wrap_5').show();
        $('.introduction_wrap_2').hide();
        $('.introduction_wrap_3').hide();
        $('.introduction_wrap_4').hide();
        $('.introduction_wrap_11 .introduction_wrap_gnb1').hide();
    });
});