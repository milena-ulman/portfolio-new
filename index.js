window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
$(document).on("DOMContentLoaded", function() {
  $(".loader-container").show();
});

$(document).on("load", function() {
  $(".loader-container").fadeOut();
});
new WOW().init();

$(document).ready(function() {
  $(".first-button").on("click", function() {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function() {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function() {
    $(".animated-icon3").toggleClass("open");
  });
});
const animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  render: "svg",
  loop: true,
  path: "data.json",
  speed: 0
});
const computerAnim = bodymovin.loadAnimation({
  container: document.getElementById("computer"),
  render: "svg",
  loop: true,
  path: "computer.json"
});
const computerPrograming = bodymovin.loadAnimation({
  container: document.getElementById("programing"),
  render: "svg",
  loop: true,
  path: "pro.json",
  speed: 0
});
const prototypeAnimation = bodymovin.loadAnimation({
  container: document.getElementById("prototype"),
  render: "svg",
  loop: true,
  path: "prototype.json",
  speed: 0
});
const loader = bodymovin.loadAnimation({
  container: document.getElementById("loader"),
  render: "svg",
  loop: true,
  path: "loader.json",
  speed: 0
});
