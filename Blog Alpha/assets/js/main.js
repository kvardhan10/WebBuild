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

//SwiperJS
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
