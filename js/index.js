$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  //$(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});