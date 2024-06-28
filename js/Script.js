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

// $(window).scroll(function () {
//   if (scrolling < $(window).scrollTop()) {
//     $(".navbar").slideUp();
//   } else {
//     $(".navbar").slideDown();
//   }
//   scrolling = $(window).scrollTop();
// });

// let allLinks = document.querySelectorAll('.nav-item');

// allLinks.forEach((link)=>{
//   link.addEventListener('click',removeActive)
// })

// function removeActive() {
//   allLinks.forEach((link)=>{
//     link.classList.remove('active')
//     this.classList.add('active')
//   })
// }

let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.nav-item');
window.addEventListener('scroll',()=>{
  sections.forEach(section =>{
    let top = window.scrollY;
    let offset = section.offsetTop - 40;
    let id = section.getAttribute('id');
    // if(top >= offset && top < offset + hight){
    if(top >= offset){
      links.forEach(link=>{
        link.classList.remove('active');
        let aHref  = document.querySelectorAll('ul li a[href*=' + id + ']');
        console.log(aHref);
        aHref.forEach(href=>{
          href.parentElement.classList.add('active')
        })
      })
    }
  })
})
// let navItems = document.querySelectorAll(".nav-item");
// let navbarCollapse = document.querySelector(".navbar-collapse");
// let navbarToggler = document.querySelector(".navbar-toggler");

// navItems.forEach((navItem) => {
//   navItem.addEventListener("click", () => {
//     navbarCollapse.style.display = "none";
//   });
// });

// navbarToggler.addEventListener("click", () => {
//   if (navbarToggler.classList.contains("collapse")) {
//     navbarCollapse.style.display = "none";
//   } else {
//     navbarCollapse.style.display = "block";
//   }
// });
