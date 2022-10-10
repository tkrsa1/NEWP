// 스와이퍼
var swiper = new Swiper('.swiper-container', {
    slidesPerView:8.7,
    loop:false,
    // centeredSlides:true
    // navgaition: {
    //     nextEl:'.swiper-button-next',
    //     prevEl:'.swiper-button-prev'
    // }
});


// 로딩시 모델 유형 리스트 감추기
$('.tab_main_content_01').hide();
// 클릭시 탑 메인 메뉴 변경
$('.top_content_wrap0').on('click',function(){
    $('.tab_main_content_01').hide();
    $('.tab_main_content_00').stop().slideDown();
});
$('.top_content_wrap1').on('click',function(){
    $('.tab_main_content_00').hide();
    $('.tab_main_content_01').stop().slideDown();
});


// 클릭시 탑 서브메뉴 변경
var topTab = $('#top_content_list_container').find('li');
var i = 0;
function top_content_menu(num2) {
    for(i=0; i<topTab.length; i++){
        if(num2 == i){
            $('.submenu0' + i).stop().slideToggle();
        }else{
            $('.submenu0' + i).stop().hide();
        }
    }
}

// x버튼 클릭시 서브메뉴 닫기
$('.content_submenu_x_button').click(function(){
    $(this).parent('.top_content_submenu_wrap').stop().slideUp();
});


// 부드러운 스크롤링
$('#top_content_list_container a').click(function(e){
    e.preventDefault();
    // scrollTO 플러그인 사용
    // scrollTo(링크 될 # || y축 픽셀값, 애니메이션 시간)
    $(window).scrollTo(this.hash || 0, 300);
    });

// 메뉴 선택시 밑줄, css변경    

$('#mainTopContentMenu>li').on('click',function(){
    $('#mainTopContentMenu>li').css({"text-decoration-line":"none","color":"#b4b4b4"});
    $(this).css({"text-decoration": "underline","color":"black"});
})



// 미디어쿼리 자바스크립트
if (matchMedia("screen and (max-width: 768px)").matches) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView:1.5,
        loop:false,
    });
}
