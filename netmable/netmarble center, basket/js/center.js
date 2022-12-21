$(document).ready(function(){
    $('.center_arrow').on('click', function(){
        $(this).siblings('.center_content').toggle();
    });
});