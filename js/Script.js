lightGallery(document.querySelector(".Gallery .gallery-container"));

$(document).ready(function () {
  $("button.top").click(function () {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("button.top").fadeIn();
    } else {
      $("button.top").fadeOut();
    }
  });
});

let scrolling = $(window).scrollTop();

$(window).scroll(function () {
  if (scrolling < $(window).scrollTop()) {
    $(".navbar").slideUp();
  } else {
    $(".navbar").slideDown();
  }
  scrolling = $(window).scrollTop();
});

let navItems = document.querySelectorAll(".nav-item");
let navbarCollapse = document.querySelector(".navbar-collapse");
let navbarToggler = document.querySelector(".navbar-toggler");

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navbarCollapse.style.display = "none";
  });
});

navbarToggler.addEventListener("click", () => {
  if (navbarToggler.classList.contains("collapse")) {
    navbarCollapse.style.display = "none";
  } else {
    navbarCollapse.style.display = "block";
  }
});
