const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", positionWindow);
  sideBar.classList.remove("menu-active");
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigation");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("menu-active");
});

document.addEventListener("click", (e) => {
  if (!sideBar.contains(e.target) && !menuBar.contains(e.target)) {
    sideBar.classList.remove("menu-active");
  }
});

/* ========
Debugger plugin, simple demo plugin to console.log some of callbacks
======== */
function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("click");
  });
  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    console.log("reachBeginning");
  });
  on("reachEnd", () => {
    if (!swiper.params.debugger) return;
    console.log("reachEnd");
  });
}

// Init Swiper
var swiper = new Swiper(".swiper", {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".program .swiper-button-next",
    prevEl: ".program .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    370: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },

    990: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // Enable debugger
  debugger: true,
});
