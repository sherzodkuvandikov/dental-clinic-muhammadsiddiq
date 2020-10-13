const hamburger = document.querySelector(".close-btn");
const navmenu = document.querySelector(".site-nav-js");


hamburger.addEventListener("click", () => {
    navmenu.classList.toggle("site-nav-js--open");
})