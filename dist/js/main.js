const menuBtn = document.querySelector(".menu-btn");
const menuBtnLines = document.querySelectorAll(".btn-lines");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let isMenuShown = false;

menuBtn.addEventListener("click", displayMenu);
function displayMenu() {
  if (!isMenuShown) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((btnLine) => {
      btnLine.classList.add("show");
    });
    isMenuShown = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((btnLine) => {
      btnLine.classList.remove("show");
    });
    isMenuShown = false;
  }
}
