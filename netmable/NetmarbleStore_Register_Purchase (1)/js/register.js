$(document).ready(function(){
    $('.firstCheck_content_cb_label').click(function(){
        $('.firstCheck_content').stop().slideToggle();
    });
    $('.secondCheck_content_cb_label').click(function(){
        $('.secondCheck_content').stop().slideToggle();
    });
    $('.thirdCheck_content_cb_label').click(function(){
        $('.thirdCheck_content').stop().slideToggle();
    });

    $("#register_agreeAllCheck").click(function() {
		if($("#register_agreeAllCheck").is(":checked")) $("input[name=agreeCheck]").prop("checked", true);
		else $("input[name=agreeCheck]").prop("checked", false);
	});

	$("input[name=agreeCheck]").click(function() {
		var total = $("input[name=agreeCheck]").length;
		var checked = $("input[name=agreeCheck]:checked").length;

		if(total != checked) $("#register_agreeAllCheck").prop("checked", false);
		else $("#register_agreeAllCheck").prop("checked", true); 
	});
});
