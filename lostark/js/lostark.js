$(document).ready(function(){
    $('.slider').bxSlider({
    mode :'fade',
    pager:false,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
    $('.slider2').bxSlider({
    mode :'horizontal',
    pager:true,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
    $('.slider3').bxSlider({
    mode :'fade',
    pager:false,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
    $('.slider4').bxSlider({
    mode :'fade',
    pager:false,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
    $('.slider5').bxSlider({
    mode :'horizontal',
    pager:false,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
    $('.slider6').bxSlider({
    mode :'fade',
    pager:false,
    auto:true,
    autoHover: true,
    controls: false,
    infiniteLoop:true
    });
});
$(window).scroll(function () { 
    var scrollValue = $(document).scrollTop(); 
        if(scrollValue>=30){
        $(".overheader").hide();
        $(".underheader").css({"backgroundColor":"black"});
        $(".underheader").css({"position":"fixed"});
    }   
    else{
        $(".overheader").show();
        $(".underheader").css({"backgroundColor":"transparent"});
        $(".underheader").css({"position":"absolute"});
    }
});