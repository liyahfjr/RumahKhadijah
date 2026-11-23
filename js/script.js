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
