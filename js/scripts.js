function startUp() {
  $("span").css("display", "none");
  $(".about").css("display", "block");
  $(".aboutLinkActual").css("font-style", "italic");
}

function hideSection() {
 $("span").fadeOut(200);
}

function about() {
  $(".about").fadeIn(500);
}

function cv() {
  $(".cv").fadeIn(500);
}

function portfolio() {
  $(".portfolio").fadeIn(500);
}

function contact() {
  $(".contact").fadeIn(500);
}

function home() {
  $("nav a").css("font-style", "normal");
  $(".aboutLinkActual").css("font-style", "italic");
}

function activeLink() {
  $("nav a").css("font-style", "normal");
  $(this).css("font-style", "italic");
}

function start() {
  startUp();
  $(".hideSpans").click(hideSection);
  $(".aboutLink").click(about);
  $(".portfolioLink").click(portfolio);
  $(".cvLink").click(cv);
  $(".contactLink").click(contact);
  $("nav a").click(activeLink);
  $(".welcome").click(home);
}

$(document).ready(start);
