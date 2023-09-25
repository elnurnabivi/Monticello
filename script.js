$(document).ready(() => {
  console.log("hey");
  $("#recipeCarousel").carousel({
    interval: 10000,
  });
  $(".carousel .carousel-item").each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
    for (var i = 0; i < minPerSlide; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next.children(":first-child").clone().appendTo($(this));
    }
  });
  // //main-slider
  $(".slider").slick({
    dots: true,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3700,
    infinite: true,
    prevArrow: "", // Set to an empty string to hide the left arrow
    nextArrow: "",
  });
});
