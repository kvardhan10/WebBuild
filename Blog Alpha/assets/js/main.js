$(document).ready(function(){
  $("#open-menu").click(function(){
    $("#menu").css("opacity", '1');
    $("#menu").css("transform", "scale(1)");
    $("#open-menu").css("opacity", '0');
    $("#open-menu").css("transform", "scale(0)");
    $("#close-menu").css("opacity", '1');
    $("#close-menu").css("transform", "scale(1)");
  });

  $("#close-menu").click(function(){
    $("#menu").css("opacity", '0');
    $("#menu").css("transform", "scale(0)");
    $("#close-menu").css("opacity", '0');
    $("#close-menu").css("transform", "scale(0)");
    $("#open-menu").css("opacity", '1');
    $("#open-menu").css("transform", "scale(1)");
  });












});
