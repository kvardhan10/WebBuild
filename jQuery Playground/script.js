$(document).ready(function() {
  $(".heading").addClass("animated bounceInDown")
  $("button").addClass("animated bounce");
  $(".targetl").css("color", "red");
  $(".targetr").css("color", "#254ddb");
  $("body").addClass("animated fadeIn");
  $(".flip").css("visibility", "none");

});

$( "#start" ).click(function() {
  $(".start").addClass("animated bounceOut");
  $(".flip").addClass("animated lightSpeedInRight");

  function flip(event){
  	var element = event.currentTarget;
  	if (element.className === "card") {
      if(element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

});
