var bw = $(window).width();
var bh = $(window).height();

console.log("너비 :" + bw + "\n" + "높이 :" + bh);
$("#wrap").height(bh);
$(".youtube").css({ "margin-top": bh / 2 });
