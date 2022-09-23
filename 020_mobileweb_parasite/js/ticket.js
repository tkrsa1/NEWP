$("#myBtn").on('click',myFunction)
function myFunction() {
    var dots = $("#dots");
    var moreButton = $("#more");
    var textButton = $("#myBtn");
    var result = $("#dots").css("display");

    if(result==="none"){
        dots.css({display:"inline"});
        textButton.text("+MORE");
        moreButton.css({display:"none"});
    }else{//초기로딩상태 시작
        dots.css({display:"none"});
        textButton.text("-CLOSE");
        moreButton.css({display:"inline"});
    }
}