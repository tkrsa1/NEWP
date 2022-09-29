$(function(){
    $(window).scroll(function(){

        var 높이 = $(window).scrollTop();
        console.log(높이);
      
        var y =  -1/600 * 높이 + 115/50;
        $('.sec3 h3').css('opacity', y);
      });
    $(".button button").eq(0).click(function(){
        $(".button button").removeClass("on");
        $(".button button").eq(0).addClass("on");
        $(".article1 h2").html("하이 테크놀로지");
        $(".article1 p").html("혁신적인 기술, 기능에 초점을 둔 스포티한 디자인. 아우디 Q4 e-tron의 진보적인 실내 공간.")
        $(".div2 img").attr("src","./image/slider1.jpg");
    });
    $(".button button").eq(1).click(function(){
        $(".button button").removeClass("on");
        $(".button button").eq(1).addClass("on");
        $(".article1 h2").html("미래를 그리다");
        $(".article1 p").html("결연한 앞모습과 강인한 후면 디자인. 아우디 Q4 e-tron의 디자인은 전기 모빌리티의 미래를 제시합니다.")
        $(".div2 img").attr("src","./image/slider5.jpg");
    });
    $(".button button").eq(2).click(function(){
        $(".button button").removeClass("on");
        $(".button button").eq(2).addClass("on");
        $(".article1 h2").html("충전 시스템");
        $(".article1 p").html("가정을 포함한 충전 시설과 호환되는 스마트 솔루션과 함께 안심되는 주행이 가능합니다..")
        $(".div2 img").attr("src","./image/slider6.jpg");
    });
    const video =$('video');
    const doBtn =$('.movie_button');
    doBtn.click(function(){
        if(video.get(0).paused){ //첫번째 비디오의 속성 모두 가져왔을때, 멈춘상태면
            video.get(0).play();
            doBtn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
        }else{
            video.get(0).pause();
            doBtn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
        }
        });
});