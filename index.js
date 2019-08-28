$(document).ready(function() {
  $("#mu_app-loader").fadeOut();
  $("#mu_app").fadeIn();

  $(
    "a[href^='#mu-about'], a[href^='#mu-workflow'], a[href^='#mu-projects'], a[href^='#mu-contact']"
  ).click(function(e) {
    $(".navbar-toggler").click();
  });

  $(
    "a[href^='#mu-about'], a[href^='#mu-workflow'], a[href^='#mu-projects'], a[href^='#mu-contact']"
  ).click(function(e) {
    e.preventDefault();

    var position = $($(this).attr("href")).offset().top - 50;

    $("body, html").animate(
      {
        scrollTop: position
      },
      100
    );
  });
});

$(window).scroll(function() {
  const scroll = $(window).scrollTop();

  if (scroll > 10) {
    $(".mu-arrow-down").addClass("mu-hidden");
  } else {
    $(".mu-arrow-down").removeClass("mu-hidden");
  }
});
$(window).scroll(function() {
  const scroll = $(window).scrollTop();

  if (scroll > 1000) {
    $(".footer").addClass("mu-top");
  } else {
    $(".footer").removeClass("mu-top");
  }
});
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});
$(document).ready(function() {
  $(".mu-logo").click(function() {
    location.reload(true);
  });
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
    path: "data.json"
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
    path: "pro.json"
  });
  const prototypeAnimation = bodymovin.loadAnimation({
    container: document.getElementById("prototype"),
    render: "svg",
    loop: true,
    path: "prototype.json"
  });
});
let mainNavLinks = document.querySelectorAll("nav ul li a");
let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
WOW().init();
