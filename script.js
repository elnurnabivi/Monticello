$(document).ready(() => {
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

  $(function initMap() {
    const location = { lat: 50.84, lng: 4.3 };
    const $mapSelector = $("#map");
    const map = new google.maps.Map($mapSelector.get(0), {
      zoom: 8,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  });
});

const seeMore = document.querySelector(".btn-seemore");
seeMore.addEventListener("click", function () {
  window.location.href = "./gallery.html";
});
