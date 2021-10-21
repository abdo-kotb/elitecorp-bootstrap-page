// Hero section height

$(function () {
  "use strict";
  const winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));
});

// Images filtering

const shuffles = document.querySelectorAll(".shuffle-list li");
const imgs = document.querySelectorAll(".shuffle-imgs img");

shuffles.forEach(shuff =>
  shuff.addEventListener("click", function () {
    shuffles.forEach(shuff => shuff.classList.remove("active"));
    shuff.classList.add("active");
    if (this.getAttribute("classlist") === "all") {
      imgs.forEach(
        img => (img.style.cssText = "opacity: 1; pointer-events: auto;")
      );
    } else {
      imgs.forEach(img =>
        img.classList.contains(this.getAttribute("classlist"))
          ? (img.style.cssText = "opacity: 1; pointer-events: auto;")
          : (img.style.cssText = "opacity: 0.1; pointer-events: none;")
      );
    }
  })
);

// Scroll to top button

const scrollBtn = document.querySelector(".scroll");

window.onscroll = function () {
  this.scrollY >= 625
    ? (scrollBtn.style.right = "15px")
    : (scrollBtn.style.right = "-100px");
};

scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Changing the background color of the scrolling button when the Call To Action section is in the view port /* UNFINISHED */

const cta = document.querySelector(".section-cta");

const obs = new IntersectionObserver(function (entries) {
  entries[0].isIntersecting && entries[0].target === cta
    ? (scrollBtn.style.backgroundColor = "var(--blue)")
    : (scrollBtn.style.backgroundColor = "var(--red)");
});
obs.observe(cta);
obs.observe(cta.nextElementSibling);
