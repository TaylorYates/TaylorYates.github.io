
function about() {
  $(".portfolio").fadeOut(200);
  $(".cv").fadeOut(200);
  $(".contact").fadeOut(200);
  $("#left").attr("class", "pink");
  $("#right").attr("class", "pink");
  $(".about").fadeIn(500);
}

function cv() {
  $(".about").fadeOut(200);
  $(".portfolio").fadeOut(200);
  $(".contact").fadeOut(200);
  $("#left").attr("class", "blue");
  $("#right").attr("class", "blue");
  $(".cv").fadeIn(500);
}

function portfolio() {
  $(".about").fadeOut(200);
  $(".cv").fadeOut(200);
  $(".contact").fadeOut(200);
  $("#left").attr("class", "yellow");
  $("#right").attr("class", "yellow");
  $(".portfolio").fadeIn(500);
}

function contact() {
  $(".about").fadeOut(200);
  $(".portfolio").fadeOut(200);
  $(".cv").fadeOut(200);
  $("#left").attr("class", "green");
  $("#right").attr("class", "green");
  $(".contact").fadeIn(500);
}

function activeLink() {
  $("nav a").css("font-style", "normal");
  $(this).css("font-style", "italic");
}

function formValidation() {
  var numberInput = $("#number").val();
  if (numberInput.length < 8 && numberInput.length > 0) {
    $(".phoneErrorMessage").fadeIn(200);
  }
  else $(".phoneErrorMessage").fadeOut(200);
}

function sent() {
  $(".sentMessage").fadeIn(200);
  window.setTimeout(function() {
    $(".sentMessage").fadeOut();
  }, 2000);
}

function start() {
$(".aboutLink").click(about);
$(".portfolioLink").click(portfolio);
$(".cvLink").click(cv);
$(".contactLink").click(contact);
$("#send").click(sent);
$("#number").keyup(formValidation);
$("nav a").click(activeLink);
}

$(document).ready(start);
