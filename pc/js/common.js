const btnTop = $(".btn-top");
const header = $("#header");
const gnb = $("#gnb");
$(window).on("scroll", function () {
  //console.log("스크롤이 되고 있습니다.");
  //console.log(window.scrollY);
  if ($(window).scrollTop() > 0) {
    header.addClass("on");
  } else {
    header.removeClass("on");
  }
  if ($(window).scrollTop() > 500) {
    btnTop.addClass("on");
  } else {
    btnTop.removeClass("on");
  }
});

btnTop.on("click", function () {
  gsap.to(window, { scrollTo: 0, duration: 1 });
});

$(".family-site button").on("click", function () {
  $(".family-site").toggleClass("on");
});

const lnbMenu = $("#lnb .lnb-box > a");

lnbMenu.on("click", function (e) {
  e.preventDefault();
  const selectedsiblings = $(this).next();
  const siblingsdepth02 = $(this).parent().siblings().find("ul");
  const siblings = $(this).parent().siblings().find("a");

  siblingsdepth02.slideUp();
  selectedsiblings.stop().slideToggle();
  $(this).toggleClass("on");
  siblings.removeClass("on");
});
