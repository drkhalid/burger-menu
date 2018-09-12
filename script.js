$(".burger").click(() => {
  $(".menu").toggleClass("burmenu");
  $(".menu").toggleClass("reburmenu");

  $("header").toggleClass("main");
  $("header").toggleClass("remain");
  $("nav:first-child").toggleClass("navline");
});
