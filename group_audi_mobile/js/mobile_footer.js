$(document).ready(function(){
    var footerMobile = $(window).width();

    /* var delay = 300;
    var timer = null;
    $(window).on('resize', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            if (window.innerWidth <=768) {
                $('.footer .footer_flex dl dt').on('click',function(){
                    $(this).siblings().stop().slideToggle(100);
                    $(this).find('img').toggleClass('rotate-reset');        
                });
            }
        }, delay);
    }); */
    


    if (footerMobile <= 768){
        $('.footer .footer_flex dl dt').on('click',function(){
            $(this).siblings().stop().slideToggle(100);
            $(this).find('img').toggleClass('rotate-reset');        
        });
    } 
    
    /* $(window).resize(function() {
        if($(window).width() > 768) { 		
            $('.footer .footer_flex dl dt').on('click',function(){
                $(this).siblings().stop().slideToggle(100);
                $(this).find('img').stop().toggleClass('rotate-reset');        
            }); 	
        } 
    }); */
});

