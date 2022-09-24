$(document).ready(function () {
  $(".nav a").click(function (e) {
    //기본기능 제거
    e.preventDefault();
    //scrollTo(링크될 # || y축픽셀값 ,애니메이트시간)
    $(window).scrollTo(this.hash || 0, 1000);
  });
  //   스크롤 100px이상 되었을때 top버튼 나오도록 코딩
  $(window).scroll(function () {
    var scT = $(window).scrollTop();
    console.log(scT);
    // 방식 2개 하나는 window의 스크롤탑 이용하여 값받기 하나는 윈도우.scrollY / X 이용하여 값받기
    if (window.scrollY > 200) {
      $("aside div").show();
    } else {
      $("aside div").hide();
    }
  });
  $(".top").click(function (e) {
    e.preventDefault();
    $("body,html").stop().animate({ scrollTop: 0 }, 1000);
  });
});
