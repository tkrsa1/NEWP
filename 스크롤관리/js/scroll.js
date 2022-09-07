$(document).ready(function () {
  $(".gnb a").click(function (e) {
    //기본기능 제거
    e.preventDefault();
    //scrollTo(링크될 # || y축픽셀값 ,애니메이트시간)
    $(window).scrollTo(this.hash || 0, 500);
  });
  //   스크롤 100px이상 되었을때 top버튼 나오도록 코딩
  $(window).scroll(function () {
    if (window.scrollY > 100) {
      $("aside div").show();
    } else {
      $("aside div").hide();
    }
  });

  $(".top").click(function (e) {
    e.preventDefault();
    $("body,html").stop().animate({ scrollTop: 0 }, 800, "swing");
  });
});
