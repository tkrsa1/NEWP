$(document).ready(function () {
  fullset();
  quickClick();
});
function fullset() {
  var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
  for (var i = 1; i <= pageindex; i++) {
    $("#fullpage > .quick > ul").append("<li></li>");
  }
  $("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
  //마우스 휠 이벤트
  $(window).bind("mousewheel", function (event) {
    var page = $(".quick ul li.on");
    //alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
    if ($("body").find("#fullpage:animated").length >= 1) return false;
    //마우스 휠을 위로
    if (event.originalEvent.wheelDelta >= 0) {
      var before = page.index();
      if (page.index() >= 0)
        page.prev().addClass("on").siblings(".on").removeClass("on"); //퀵버튼옮기기
      var pagelength = 0;
      for (var i = 1; i < before; i++) {
        pagelength += $(".full" + i).height();
      }
      if (page.index() > 0) {
        //첫번째 페이지가 아닐때 (index는 0부터 시작임)
        page = page.index() - 1;
        $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
      } else {
        alert("첫번째페이지 입니다.");
      }
    } else {
      // 마우스 휠을 아래로
      var nextPage = parseInt(page.index() + 1); //다음페이지번호
      var lastPageNum = parseInt($(".quick ul li").size()); //마지막 페이지번호
      //현재페이지번호 <= (마지막 페이지 번호 - 1)
      //이럴때 퀵버튼옮기기
      if (page.index() <= $(".quick ul li").size() - 1) {
        page.next().addClass("on").siblings(".on").removeClass("on");
      }

      if (nextPage < lastPageNum) {
        //마지막 페이지가 아닐때만 animate !
        var pagelength = 0;
        for (var i = 1; i < nextPage + 1; i++) {
          //총 페이지 길이 구하기
          //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
          pagelength += $(".full" + i).height();
        }
        $("#fullpage").animate({ top: -pagelength + "px" }, 1000, "swing");
      } else {
        // 현재 마지막 페이지 일때는
        alert("마지막 페이지 입니다!");
      }
    }
  });
  $(window).resize(function () {
    //페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
    var resizeindex = $(".quick ul li.on").index() + 1;

    var pagelength = 0;
    for (var i = 1; i < resizeindex; i++) {
      //총 페이지 길이 구하기
      //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
      pagelength += $(".full" + i).height();
    }

    $("#fullpage").animate({ top: -pagelength + "px" }, 0);
  });
}
// 사이드 퀵버튼 클릭 이동
function quickClick() {
  $(".quick li").click(function () {
    var gnbindex = $(this).index() + 1;
    var length = 0;
    for (var i = 1; i < gnbindex; i++) {
      length += $(".full" + i).height();
    }
    if ($("body").find("#fullpage:animated").length >= 1) return false;
    $(this).addClass("on").siblings("li").removeClass("on");

    $("#fullpage").animate({ top: -length + "px" }, 800, "swing");
    return false;
  });
}

$(function(){

  const $text = document.querySelector(".text");
  
  // 글자 모음 - 개행문자(\n)로 줄바꿈
  const letters = [
    "Hello!",
    "안녕하세요.",
    "개발자를 꿈꾸는 \n 이용재입니다.",
    "#LYJ"
  ];
  
  // 글자 입력 속도
  const speed = 120;
  let i = 0;
  
  // 줄바꿈을 위한 <br> 치환
  const changeLineBreak = (letter) => {
    return letter.map(text => text === "\n" ? "<br>" : text);
  }
  
  // 타이핑 효과
  const typing = async () => {  
    // 기존코드에서 개행치환코드 추가
    const letter = changeLineBreak(letters[i].split(""));
    
    while (letter.length) {
      await wait(speed);
      $text.innerHTML += letter.shift(); 
    }
    
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
}

// 글자 지우는 효과
const remove = async () => {
  // 기존코드에서 개행치환코드 추가
  const letter = changeLineBreak(letters[i].split(""));
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 2000);
});

jQuery(document).ready(function($) {

  $(".scroll").click(function(event){            
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});