
function about() {
  $("span").fadeOut(200);
  $("#main").css("background-color", "#FFF5EE");
  $(".about").fadeIn(500);
}

function cv() {
  $("span").fadeOut(200);
  $("#main").css("background-color", "#F8F8FF");
  $(".cv").fadeIn(500);
}

function portfolio() {
  $("span").fadeOut(200);
  $("#main").css("background-color", "#FFFFF0");
  $(".portfolio").fadeIn(500);
}

function contact() {
  $("span").fadeOut(200);
  $("#main").css("background-color", "#EAFEEA");
  $(".contact").fadeIn(500);
}

function activeLink() {
  $("nav a").css("font-style", "normal");
  $(this).css("font-style", "italic");
}

function start() {
  $(".aboutLink").click(about);
  $(".portfolioLink").click(portfolio);
  $(".cvLink").click(cv);
  $(".contactLink").click(contact);
  $("nav a").click(activeLink);
}

$(document).ready(start);
