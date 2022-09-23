$(document).ready(function(){
      /* 각 항목 열기/닫기 */
    $('article p').hide();

    $('.open1').on('click',function(){
        $(this).parent().next().slideDown();
    })
    $('.close1').on('click',function(){
        $(this).parent().next().slideUp();
    })
      /* 모두열기 / 모두닫기 */
    $('.open').on('click',function(){
        $('.content').stop().slideDown();
    })
    $('.close').on('click',function(){
        $('.content').stop().slideUp();
    })
});