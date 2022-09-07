$(document).ready(function () {
  $(".open").on("click", function () {
    $(".content").show("fast");
  });
  $(".close").on("click", function () {
    $(".content").hide("fast");
  });
  $(".open1").on("click", function () {
    $(this).parent().next().show("fast");
  });
  $(".close1").on("click", function () {
    $(this).parent().next().hide("fast");
  });
});
