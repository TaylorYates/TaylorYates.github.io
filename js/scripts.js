function hideSection() {
 $("span").fadeOut(200);
}

function about() {
  $(".background").css("background-color", "#FF6666");
  $(".about").fadeIn(500);
}

function cv() {
  $(".background").css("background-color", "#CCFF66");
  $(".cv").fadeIn(500);
}

function portfolio() {
  $(".background").css("background-color", "#31E3C3");
  $(".portfolio").fadeIn(500);
}

function contact() {
  $(".background").css("background-color", "#FF8811");
  $(".contact").fadeIn(500);
}

function home() {
  $(".background").css("background-color", "#FFD454");
  $("nav a").css("font-style", "normal");
}

function activeLink() {
  $("nav a").css("font-style", "normal");
  $(this).css("font-style", "italic");
}

function start() {
  $(".hideSpans").click(hideSection);
  $(".aboutLink").click(about);
  $(".portfolioLink").click(portfolio);
  $(".cvLink").click(cv);
  $(".contactLink").click(contact);
  $("nav a").click(activeLink);
  $(".welcome").click(home);
}

$(document).ready(start);
