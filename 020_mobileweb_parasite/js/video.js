var bw = $(window).width();
var bh = $(window).height();

console.log("λλΉ :" + bw + "\n" + "λμ΄ :" + bh);
$("#wrap").height(bh);
$(".youtube").css({ "margin-top": bh / 2 });
